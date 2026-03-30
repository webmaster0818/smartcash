export default function FlowPage() {
  return (
    <div className="space-y-8 md:space-y-12">
      <nav className="text-sm text-gray-600" aria-label="パンくずリスト">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><a href="/" className="hover:text-primary-600 transition">🏠 ホーム</a></li>
          <li>›</li>
          <li><a href="/guide/about" className="hover:text-primary-600 transition">基礎知識</a></li>
          <li>›</li>
          <li className="text-primary-600 font-semibold">利用手順・流れ</li>
        </ol>
      </nav>

      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 text-white drop-shadow-lg leading-tight">
            📝 先払い買取の利用手順・流れ
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-white/95 font-semibold">
            申込から入金までのステップを解説
          </p>
        </div>
      </section>

      <section className="space-y-8">
        {[
          {
            step: 1,
            title: '業者選び',
            content: '古物商許可番号が明記されている業者を選びます。換金率・入金スピード・口コミを確認しましょう。',
            tips: ['古物商許可番号を確認', '口コミ・評判をチェック', '換金率60〜65%が相場']
          },
          {
            step: 2,
            title: '申込',
            content: '公式サイトまたはLINEから申込。本人確認書類（免許証・保険証等）と銀行口座情報を提出します。',
            tips: ['本人確認書類を準備', '銀行口座情報を用意', 'スマホで撮影して送信']
          },
          {
            step: 3,
            title: '査定',
            content: '売却する商品券の種類・金額を伝え、業者が査定。換金率が提示されます。',
            tips: ['商品券の種類を正確に伝える', '査定額に納得できるか確認', '追加手数料の有無を確認']
          },
          {
            step: 4,
            title: '契約',
            content: '契約書に同意します。すべての条件（換金率、手数料、発送期日等）を確認してから同意しましょう。',
            tips: ['契約書をよく読む', 'キャンセル料の有無を確認', '発送期日を確認']
          },
          {
            step: 5,
            title: '入金',
            content: '業者が銀行口座に入金します。最短5分〜10分で振込完了。',
            tips: ['銀行口座を確認', '入金時刻を記録', '入金が遅い場合は業者に連絡']
          },
          {
            step: 6,
            title: '商品発送',
            content: '約束した期日（通常7日以内）までに商品券を郵送。追跡可能な方法（レターパック等）で送りましょう。',
            tips: ['期日を守る', '追跡番号を保存', '発送完了を業者に報告']
          },
        ].map((item) => (
          <div key={item.step} className="bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl font-black text-green-600">Step {item.step}</span>
              <h3 className="text-2xl md:text-3xl font-black text-primary-600">{item.title}</h3>
            </div>
            <p className="text-base md:text-lg leading-relaxed mb-4">{item.content}</p>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-green-700">💡 ポイント</h4>
              <ul className="space-y-1 text-sm">
                {item.tips.map((tip, i) => (
                  <li key={i}>• {tip}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-red-50 p-6 md:p-8 rounded-2xl shadow-lg border-2 border-red-300">
        <h2 className="text-2xl font-bold mb-4 text-red-700">⚠️ 注意点</h2>
        <ul className="space-y-2 text-gray-700">
          <li>• 商品を期日までに送らないとトラブルになります</li>
          <li>• 契約前にすべての条件を確認しましょう</li>
          <li>• 不明点があれば必ず業者に質問してください</li>
        </ul>
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
          <a href="/ranking/overall" className="block p-6 bg-gradient-to-br from-yellow-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition border border-yellow-200">
            <h3 className="font-bold text-lg mb-2">🏆 おすすめ業者ランキング</h3>
            <p className="text-sm text-gray-600">総合TOP12を比較</p>
          </a>
        </div>
      </section>
    </div>
  )
}
