import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'スマートキャッシュ | 先払い買取比較サイト',
  description: '商品券・ギフトカードの先払い買取業者を徹底比較。換金率・振込時間・安全性などあらゆる角度から業者を比較し、おすすめランキングを掲載。',
  keywords: '先払い買取,商品券買取,ギフトカード買取,換金率,比較,ランキング',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <header className="bg-primary-600 text-white p-4 md:p-6">
          <div className="container mx-auto">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">スマートキャッシュ</h1>
            <p className="text-xs md:text-sm">先払い買取比較サイト</p>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-100 mt-12 p-8">
          <div className="container mx-auto text-center text-gray-600">
            <p>&copy; 2026 スマートキャッシュ All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
