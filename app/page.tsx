export default function Home() {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* Hero Section */}
      <section className="text-center py-8 md:py-12 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">スマートキャッシュへようこそ</h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8">
          商品券・ギフトカードの先払い買取業者を徹底比較
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <a href="/ranking/overall" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition text-sm md:text-base min-h-[48px] flex items-center justify-center">
            おすすめランキング
          </a>
          <a href="/guide/about" className="inline-block bg-white text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition text-sm md:text-base min-h-[48px] flex items-center justify-center">
            先払い買取とは
          </a>
        </div>
      </section>

      {/* Features */}
      <section>
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6">スマートキャッシュの特徴</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h4 className="text-base md:text-lg lg:text-xl font-bold mb-2 text-primary-600">徹底比較</h4>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              換金率・振込時間・安全性など、あらゆる角度から業者を比較しています。
            </p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h4 className="text-base md:text-lg lg:text-xl font-bold mb-2 text-primary-600">安全性重視</h4>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              古物商許可番号の確認、悪徳業者の見分け方など、安全に利用するための情報を提供。
            </p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h4 className="text-base md:text-lg lg:text-xl font-bold mb-2 text-primary-600">最新情報</h4>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              2026年最新版として、常に最新の情報を更新しています。
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6">人気のページ</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <a href="/ranking/overall" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
            <h4 className="font-bold text-base md:text-lg mb-2">総合ランキング</h4>
            <p className="text-gray-600 text-xs md:text-sm">おすすめの先払い買取業者をランキング形式でご紹介</p>
          </a>
          <a href="/ranking/speed" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
            <h4 className="font-bold text-base md:text-lg mb-2">最短振込ランキング</h4>
            <p className="text-gray-600 text-xs md:text-sm">最短5分で振込完了する業者をご紹介</p>
          </a>
          <a href="/safety/check" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
            <h4 className="font-bold text-base md:text-lg mb-2">悪徳業者の見分け方</h4>
            <p className="text-gray-600 text-xs md:text-sm">安全に利用するための10項目チェックリスト</p>
          </a>
          <a href="/guide/about" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
            <h4 className="font-bold text-base md:text-lg mb-2">先払い買取とは</h4>
            <p className="text-gray-600 text-xs md:text-sm">仕組み・流れ・メリットをわかりやすく解説</p>
          </a>
        </div>
      </section>
    </div>
  )
}
