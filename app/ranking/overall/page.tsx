export default function OverallRanking() {
  const vendors = [
    {
      rank: 1,
      name: 'シープチケット',
      rate: '最大95%',
      speed: '最短5分',
      safety: '⭐⭐⭐⭐⭐',
      features: ['業界最高水準の換金率', '最短5分振込', '古物商許可取得済み'],
      link: '/vendors/sheep-ticket'
    },
    {
      rank: 2,
      name: 'タートルチケット',
      rate: '最大90%',
      speed: '最短10分',
      safety: '⭐⭐⭐⭐⭐',
      features: ['安定した高換金率', 'LINE完結対応', '24時間営業'],
      link: '/vendors/turtle-ticket'
    },
    {
      rank: 3,
      name: 'リセチケット',
      rate: '最大88%',
      speed: '最短10分',
      safety: '⭐⭐⭐⭐',
      features: ['初回利用者に優しい', 'WEB完結', '土日祝日も対応'],
      link: '/vendors/reseticke'
    },
    {
      rank: 4,
      name: 'チケットセンター',
      rate: '最大85%',
      speed: '最短15分',
      safety: '⭐⭐⭐⭐',
      features: ['運営実績5年以上', '丁寧なサポート', '安全性重視'],
      link: '/vendors/ticket-center'
    },
    {
      rank: 5,
      name: 'MOOMIN',
      rate: '最大82%',
      speed: '最短20分',
      safety: '⭐⭐⭐⭐',
      features: ['女性スタッフ対応', 'クレカ不要', '金融ブラックOK'],
      link: '/vendors/moomin'
    },
  ]

  return (
    <div className="space-y-8">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 md:p-8 rounded-lg">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">先払い買取 総合ランキング【2026年最新版】</h1>
        <p className="text-sm md:text-base text-gray-700">
          換金率・振込時間・安全性などあらゆる角度から評価した、おすすめの先払い買取業者TOP10をご紹介します。
        </p>
      </section>

      {/* 比較表 */}
      <section className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-primary-600 text-white">
              <tr>
                <th className="px-4 py-3">順位</th>
                <th className="px-4 py-3">業者名</th>
                <th className="px-4 py-3">換金率</th>
                <th className="px-4 py-3">振込時間</th>
                <th className="px-4 py-3">安全性</th>
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
                  <td className="px-4 py-3 text-center text-primary-600 font-bold">{vendor.rate}</td>
                  <td className="px-4 py-3 text-center">{vendor.speed}</td>
                  <td className="px-4 py-3 text-center">{vendor.safety}</td>
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
                    <span className="text-gray-600 text-xs md:text-sm">換金率</span>
                    <div className="text-lg font-bold text-primary-600">{vendor.rate}</div>
                  </div>
                  <div>
                    <span className="text-gray-600 text-xs md:text-sm">振込時間</span>
                    <div className="text-lg font-bold">{vendor.speed}</div>
                  </div>
                  <div>
                    <span className="text-gray-600 text-xs md:text-sm">安全性</span>
                    <div className="text-lg">{vendor.safety}</div>
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

      {/* 選び方ガイド */}
      <section className="bg-gray-50 rounded-lg p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">業者の選び方</h2>
        <div className="space-y-3 md:space-y-4">
          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">🎯 換金率を重視する方</h3>
            <p className="text-sm md:text-base text-gray-700">
              シープチケット（最大95%）やタートルチケット（最大90%）がおすすめです。
            </p>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">⚡ スピードを重視する方</h3>
            <p className="text-sm md:text-base text-gray-700">
              最短5分振込のシープチケットが最速です。
            </p>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">🛡️ 安全性を重視する方</h3>
            <p className="text-sm md:text-base text-gray-700">
              古物商許可取得済み、運営実績が長いチケットセンターがおすすめです。
            </p>
          </div>
        </div>
      </section>

      {/* 内部リンク */}
      <section className="grid grid-cols-2 gap-2 md:gap-4">
        <a href="/ranking/speed" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">最短振込ランキング →</h3>
          <p className="text-gray-600 text-xs md:text-sm">最短5分で振込完了する業者をご紹介</p>
        </a>
        <a href="/ranking/rate" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">高換金率ランキング →</h3>
          <p className="text-gray-600 text-xs md:text-sm">換金率90%以上の業者をご紹介</p>
        </a>
        <a href="/ranking/safety" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">安全性重視ランキング →</h3>
          <p className="text-gray-600 text-xs md:text-sm">古物商許可取得済みの安全な業者</p>
        </a>
        <a href="/guide/about" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">先払い買取とは →</h3>
          <p className="text-gray-600 text-xs md:text-sm">仕組み・流れをわかりやすく解説</p>
        </a>
      </section>
    </div>
  )
}
