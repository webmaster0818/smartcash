export default function BankAccountPage() {
  return (
    <div className="space-y-8 md:space-y-12">
      <nav className="text-sm text-gray-600" aria-label="パンくずリスト">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><a href="/" className="hover:text-primary-600 transition">🏠 ホーム</a></li>
          <li>›</li>
          <li><a href="/guide/about" className="hover:text-primary-600 transition">基礎知識</a></li>
          <li>›</li>
          <li className="text-primary-600 font-semibold">口座凍結リスクと対策</li>
        </ol>
      </nav>

      <section className="relative bg-gradient-to-br from-pink-600 via-pink-700 to-pink-800 p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 text-white drop-shadow-lg leading-tight">
            🏦 先払い買取で口座凍結される？
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-white/95 font-semibold">
            銀行口座リスクと対策方法
          </p>
        </div>
      </section>

      <section className="bg-red-50 p-6 md:p-8 rounded-2xl shadow-lg border-2 border-red-300">
        <h2 className="text-2xl md:text-3xl font-black mb-4 text-red-700">⚠️ 口座凍結のリスク</h2>
        <p className="text-base leading-relaxed mb-4">
          先払い買取を頻繁に利用すると、<strong>銀行口座が「疑わしい取引」と判断され、凍結される可能性</strong>があります。
        </p>
        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-bold mb-2">なぜ口座凍結されるのか？</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• 短期間に複数の業者から頻繁に入金がある</li>
            <li>• ヤミ金融やマネーロンダリングの疑いをかけられる</li>
            <li>• 銀行が「振り込め詐欺」の被害口座と判断する</li>
          </ul>
        </div>
      </section>

      <section className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-black mb-4 text-primary-600">凍結を防ぐ方法</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <span className="text-green-600 text-xl">✓</span>
            <div>
              <strong>信頼できる業者のみを利用する</strong>
              <p className="text-sm text-gray-600">古物商許可を取得している業者を選びましょう。</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 text-xl">✓</span>
            <div>
              <strong>頻繁な利用を避ける</strong>
              <p className="text-sm text-gray-600">月に1〜2回程度に抑えることが推奨されます。</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 text-xl">✓</span>
            <div>
              <strong>複数の業者から同時に入金を受けない</strong>
              <p className="text-sm text-gray-600">複数業者の利用は銀行の警戒対象になります。</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 text-xl">✓</span>
            <div>
              <strong>専用口座を作る</strong>
              <p className="text-sm text-gray-600">給与や生活費とは別の口座を使用しましょう。</p>
            </div>
          </li>
        </ul>
      </section>

      <section className="bg-yellow-50 p-6 md:p-8 rounded-2xl shadow-lg border-2 border-yellow-300">
        <h2 className="text-2xl md:text-3xl font-black mb-4 text-yellow-700">凍結された場合の対処法</h2>
        <ol className="space-y-3">
          <li className="flex items-start gap-2">
            <span className="text-2xl font-bold text-yellow-600">1</span>
            <div>
              <strong>銀行に連絡する</strong>
              <p className="text-sm text-gray-600">凍結理由を確認し、必要な書類を提出します。</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-2xl font-bold text-yellow-600">2</span>
            <div>
              <strong>取引内容を説明する</strong>
              <p className="text-sm text-gray-600">先払い買取の契約書や領収書を提示します。</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-2xl font-bold text-yellow-600">3</span>
            <div>
              <strong>弁護士に相談する</strong>
              <p className="text-sm text-gray-600">解除されない場合は法的手段を検討します。</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center">📚 関連記事</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/pillar/sakibarai-kaitori-guide" className="block p-6 bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition border border-primary-200">
            <h3 className="font-bold text-lg mb-2">📖 先払い買取完全ガイド</h3>
            <p className="text-sm text-gray-600">仕組み・安全な使い方を徹底解説</p>
          </a>
          <a href="/safety/trouble" className="block p-6 bg-gradient-to-br from-red-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition border border-red-200">
            <h3 className="font-bold text-lg mb-2">⚠️ トラブル事例と対処法</h3>
            <p className="text-sm text-gray-600">被害を防ぐための注意点</p>
          </a>
          <a href="/ranking/safety" className="block p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition border border-purple-200">
            <h3 className="font-bold text-lg mb-2">🔒 安全性重視ランキング</h3>
            <p className="text-sm text-gray-600">古物商許可取得業者TOP10</p>
          </a>
        </div>
      </section>
    </div>
  )
}
