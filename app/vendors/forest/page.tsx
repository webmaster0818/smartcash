export default function Forest() {
  return (
    <div className="space-y-8">
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 md:p-8 rounded-lg">
        <div className="flex items-center gap-3 md:gap-4 mb-4">
          <div className="text-4xl md:text-6xl">🌲</div>
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 leading-tight">フォレスト</h1>
            <p className="text-sm md:text-base text-gray-700">安定した運営実績を持つ先払い買取業者</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-center">
          <div className="bg-white p-3 md:p-4 rounded"><div className="text-xs md:text-sm text-gray-600 mb-1">換金率</div><div className="text-base md:text-lg lg:text-xl font-bold text-green-600">最大60%</div></div>
          <div className="bg-white p-3 md:p-4 rounded"><div className="text-xs md:text-sm text-gray-600 mb-1">振込時間</div><div className="text-base md:text-lg lg:text-xl font-bold text-red-600">最短10分</div></div>
          <div className="bg-white p-3 md:p-4 rounded"><div className="text-xs md:text-sm text-gray-600 mb-1">営業時間</div><div className="text-base md:text-lg lg:text-xl font-bold">9:00-19:00</div></div>
          <div className="bg-white p-3 md:p-4 rounded"><div className="text-xs md:text-sm text-gray-600 mb-1">対応金額</div><div className="text-base md:text-lg lg:text-xl font-bold">1万〜10万円</div></div>
        </div>
      </section>
      <section className="bg-white p-4 md:p-6 rounded-lg shadow">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">フォレストの特徴</h2>
        <ul className="space-y-3 text-sm md:text-base">
          <li className="flex items-start gap-2"><span className="text-primary-600 font-bold">✓</span><span>丁寧なカスタマーサポート</span></li>
          <li className="flex items-start gap-2"><span className="text-primary-600 font-bold">✓</span><span>分かりやすい手続きの説明</span></li>
          <li className="flex items-start gap-2"><span className="text-primary-600 font-bold">✓</span><span>最短10分のスピード振込</span></li>
          <li className="flex items-start gap-2"><span className="text-primary-600 font-bold">✓</span><span>信頼性と利便性を兼備</span></li>
        </ul>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <a href="/ranking/overall" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]"><h3 className="text-sm md:text-base font-bold mb-2">総合ランキング →</h3><p className="text-gray-600 text-xs md:text-sm">おすすめの先払い買取業者TOP20</p></a>
        <a href="/guide/about" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]"><h3 className="text-sm md:text-base font-bold mb-2">先払い買取とは →</h3><p className="text-gray-600 text-xs md:text-sm">仕組み・流れをわかりやすく解説</p></a>
      </section>
    </div>
  )
}
