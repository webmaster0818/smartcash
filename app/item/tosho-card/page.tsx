export default function ToshoCard() {
  const vendors = [
    { rank: 1, name: 'シープチケット', rate: '最大82%', speed: '最短5分', link: '/vendors/sheep-ticket' },
    { rank: 2, name: 'リセチケット', rate: '最大80%', speed: '最短10分', link: '/vendors/reseticke' },
    { rank: 3, name: 'チケットセンター', rate: '最大78%', speed: '最短15分', link: '/vendors/ticket-center' },
  ]

  return (
    <div className="space-y-8">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-lg">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-6xl">📚</div>
          <div>
            <h1 className="text-3xl font-bold mb-2">図書カード買取【2026年最新版】</h1>
            <p className="text-gray-700">換金率・買取相場・おすすめ業者を徹底解説</p>
          </div>
        </div>
      </section>

      {/* 買取相場 */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">図書カードの買取相場</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">買取方法</th>
                <th className="px-4 py-3 text-center">換金率</th>
                <th className="px-4 py-3 text-center">振込時間</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-3 font-bold">先払い買取</td>
                <td className="px-4 py-3 text-center text-green-600 font-bold">75〜82%</td>
                <td className="px-4 py-3 text-center text-red-600 font-bold">最短5分</td>
              </tr>
              <tr>
                <td className="px-4 py-3">郵送買取</td>
                <td className="px-4 py-3 text-center">80〜88%</td>
                <td className="px-4 py-3 text-center">1〜3日</td>
              </tr>
              <tr>
                <td className="px-4 py-3">店舗買取</td>
                <td className="px-4 py-3 text-center">78〜85%</td>
                <td className="px-4 py-3 text-center">即日</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          ※ 図書カードは書店専用のため、換金率はやや控えめですが、安定した需要があります。
        </p>
      </section>

      {/* おすすめ業者 */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">図書カード買取おすすめ業者TOP3</h2>
        <div className="space-y-4">
          {vendors.map((vendor) => (
            <div key={vendor.rank} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-primary-600">
                  {vendor.rank === 1 && '🥇'}
                  {vendor.rank === 2 && '🥈'}
                  {vendor.rank === 3 && '🥉'}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{vendor.name}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-gray-600">換金率</span>
                      <div className="font-bold text-green-600">{vendor.rate}</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">振込時間</span>
                      <div className="font-bold text-red-600">{vendor.speed}</div>
                    </div>
                  </div>
                </div>
                <a href={vendor.link} className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition">
                  詳細 →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 図書カードとは */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">図書カードとは</h2>
        <p className="text-gray-700 mb-4">
          図書カードは、全国の書店で書籍・雑誌の購入に使える商品券です。プレゼントや景品として広く利用されており、安定した買取需要があります。
        </p>
        <div className="bg-blue-50 p-4 rounded">
          <h3 className="font-bold mb-2">特徴</h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• 全国の書店で利用可能</li>
            <li>• 有効期限なし（一部券種を除く）</li>
            <li>• 券種: 500円券、1,000円券、3,000円券、5,000円券</li>
            <li>• 書籍・雑誌の購入専用</li>
          </ul>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">よくある質問</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-primary-400 pl-4">
            <h3 className="font-bold mb-2">Q. 図書カードは本当に82%で買い取ってもらえますか？</h3>
            <p className="text-sm text-gray-700">
              A. はい。シープチケットなら最大82%で買取可能です。ただし、券種や金額によって換金率は変動します。
            </p>
          </div>
          <div className="border-l-4 border-primary-400 pl-4">
            <h3 className="font-bold mb-2">Q. 使用済みの図書カードでも買い取ってもらえますか？</h3>
            <p className="text-sm text-gray-700">
              A. いいえ。未使用の図書カードのみが買取対象です。
            </p>
          </div>
          <div className="border-l-4 border-primary-400 pl-4">
            <h3 className="font-bold mb-2">Q. 図書カードNEXT（デジタル版）も買取可能ですか？</h3>
            <p className="text-sm text-gray-700">
              A. 業者によって対応が異なります。事前に確認してください。
            </p>
          </div>
        </div>
      </section>

      {/* 内部リンク */}
      <section className="grid md:grid-cols-2 gap-4">
        <a href="/ranking/rate" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">高換金率ランキング →</h3>
          <p className="text-gray-600 text-sm">換金率が高い業者を比較</p>
        </a>
        <a href="/item/quo-card" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">QUOカード買取 →</h3>
          <p className="text-gray-600 text-sm">QUOカードの買取相場と業者</p>
        </a>
        <a href="/guide/about" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">先払い買取とは →</h3>
          <p className="text-gray-600 text-sm">仕組み・流れをわかりやすく解説</p>
        </a>
        <a href="/ranking/overall" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">総合ランキング →</h3>
          <p className="text-gray-600 text-sm">おすすめの先払い買取業者TOP10</p>
        </a>
      </section>
    </div>
  )
}
