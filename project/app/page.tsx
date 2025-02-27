"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Cat, Code2, Laptop, MessageSquare, Users } from "lucide-react"
import { useTheme } from "next-themes"
import { Waves } from "@/components/ui/waves-background"

export default function Home() {
  const { theme } = useTheme()

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex items-center">
            <Cat className="h-6 w-6 text-primary" />
            <span className="ml-2 text-lg font-bold">ChaTec</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="ghost">ホーム</Button>
            <Button variant="ghost">サービス</Button>
            <Button variant="ghost">お問い合わせ</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background/80">
        {/* Interactive Waves Background */}
        <div className="absolute inset-0">
          <Waves
            lineColor={theme === "dark" ? "rgba(255, 255, 255, 0.4)" : "rgba(236, 72, 153, 0.3)"}
            backgroundColor="transparent"
            waveSpeedX={0.001}
            waveSpeedY={0.0008}
            waveAmpX={25}
            waveAmpY={18}
            friction={0.99}
            tension={0.002}
            maxCursorMove={100}
            xGap={25}
            yGap={50}
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 inline-block rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 px-4 py-1.5"
            >
              <span className="text-sm font-medium bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                革新的なソフトウェア開発
              </span>
            </motion.div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-foreground">テクノロジーで</span><br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                ビジネスを進化させる
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white">
              最先端の技術と豊富な経験を活かし、<br />
              お客様のビジネスに最適なソリューションを提供します。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90">
                無料相談を予約する
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-pink-200 hover:bg-pink-50">
                サービス詳細
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Animated Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-3xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1.2, 1, 1.2],
            rotate: [0, -45, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-56 h-56 rounded-full bg-gradient-to-r from-blue-500/10 to-pink-500/10 blur-3xl"
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Grid Background */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `linear-gradient(65deg, var(--grid-color) 1px, transparent 1px),
                            linear-gradient(25deg, var(--grid-color) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            '--grid-color': 'rgba(219, 39, 119, 0.05)'
          } as any}
        />

        {/* Gradient Orbs */}
        <div className="absolute left-1/4 top-1/4 -z-10 h-96 w-96 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-medium mb-4">サービス</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              ビジネスの課題を解決する<br />
              包括的なソリューション
            </h2>
            <p className="mt-4 text-gray-800">
              お客様のニーズに合わせた最適なソリューションを提供します
            </p>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<Laptop className="h-12 w-12 text-pink-500" />}
              title="Webアプリケーション開発"
              description="モダンな技術スタックを使用し、スケーラブルなWebアプリケーションを開発します。"
            />
            <ServiceCard
              icon={<Code2 className="h-12 w-12 text-purple-500" />}
              title="システム開発"
              description="業務効率を向上させる、カスタマイズされたシステムを開発します。"
            />
            <ServiceCard
              icon={<MessageSquare className="h-12 w-12 text-blue-500" />}
              title="ITコンサルティング"
              description="経験豊富なコンサルタントが、最適なIT戦略を提案します。"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">会社概要</h2>
              <p className="mt-4 text-white">
                2020年の設立以来、私たちは革新的なソリューションを提供し続けています。
                お客様のビジネスの成功を第一に考え、最高品質のサービスを提供することを使命としています。
              </p>
              <div className="mt-8">
                <h3 className="font-semibold mb-4">企業理念</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-pink-500" />
                    <span>お客様との長期的なパートナーシップ</span>
                  </li>
                  <li className="flex items-center">
                    <Cat className="h-5 w-5 mr-2 text-purple-500" />
                    <span>技術革新への継続的な投資</span>
                  </li>
                  <li className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-blue-500" />
                    <span>オープンなコミュニケーション</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 blur-2xl rounded-2xl -z-10" />
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                alt="オフィスの様子"
                className="rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">お問い合わせ</h2>
            <p className="mt-4 text-gray-800">
              ご質問やご相談がございましたら、お気軽にお問い合わせください。<br />
              専門スタッフが丁寧にご対応させていただきます。
            </p>
            <div className="mt-8">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90">
                お問い合わせフォームへ
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Cat className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">ChaTec</span>
              </div>
              <p className="text-foreground">
                革新的なソリューションで、あなたのデジタルな未来をサポートします。
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">メニュー</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-foreground hover:text-foreground/80 transition-colors">ホーム</a>
                </li>
                <li>
                  <a href="#" className="text-foreground hover:text-foreground/80 transition-colors">会社概要</a>
                </li>
                <li>
                  <a href="#" className="text-foreground hover:text-foreground/80 transition-colors">サービス</a>
                </li>
                <li>
                  <a href="#" className="text-foreground hover:text-foreground/80 transition-colors">お問い合わせ</a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">サービス一覧</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-foreground hover:text-foreground/80 transition-colors">Webアプリケーション開発</a>
                </li>
                <li>
                  <a href="#" className="text-foreground hover:text-foreground/80 transition-colors">モバイルアプリ開発</a>
                </li>
                <li>
                  <a href="#" className="text-foreground hover:text-foreground/80 transition-colors">クラウドソリューション</a>
                </li>
                <li>
                  <a href="#" className="text-foreground hover:text-foreground/80 transition-colors">ITコンサルティング</a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">お問い合わせ</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:info@chatec.jp" className="flex items-center space-x-2 text-foreground hover:text-foreground/80 transition-colors">
                    <MessageSquare className="h-4 w-4" />
                    <span>info@chatec.jp</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2 text-foreground hover:text-foreground/80 transition-colors">
                    <Users className="h-4 w-4" />
                    <span>サポートチーム</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-foreground">
                &copy; 2025 ChaTec. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-sm text-foreground hover:text-foreground/80 transition-colors">
                  プライバシーポリシー
                </a>
                <a href="#" className="text-sm text-foreground hover:text-foreground/80 transition-colors">
                  利用規約
                </a>
                <a href="#" className="text-sm text-foreground hover:text-foreground/80 transition-colors">
                  特定商取引法に基づく表記
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="border-none shadow-lg bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors">
        <CardHeader>
          <div className="mb-4 flex items-center justify-center">{icon}</div>
          <CardTitle className="text-xl text-center text-gray-800">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-center text-base text-gray-600">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}