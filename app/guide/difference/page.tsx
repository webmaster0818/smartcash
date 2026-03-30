export default function DifferencePage() {
  return (
    <div className="space-y-8 md:space-y-12">
      <nav className="text-sm text-gray-600" aria-label="パンくずリスト">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><a href="/" className="hover:text-primary-600 transition">🏠 ホーム</a></li>
          <li>›</li>
          <li><a href="/guide/about" className="hover:text-primary-600 transition">基礎知識</a></li>
          <li>›</li>
          <li className="text-primary-600 font-semibold">ファクタリングとの違い</li>
        </ol>
      </nav>

      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 text-white drop-shadow-lg leading-tight">
            🔄 先払い買取とファクタリングの違い
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-white/95 font-semibold">
            どちらを選ぶべき？徹底比較
          </p>
        </div>
      </section>

      <section className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-primary-600">比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary-600 text-white">
                <th className="border border-gray-300 px-4 py-3 text-left">項目</th>
                <th className="border border-gray-300 px-4 py-3 text-left">先払い買取</th>
                <th className="border border-gray-300 px-4 py-3 text-left">ファクタリング</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-bold">対象物</td>
                <td className="border border-gray-300 px-4 py-3">商品券・ギフトカード</td>
                <td className="border border-gray-300 px-4 py-3">売掛金（請求書）</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-bold">法的位置づけ</td>
                <td className="border border-gray-300 px-4 py-3">古物営業法（買取業）</td>
                <td className="border border-gray-300 px-4 py-3">債権譲渡（金融取引）</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-bold">対象者</td>
                <td className="border border-gray-300 px-4 py-3">個人・法人</td>
                <td className="border border-gray-300 px-4 py-3">主に法人（個人事業主も可）</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-bold">換金率</td>
                <td className="border border-gray-300 px-4 py-3">60〜65%</td>
                <td className="border border-gray-300 px-4 py-3">80〜98%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-bold">入金スピード</td>
                <td className="border border-gray-300 px-4 py-3">最短5分〜10分</td>
                <td className="border border-gray-300 px-4 py-3">最短即日〜3日</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-bold">審査</td>
                <td className="border border-gray-300 px-4 py-3">なし</td>
                <td className="border border-gray-300 px-4 py-3">あり（売掛先の信用審査）</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 md:p-8 rounded-2xl shadow-lg border-2 border-blue-300">
          <h3 className="text-xl font-bold mb-4 text-blue-700">先払い買取が向いている人</h3>
          <ul className="space-y-2">
            <li>✓ 個人で急な資金が必要</li>
            <li>✓ 商品券を持っている</li>
            <li>✓ 少額（数万円）でOK</li>
            <li>✓ 審査なしで利用したい</li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 md:p-8 rounded-2xl shadow-lg border-2 border-green-300">
          <h3 className="text-xl font-bold mb-4 text-green-700">ファクタリングが向いている人</h3>
          <ul className="space-y-2">
            <li>✓ 法人・個人事業主</li>
            <li>✓ 売掛金を持っている</li>
            <li>✓ 高額（数十万円〜数百万円）の資金調達</li>
            <li>✓ 換金率を重視したい</li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center">📚 関連記事</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/pillar/sakibarai-kaitori-guide" className="block p-6 bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition border border-primary-200">
            <h3 className="font-bold text-lg mb-2">📖 先払い買取完全ガイド</h3>
            <p className="text-sm text-gray-600">仕組み・安全な使い方を徹底解説</p>
          </a>
          <a href="/guide/about" className="block p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition border border-blue-200">
            <h3 className="font-bold text-lg mb-2">📘 先払い買取とは？</h3>
            <p className="text-sm text-gray-600">仕組みをわかりやすく解説</p>
          </a>
          <a href="/guide/merit" className="block p-6 bg-gradient-to-br from-yellow-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition border border-yellow-200">
            <h3 className="font-bold text-lg mb-2">⚖️ メリット・デメリット</h3>
            <p className="text-sm text-gray-600">他の資金調達方法との比較</p>
          </a>
        </div>
      </section>
    </div>
  )
}
