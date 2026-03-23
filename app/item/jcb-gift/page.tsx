export default function JCBGift() {
  const vendors = [
    { rank: 1, name: 'シープチケット', rate: '最大95%', speed: '最短5分', link: '/vendors/sheep-ticket' },
    { rank: 2, name: 'タートルチケット', rate: '最大90%', speed: '最短10分', link: '/vendors/turtle-ticket' },
    { rank: 3, name: 'チケットセンター', rate: '最大85%', speed: '最短15分', link: '/vendors/ticket-center' },
  ]

  return (
    <div className="space-y-8">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-lg">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-6xl">💳</div>
          <div>
            <h1 className="text-3xl font-bold mb-2">JCBギフトカード買取【2026年最新版】</h1>
            <p className="text-gray-700">換金率・買取相場・おすすめ業者を徹底解説</p>
          </div>
        </div>
      </section>

      {/* 買取相場 */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">JCBギフトカードの買取相場</h2>
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
                <td className="px-4 py-3 text-center text-green-600 font-bold">85〜95%</td>
                <td className="px-4 py-3 text-center text-red-600 font-bold">最短5分</td>
              </tr>
              <tr>
                <td className="px-4 py-3">郵送買取</td>
                <td className="px-4 py-3 text-center">90〜98%</td>
                <td className="px-4 py-3 text-center">1〜3日</td>
              </tr>
              <tr>
                <td className="px-4 py-3">店舗買取</td>
                <td className="px-4 py-3 text-center">90〜95%</td>
                <td className="px-4 py-3 text-center">即日</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          ※ JCBギフトカードは需要が高いため、他の商品券と比べて換金率が高めです。
        </p>
      </section>

      {/* おすすめ業者 */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">JCBギフトカード買取おすすめ業者TOP3</h2>
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

      {/* JCBギフトカードとは */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">JCBギフトカードとは</h2>
        <p className="text-gray-700 mb-4">
          JCBギフトカードは、全国のJCB加盟店で使える商品券です。デパート、スーパー、コンビニ、レストランなど幅広い店舗で利用できるため、需要が高く換金率も高めです。
        </p>
        <div className="bg-blue-50 p-4 rounded">
          <h3 className="font-bold mb-2">特徴</h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• 全国のJCB加盟店で利用可能</li>
            <li>• 有効期限なし</li>
            <li>• 券種: 1,000円券、5,000円券</li>
            <li>• 買取需要が高い</li>
          </ul>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">よくある質問</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-primary-400 pl-4">
            <h3 className="font-bold mb-2">Q. JCBギフトカードは本当に95%で買い取ってもらえますか？</h3>
            <p className="text-sm text-gray-700">
              A. はい。シープチケットなら最大95%で買取可能です。ただし、券種や金額によって換金率は変動します。
            </p>
          </div>
          <div className="border-l-4 border-primary-400 pl-4">
            <h3 className="font-bold mb-2">Q. 使用済みのJCBギフトカードでも買い取ってもらえますか？</h3>
            <p className="text-sm text-gray-700">
              A. いいえ。未使用のJCBギフトカードのみが買取対象です。
            </p>
          </div>
          <div className="border-l-4 border-primary-400 pl-4">
            <h3 className="font-bold mb-2">Q. 折れ曲がったJCBギフトカードでも買い取ってもらえますか？</h3>
            <p className="text-sm text-gray-700">
              A. 券面が読み取れる状態であれば買取可能です。業者に事前に相談してください。
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
        <a href="/item/amazon-gift" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">Amazonギフト券買取 →</h3>
          <p className="text-gray-600 text-sm">Amazonギフト券の買取相場と業者</p>
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
