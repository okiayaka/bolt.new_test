"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Point {
  x: number
  y: number
  originX: number
  originY: number
}

interface WavesProps {
  lineColor?: string
  backgroundColor?: string
  waveSpeedX?: number
  waveSpeedY?: number
  waveAmpX?: number
  waveAmpY?: number
  friction?: number
  tension?: number
  maxCursorMove?: number
  xGap?: number
  yGap?: number
}

export function Waves({
  lineColor = "rgba(0, 0, 0, 0.3)",
  backgroundColor = "transparent",
  waveSpeedX = 0.02,
  waveSpeedY = 0.01,
  waveAmpX = 40,
  waveAmpY = 20,
  friction = 0.9,
  tension = 0.01,
  maxCursorMove = 120,
  xGap = 12,
  yGap = 36,
}: WavesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })
  const pointsRef = useRef<Point[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      // Initialize points
      pointsRef.current = []
      for (let x = 0; x < width; x += xGap) {
        for (let y = 0; y < height; y += yGap) {
          pointsRef.current.push({
            x: x,
            y: y,
            originX: x,
            originY: y,
          })
        }
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = lineColor
      ctx.lineWidth = 1

      let i = 0
      const time = Date.now()

      for (let r = 0; r < pointsRef.current.length; r++) {
        const point = pointsRef.current[r]
        i++

        const distX = mouseRef.current.x - point.originX
        const distY = mouseRef.current.y - point.originY
        const dist = Math.sqrt(distX * distX + distY * distY)

        const force = Math.max(maxCursorMove - dist, 0)
        const angle = Math.atan2(distY, distX)

        point.x = point.originX + Math.cos(angle) * force
        point.y = point.originY + Math.sin(angle) * force

        point.x += Math.sin(time * waveSpeedX + point.originY * 0.01) * waveAmpX
        point.y += Math.sin(time * waveSpeedY + point.originX * 0.01) * waveAmpY

        const dx = point.x - point.originX
        const dy = point.y - point.originY

        point.x -= dx * tension
        point.y -= dy * tension

        point.x *= friction
        point.y *= friction

        if (i > 1) {
          const prevPoint = pointsRef.current[r - 1]
          ctx.beginPath()
          ctx.moveTo(prevPoint.x, prevPoint.y)
          ctx.lineTo(point.x, point.y)
          ctx.stroke()
        }
      }

      frameRef.current = requestAnimationFrame(draw)
    }

    const mousemove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
    }

    resize()
    draw()

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", mousemove)

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", mousemove)
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [backgroundColor, lineColor, maxCursorMove, tension, friction, waveSpeedX, waveSpeedY, waveAmpX, waveAmpY, xGap, yGap])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
