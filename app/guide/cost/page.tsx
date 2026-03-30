export default function CostPage() {
  return (
    <div className="space-y-8 md:space-y-12">
      <nav className="text-sm text-gray-600" aria-label="パンくずリスト">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><a href="/" className="hover:text-primary-600 transition">🏠 ホーム</a></li>
          <li>›</li>
          <li><a href="/guide/about" className="hover:text-primary-600 transition">基礎知識</a></li>
          <li>›</li>
          <li className="text-primary-600 font-semibold">手数料・換金率の相場</li>
        </ol>
      </nav>

      <section className="relative bg-gradient-to-br from-yellow-600 via-yellow-700 to-yellow-800 p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 text-white drop-shadow-lg leading-tight">
            💰 先払い買取の手数料・換金率の相場
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-white/95 font-semibold">
            費用を抑えるポイント
          </p>
        </div>
      </section>

      <section className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-black mb-4 text-yellow-600">換金率の相場</h2>
        <div className="bg-yellow-50 p-6 rounded-lg mb-4">
          <p className="text-xl font-bold text-center mb-4">60%〜65%が相場</p>
          <p className="text-gray-700 text-center">
            例: 10,000円の商品券 → 6,000円〜6,500円の入金
          </p>
        </div>
        <p className="text-gray-700 leading-relaxed">
          先払い買取の換金率は通常<strong>60%〜65%</strong>です。これは、業者が手数料として35%〜40%を差し引くことを意味します。
        </p>
      </section>

      <section className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-black mb-4 text-primary-600">手数料の種類</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <span className="text-primary-600">•</span>
            <div>
              <strong>買取手数料（35%〜40%）:</strong> 換金率に含まれる主な手数料
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">•</span>
            <div>
              <strong>振込手数料（無料〜500円）:</strong> 銀行振込の手数料（業者負担が多い）
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">•</span>
            <div>
              <strong>査定料（無料）:</strong> 通常は無料
            </div>
          </li>
        </ul>
      </section>

      <section className="bg-green-50 p-6 md:p-8 rounded-2xl shadow-lg border-2 border-green-300">
        <h2 className="text-2xl md:text-3xl font-black mb-4 text-green-700">換金率を上げるコツ</h2>
        <ul className="space-y-2">
          <li>✓ 複数業者の換金率を比較する</li>
          <li>✓ 大手業者を選ぶ（実績が豊富）</li>
          <li>✓ 商品券の状態を良好に保つ</li>
          <li>✓ キャンペーン時期を狙う</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center">📚 関連記事</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/pillar/sakibarai-kaitori-guide" className="block p-6 bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition border border-primary-200">
            <h3 className="font-bold text-lg mb-2">📖 先払い買取完全ガイド</h3>
            <p className="text-sm text-gray-600">仕組み・安全な使い方を徹底解説</p>
          </a>
          <a href="/ranking/rate" className="block p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition border border-green-200">
            <h3 className="font-bold text-lg mb-2">💰 高換金率ランキング</h3>
            <p className="text-sm text-gray-600">換金率60%〜65%の業者TOP10</p>
          </a>
          <a href="/guide/comparison" className="block p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition border border-blue-200">
            <h3 className="font-bold text-lg mb-2">🔍 業者の選び方</h3>
            <p className="text-sm text-gray-600">失敗しない4つのポイント</p>
          </a>
        </div>
      </section>
    </div>
  )
}
