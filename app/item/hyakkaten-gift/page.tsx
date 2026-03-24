export default function HyakkatenGift() {
  const vendors = [
    { rank: 1, name: 'シープチケット', rate: '最大92%', speed: '最短5分', link: '/vendors/sheep-ticket' },
    { rank: 2, name: 'タートルチケット', rate: '最大90%', speed: '最短10分', link: '/vendors/turtle-ticket' },
    { rank: 3, name: 'チケットセンター', rate: '最大88%', speed: '最短15分', link: '/vendors/ticket-center' },
  ]

  return (
    <div className="space-y-8">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 md:p-8 rounded-lg">
        <div className="flex items-center gap-3 md:gap-4 mb-4">
          <div className="text-4xl md:text-6xl">🏬</div>
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 leading-tight">全国百貨店共通商品券買取【2026年最新版】</h1>
            <p className="text-sm md:text-base text-gray-700">換金率・買取相場・おすすめ業者を徹底解説</p>
          </div>
        </div>
      </section>

      {/* 買取相場 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">全国百貨店共通商品券の買取相場</h2>
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
                <td className="px-4 py-3 text-center text-green-600 font-bold">85〜92%</td>
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
        <p className="text-xs md:text-xs md:text-sm text-gray-600 mt-3 md:mt-4">
          ※ 全国百貨店共通商品券は換金率が非常に高く、最も人気のある商品券の一つです。
        </p>
      </section>

      {/* おすすめ業者 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">全国百貨店共通商品券買取おすすめ業者TOP3</h2>
        <div className="space-y-3 md:space-y-4">
          {vendors.map((vendor) => (
            <div key={vendor.rank} className="bg-gray-50 rounded-lg p-3 md:p-4">
              <div className="flex items-center gap-2 md:gap-4 flex-wrap md:flex-nowrap">
                <div className="text-2xl md:text-3xl font-bold text-primary-600">
                  {vendor.rank === 1 && '🥇'}
                  {vendor.rank === 2 && '🥈'}
                  {vendor.rank === 3 && '🥉'}
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg lg:text-xl text-base md:text-lg font-bold mb-2">{vendor.name}</h3>
                  <div className="grid grid-cols-2 gap-2 md:gap-4">
                    <div>
                      <span className="text-xs md:text-sm text-gray-600">換金率</span>
                      <div className="text-sm md:text-base font-bold text-green-600">{vendor.rate}</div>
                    </div>
                    <div>
                      <span className="text-xs md:text-sm text-gray-600">振込時間</span>
                      <div className="text-sm md:text-base font-bold text-red-600">{vendor.speed}</div>
                    </div>
                  </div>
                </div>
                <a href={vendor.link} className="bg-primary-600 text-white px-4 md:px-6 py-3 md:py-2 text-sm md:text-base min-h-[44px] flex items-center justify-center rounded-lg hover:bg-primary-700 transition">
                  詳細 →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 全国百貨店共通商品券とは */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">全国百貨店共通商品券とは</h2>
        <p className="text-gray-700 mb-4">
          全国百貨店共通商品券は、全国の主要百貨店で利用できる商品券です。高島屋、伊勢丹、三越、阪急など、多くの百貨店で使えるため、換金率が非常に高いのが特徴です。
        </p>
        <div className="bg-blue-50 p-3 md:p-4 rounded">
          <h3 className="text-base md:text-lg font-bold mb-2">特徴</h3>
          <ul className="space-y-1 text-xs md:text-sm text-gray-700">
            <li>• 全国の主要百貨店で利用可能</li>
            <li>• 有効期限なし</li>
            <li>• 券種: 1,000円券のみ</li>
            <li>• 買取需要が非常に高い</li>
            <li>• 換金率が高い</li>
          </ul>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">よくある質問</h2>
        <div className="space-y-3 md:space-y-4">
          <div className="border-l-4 border-primary-400 pl-3 md:pl-4">
            <h3 className="text-base md:text-lg font-bold mb-2">Q. 全国百貨店共通商品券は本当に92%で買い取ってもらえますか？</h3>
            <p className="text-sm text-gray-700">
              A. はい。シープチケットなら最大92%で買取可能です。需要が高いため、高換金率が期待できます。
            </p>
          </div>
          <div className="border-l-4 border-primary-400 pl-3 md:pl-4">
            <h3 className="text-base md:text-lg font-bold mb-2">Q. 使用済みの全国百貨店共通商品券でも買い取ってもらえますか？</h3>
            <p className="text-sm text-gray-700">
              A. いいえ。未使用の全国百貨店共通商品券のみが買取対象です。
            </p>
          </div>
          <div className="border-l-4 border-primary-400 pl-3 md:pl-4">
            <h3 className="text-base md:text-lg font-bold mb-2">Q. 折れ曲がった全国百貨店共通商品券でも買い取ってもらえますか？</h3>
            <p className="text-sm text-gray-700">
              A. 券面が読み取れる状態であれば買取可能です。業者に事前に相談してください。
            </p>
          </div>
        </div>
      </section>

      {/* 内部リンク */}
      <section className="grid grid-cols-2 gap-2 md:gap-4">
        <a href="/ranking/rate" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">高換金率ランキング →</h3>
          <p className="text-gray-600 text-sm">換金率が高い業者を比較</p>
        </a>
        <a href="/item/jcb-gift" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">JCBギフトカード買取 →</h3>
          <p className="text-gray-600 text-sm">JCBギフトカードの買取相場と業者</p>
        </a>
        <a href="/guide/about" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">先払い買取とは →</h3>
          <p className="text-gray-600 text-sm">仕組み・流れをわかりやすく解説</p>
        </a>
        <a href="/ranking/overall" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">総合ランキング →</h3>
          <p className="text-gray-600 text-sm">おすすめの先払い買取業者TOP10</p>
        </a>
      </section>
    </div>
  )
}
