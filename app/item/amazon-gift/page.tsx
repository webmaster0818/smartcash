export default function AmazonGift() {
  const vendors = [
    { rank: 1, name: 'リセチケット', rate: '最大88%', speed: '最短10分', link: '/vendors/reseticke' },
    { rank: 2, name: 'シープチケット', rate: '最大85%', speed: '最短5分', link: '/vendors/sheep-ticket' },
    { rank: 3, name: 'タートルチケット', rate: '最大82%', speed: '最短10分', link: '/vendors/turtle-ticket' },
  ]

  return (
    <div className="space-y-8">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 md:p-8 rounded-lg">
        <div className="flex items-center gap-3 md:gap-4 mb-4">
          <div className="text-4xl md:text-6xl">🎁</div>
          <div>
            <h1 className="text-xl md:text-2xl lg:text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 leading-tight">Amazonギフト券買取【2026年最新版】</h1>
            <p className="text-sm md:text-base text-gray-700">換金率・買取相場・おすすめ業者を徹底解説</p>
          </div>
        </div>
      </section>

      {/* 買取相場 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">Amazonギフト券の買取相場</h2>
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
                <td className="px-4 py-3 text-center text-green-600 font-bold">80〜88%</td>
                <td className="px-4 py-3 text-center text-red-600 font-bold">最短5分</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Amazon買取</td>
                <td className="px-4 py-3 text-center">80〜90%</td>
                <td className="px-4 py-3 text-center">30分〜1時間</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs md:text-xs md:text-sm text-gray-600 mt-3 md:mt-4">
          ※ Amazonギフト券はEメールタイプ（ギフト券番号のみ）の場合、換金率が高めです。
        </p>
      </section>

      {/* おすすめ業者 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">Amazonギフト券買取おすすめ業者TOP3</h2>
        <div className="space-y-3 md:space-y-4">
          {vendors.map((vendor) => (
            <div key={vendor.rank} className="bg-gray-50 rounded-lg p-3 md:p-4">
              <div className="flex items-center gap-2 md:gap-4 flex-wrap md:flex-nowrap">
                <div className="text-xl md:text-2xl lg:text-2xl md:text-3xl font-bold text-primary-600">
                  {vendor.rank === 1 && '🥇'}
                  {vendor.rank === 2 && '🥈'}
                  {vendor.rank === 3 && '🥉'}
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg lg:text-base md:text-lg lg:text-xl text-base md:text-lg font-bold mb-2">{vendor.name}</h3>
                  <div className="grid grid-cols-2 gap-2 md:gap-4">
                    <div>
                      <span className="text-xs md:text-sm text-gray-600">換金率</span>
                      <div className="font-bold text-green-600">{vendor.rate}</div>
                    </div>
                    <div>
                      <span className="text-xs md:text-sm text-gray-600">振込時間</span>
                      <div className="font-bold text-red-600">{vendor.speed}</div>
                    </div>
                  </div>
                </div>
                <a href={vendor.link} className="bg-primary-600 text-white px-4 md:px-6 py-3 md:py-2 rounded-lg text-sm md:text-base min-h-[44px] flex items-center justify-center hover:bg-primary-700 transition">
                  詳細 →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amazonギフト券とは */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">Amazonギフト券とは</h2>
        <p className="text-gray-700 mb-4">
          Amazonギフト券は、Amazon.co.jpで使えるギフト券です。Eメールタイプ、カードタイプ、チャージタイプなど様々な種類があります。
        </p>
        <div className="bg-blue-50 p-3 md:p-4 rounded">
          <h3 className="text-base md:text-lg font-bold mb-2">種類</h3>
          <ul className="space-y-1 text-xs md:text-sm text-gray-700">
            <li>• <strong>Eメールタイプ:</strong> ギフト券番号のみ（最も買取されやすい）</li>
            <li>• <strong>カードタイプ:</strong> プラスチックカード</li>
            <li>• <strong>チャージタイプ:</strong> アカウントに直接チャージ（買取不可）</li>
          </ul>
        </div>
        <p className="text-sm text-yellow-700 mt-4 bg-yellow-50 p-3 rounded">
          ⚠️ 注意: チャージタイプ（アカウントにチャージ済み）は買取できません。Eメールタイプまたはカードタイプが必要です。
        </p>
      </section>

      {/* よくある質問 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">よくある質問</h2>
        <div className="space-y-3 md:space-y-4">
          <div className="border-l-4 border-primary-400 pl-3 md:pl-4">
            <h3 className="text-base md:text-lg font-bold mb-2">Q. Amazonギフト券は本当に88%で買い取ってもらえますか？</h3>
            <p className="text-sm text-gray-700">
              A. はい。リセチケットなら最大88%で買取可能です。Eメールタイプが最も高換金率です。
            </p>
          </div>
          <div className="border-l-4 border-primary-400 pl-3 md:pl-4">
            <h3 className="text-base md:text-lg font-bold mb-2">Q. アカウントにチャージ済みのAmazonギフト券でも買い取ってもらえますか？</h3>
            <p className="text-sm text-gray-700">
              A. いいえ。チャージタイプは買取できません。Eメールタイプまたはカードタイプが必要です。
            </p>
          </div>
          <div className="border-l-4 border-primary-400 pl-3 md:pl-4">
            <h3 className="text-base md:text-lg font-bold mb-2">Q. 一部使用したAmazonギフト券でも買い取ってもらえますか？</h3>
            <p className="text-sm text-gray-700">
              A. いいえ。未使用のAmazonギフト券のみが買取対象です。
            </p>
          </div>
          <div className="border-l-4 border-primary-400 pl-3 md:pl-4">
            <h3 className="text-base md:text-lg font-bold mb-2">Q. Amazonギフト券の買取は違法ではありませんか？</h3>
            <p className="text-sm text-gray-700">
              A. いいえ。古物営業法に基づく合法的な買取です。ただし、古物商許可を持たない業者は違法なので注意してください。
            </p>
          </div>
        </div>
      </section>

      {/* 内部リンク */}
      <section className="grid grid-cols-2 gap-2 md:gap-4">
        <a href="/ranking/rate" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">高換金率ランキング →</h3>
          <p className="text-gray-600 text-xs md:text-sm">換金率が高い業者を比較</p>
        </a>
        <a href="/item/jcb-gift" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">JCBギフトカード買取 →</h3>
          <p className="text-gray-600 text-xs md:text-sm">JCBギフトカードの買取相場と業者</p>
        </a>
        <a href="/guide/about" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">先払い買取とは →</h3>
          <p className="text-gray-600 text-xs md:text-sm">仕組み・流れをわかりやすく解説</p>
        </a>
        <a href="/ranking/overall" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">総合ランキング →</h3>
          <p className="text-gray-600 text-xs md:text-sm">おすすめの先払い買取業者TOP10</p>
        </a>
      </section>
    </div>
  )
}
