export default function SpeedRanking() {
  const vendors = [
    {
      rank: 1,
      name: 'シープチケット',
      speed: '最短5分',
      rate: '最大95%',
      support: '24時間営業',
      features: ['業界最速クラス', '即日振込保証', 'モアタイム対応'],
      link: '/vendors/sheep-ticket'
    },
    {
      rank: 2,
      name: 'タートルチケット',
      speed: '最短10分',
      rate: '最大90%',
      support: '24時間営業',
      features: ['スピード振込対応', 'LINE完結', '土日祝日も対応'],
      link: '/vendors/turtle-ticket'
    },
    {
      rank: 3,
      name: 'リセチケット',
      speed: '最短10分',
      rate: '最大88%',
      support: '9:00-22:00',
      features: ['迅速審査', 'WEB完結', '初回利用者優遇'],
      link: '/vendors/reseticke'
    },
    {
      rank: 4,
      name: 'チケットセンター',
      speed: '最短15分',
      rate: '最大85%',
      support: '9:00-21:00',
      features: ['安定した振込速度', '丁寧なサポート', '5年以上の実績'],
      link: '/vendors/ticket-center'
    },
    {
      rank: 5,
      name: 'MOOMIN',
      speed: '最短20分',
      rate: '最大82%',
      support: '10:00-20:00',
      features: ['女性スタッフ対応', '安心サポート', '初回割引あり'],
      link: '/vendors/moomin'
    },
  ]

  return (
    <div className="space-y-8">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 md:p-8 rounded-lg">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">最短振込ランキング【2026年最新版】</h1>
        <p className="text-sm md:text-base text-gray-700">
          今すぐ現金が必要な方向けに、最短5分で振込完了する先払い買取業者をランキング形式でご紹介します。
        </p>
      </section>

      {/* ポイント */}
      <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
        <h2 className="font-bold text-lg mb-2">⚡ 最短振込のポイント</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-yellow-600">✓</span>
            <span><strong>モアタイム対応の銀行</strong>を使えば24時間即時振込</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-600">✓</span>
            <span><strong>本人確認書類</strong>を事前に準備しておくとスムーズ</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-600">✓</span>
            <span><strong>営業時間内</strong>に申し込むとより早い</span>
          </li>
        </ul>
      </section>

      {/* 比較表 */}
      <section className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-primary-600 text-white">
              <tr>
                <th className="px-4 py-3">順位</th>
                <th className="px-4 py-3">業者名</th>
                <th className="px-4 py-3">振込時間</th>
                <th className="px-4 py-3">換金率</th>
                <th className="px-4 py-3">営業時間</th>
                <th className="px-4 py-3">詳細</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {vendors.map((vendor) => (
                <tr key={vendor.rank} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-center font-bold text-lg">
                    {vendor.rank === 1 && '🥇'}
                    {vendor.rank === 2 && '🥈'}
                    {vendor.rank === 3 && '🥉'}
                    {vendor.rank > 3 && vendor.rank}
                  </td>
                  <td className="px-4 py-3 font-bold">{vendor.name}</td>
                  <td className="px-4 py-3 text-center text-red-600 font-bold">{vendor.speed}</td>
                  <td className="px-4 py-3 text-center text-primary-600">{vendor.rate}</td>
                  <td className="px-4 py-3 text-center text-sm">{vendor.support}</td>
                  <td className="px-4 py-3 text-center">
                    <a href={vendor.link} className="text-primary-600 hover:underline">
                      詳細 →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ランキング詳細 */}
      <section className="space-y-4 md:space-y-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold">ランキング詳細</h2>
        
        {vendors.map((vendor) => (
          <div key={vendor.rank} className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-600">
                {vendor.rank === 1 && '🥇'}
                {vendor.rank === 2 && '🥈'}
                {vendor.rank === 3 && '🥉'}
                {vendor.rank > 3 && vendor.rank}
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl text-base md:text-lg font-bold mb-2">{vendor.name}</h3>
                <div className="grid md:grid-cols-3 gap-3 md:gap-4 mb-4">
                  <div>
                    <span className="text-gray-600 text-xs md:text-sm">振込時間</span>
                    <div className="text-lg font-bold text-red-600">{vendor.speed}</div>
                  </div>
                  <div>
                    <span className="text-gray-600 text-xs md:text-sm">換金率</span>
                    <div className="text-lg font-bold text-primary-600">{vendor.rate}</div>
                  </div>
                  <div>
                    <span className="text-gray-600 text-xs md:text-sm">営業時間</span>
                    <div className="text-lg font-bold">{vendor.support}</div>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-base md:text-lg font-bold mb-2">特徴</h4>
                  <ul className="space-y-1">
                    {vendor.features.map((feature, index) => (
                      <li key={index} className="text-gray-700 flex items-center gap-2">
                        <span className="text-primary-600">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a 
                  href={vendor.link}
                  className="inline-block bg-primary-600 text-white px-4 md:px-6 py-3 md:py-2 rounded-lg text-sm md:text-base min-h-[44px] flex items-center justify-center hover:bg-primary-700 transition"
                >
                  詳細を見る
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* よくある質問 */}
      <section className="bg-gray-50 rounded-lg p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">よくある質問</h2>
        <div className="space-y-3 md:space-y-4">
          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">Q. 本当に5分で振り込まれますか？</h3>
            <p className="text-sm md:text-base text-gray-700">
              A. モアタイム対応の銀行口座を使用し、営業時間内に申し込めば、最短5分で振込完了します。ただし、申し込み内容の確認や本人確認に時間がかかる場合もあります。
            </p>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">Q. 土日祝日でも即日振込されますか？</h3>
            <p className="text-sm md:text-base text-gray-700">
              A. モアタイム対応の銀行口座なら土日祝日でも即時振込可能です。楽天銀行、PayPay銀行、住信SBIネット銀行などがおすすめです。
            </p>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">Q. 営業時間外でも申し込めますか？</h3>
            <p className="text-sm md:text-base text-gray-700">
              A. 24時間営業の業者（シープチケット、タートルチケット）なら深夜でも対応可能です。
            </p>
          </div>
        </div>
      </section>

      {/* 内部リンク */}
      <section className="grid grid-cols-2 gap-2 md:gap-4">
        <a href="/ranking/overall" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">総合ランキング →</h3>
          <p className="text-gray-600 text-xs md:text-sm">おすすめの先払い買取業者TOP10</p>
        </a>
        <a href="/ranking/rate" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">高換金率ランキング →</h3>
          <p className="text-gray-600 text-xs md:text-sm">換金率90%以上の業者をご紹介</p>
        </a>
        <a href="/guide/about" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">先払い買取とは →</h3>
          <p className="text-gray-600 text-xs md:text-sm">仕組み・流れをわかりやすく解説</p>
        </a>
        <a href="/safety/check" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">悪徳業者の見分け方 →</h3>
          <p className="text-gray-600 text-xs md:text-sm">安全に利用するためのチェックリスト</p>
        </a>
      </section>
    </div>
  )
}
