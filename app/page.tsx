"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, Instagram, Facebook, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative bg-gray-200/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-lg font-medium text-gray-600">Ryoma Nakajima</div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="#work" className="text-gray-600 hover:text-gray-900 transition-colors">
                Work
              </a>
              <a href="#project" className="text-gray-600 hover:text-gray-900 transition-colors">
                Project
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-300">
              <div className="flex flex-col space-y-2 pt-4">
                <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors py-2">
                  About
                </a>
                <a href="#work" className="text-gray-600 hover:text-gray-900 transition-colors py-2">
                  Work
                </a>
                <a href="#project" className="text-gray-600 hover:text-gray-900 transition-colors py-2">
                  Project
                </a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors py-2">
                  Contact
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="py-16 bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="/images/profile-new.png"
                    alt="中島竜馬のプロフィール写真"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">森のイノベーションラボFUJINO</p>
                  <p className="text-sm text-gray-600 mb-2">デジタル・ビジネス支援員</p>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">中島 竜馬</h1>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                  1998年5月22日
                  大阪生まれ、関東育ち。サレジオ工業高等専門学校機械電子工学科卒。株式会社ワコムにてシステムエンジニアとして補正業務を担当。2023年から地域おこし協力隊として相模原市に移住し、自分のスキルを活かしながら地域おこしの仕事に勤めている。
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a href="https://www.instagram.com/ryoma_nakajima" className="text-pink-500 hover:text-pink-600 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://www.facebook.com/nakajima.ryoma" className="text-blue-500 hover:text-blue-600 transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Activities */}
      <section id="work" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">現在の活動</h2>

          {/* Digital Business Support */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-blue-100 rounded-3xl p-8 md:p-12">
              <h3 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-8">デジタル・ビジネス支援</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/images/digital-support-1.png"
                    alt="デジタルビジネス支援の様子"
                    width={300}
                    height={200}
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    デジタル庁からデジタル推進委員に任命されており、地域おこし協力隊として「森のイノベーションラボFUJINO」を拠点にデジタルとビジネスの支援をしています。
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
                <div className="md:order-2">
                  <Image
                    src="/images/digital-support-2.jpeg"
                    alt="ウェブサイト制作の様子"
                    width={300}
                    height={200}
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                <div className="md:order-1">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    ウェブサイト制作やアプリ開発なども行っています。最近は、中山間地域の鳥獣被害対策のために音で威嚇する動物除けオブジェを制作したり、地域の事業者様向けのウェブサイトを制作中です。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Takoyaki Mobile Sales */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-orange-100 rounded-3xl p-8 md:p-12">
              <h3 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-8">たこ焼きの移動販売</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/images/takoyaki-sales.jpeg"
                    alt="たこ焼き移動販売の様子"
                    width={300}
                    height={200}
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    銀だこ歴５年、親のたこ焼き屋さんのレシピを受け継ぎ、イベントでたこ焼き屋やってます。藤野産の柚子の皮が入った美味しいタコ焼きをお出しします。
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
                <div className="md:order-2">
                  <Image
                    src="/images/takoyaki-truck.jpeg"
                    alt="キッチンカーの様子"
                    width={300}
                    height={200}
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                <div className="md:order-1">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    キッチンカーをDIYで作って保健所に通してみたり、売上の検証も行ってビジネス面での支援もしています。キッチンカービジネスに興味のある方はお気軽に声をかけてください。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Share House */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-100 rounded-3xl p-8 md:p-12">
              <h3 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-8">
                住み開きの家 よぴよぴハウス
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/images/sharehouse-dining.jpeg"
                    alt="よぴよぴハウスの様子"
                    width={300}
                    height={200}
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    JR藤野駅から徒歩15分の地方移住支援を目的としたシェアハウスを2024年から始めました。現在は３人の若者が藤野に移住してきました。
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
                <div className="md:order-2">
                  <Image
                    src="/images/sharehouse-diy.jpeg"
                    alt="DIYイベントの様子"
                    width={300}
                    height={200}
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                <div className="md:order-1">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    誰でも参加できてDIYなどを学べるイベントを月一で実施しています。モノ作りや農的生活を通して、「自立共生」という生き方の社会実験を行っています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Timeline */}
      <section id="project" className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">プロジェクト</h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-400"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* 2021 Project */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-purple-100 rounded-lg p-6 shadow-md">
                      <h3 className="font-bold text-gray-900 mb-2">2021年夏</h3>
                      <p className="text-sm text-gray-700 mb-2">「点滴ヘルパー」</p>
                      <p className="text-sm text-gray-700 mb-2">アプリ リリース</p>
                      <p className="text-xs text-gray-600">
                        父のコロナ感染時に重症化した時に看護師が点滴の滴下計算に困っていた話を受けて医療逼迫の解消を目的に開発。
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                {/* 2025 Project */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-purple-100 rounded-lg p-6 shadow-md">
                      <h3 className="font-bold text-gray-900 mb-2">2025年現在</h3>
                      <p className="text-sm text-gray-700 mb-2">「動物除けオブジェ」</p>
                      <p className="text-sm text-gray-700 mb-2">開発中</p>
                      <p className="text-xs text-gray-600">
                        中山間地域に特化した動物除けオブジェを開発中。人感センサーに反応すると音や光で威嚇する機能を搭載
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-400 to-purple-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">お問い合わせ</h2>
          <div className="max-w-md mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <Mail className="w-16 h-16 text-white mx-auto mb-4" />
              <a
                href="mailto:ryoma@morilab-fujino.jp"
                className="text-white text-lg hover:text-gray-200 transition-colors"
              >
                ryoma@morilab-fujino.jp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://www.instagram.com/ryoma_nakajima" className="text-pink-500 hover:text-pink-400 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/nakajima.ryoma" className="text-blue-500 hover:text-blue-400 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">© 2025 Ryoma N. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
