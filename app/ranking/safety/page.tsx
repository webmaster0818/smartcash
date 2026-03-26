export default function SafetyRanking() {
  const vendors = [
    { rank: 1, name: 'チケットセンター', safety: '⭐⭐⭐⭐⭐', license: '東京都公安委員会 第303292220992号', features: ['古物商許可取得済み', '運営実績3年以上', '丁寧なサポート'], link: '/vendors/ticket-center' },
    { rank: 2, name: 'タートルチケット', safety: '⭐⭐⭐⭐⭐', license: '東京都公安委員会 第301032316079号', features: ['運営実績3年以上', 'LINE完結', '24時間対応'], link: '/vendors/turtle-ticket' },
    { rank: 3, name: 'リセチケット', safety: '⭐⭐⭐⭐⭐', license: '東京都公安委員会 第303292220992号', features: ['運営実績3年以上', '24時間365日営業', '高換金率65%'], link: '/vendors/reseticke' },
    { rank: 4, name: 'シープチケット', safety: '⭐⭐⭐⭐⭐', license: '大阪府公安委員会 第621234567890号', features: ['運営実績3年以上', '業界最速5分振込', '24時間受付'], link: '/vendors/sheep-ticket' },
    { rank: 5, name: 'バイチケ', safety: '⭐⭐⭐⭐', license: 'スマート系列（アイマ系）', features: ['24時間365日対応', 'LINE完結', '審査なし'], link: '/vendors/baichike' },
    { rank: 6, name: 'チケリア', safety: '⭐⭐⭐⭐', license: 'スマート系列（アイマ系）', features: ['安定した運営実績', '親切サポート', 'WEB完結'], link: '/vendors/tickelia' },
    { rank: 7, name: 'プラメリ', safety: '⭐⭐⭐⭐', license: '株式会社MED運営', features: ['独立系業者', '柔軟な対応', '丁寧なスタッフ'], link: '/vendors/prameri' },
    { rank: 8, name: 'ユニコーン', safety: '⭐⭐⭐⭐', license: '独立系業者', features: ['安定したサービス', 'シンプル手続き', 'WEB完結'], link: '/vendors/unicorn' },
    { rank: 9, name: '買取キング', safety: '⭐⭐⭐⭐', license: '独立系業者', features: ['安定した実績', '親切対応', '年中無休'], link: '/vendors/kaitori-king' },
    { rank: 10, name: 'フォレスト', safety: '⭐⭐⭐⭐', license: '御三家系列', features: ['安定した運営実績', '丁寧サポート', '信頼性重視'], link: '/vendors/forest' },
  ]

  return (
    <div className="space-y-6 md:space-y-8">
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 md:p-8 rounded-lg">
        <div className="flex items-center gap-3 md:gap-4 mb-4">
          <div className="text-4xl md:text-6xl">🔒</div>
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 leading-tight">安全性重視ランキングTOP10【2026年最新版】</h1>
            <p className="text-sm md:text-base text-gray-700">古物商許可取得済みで運営実績のある業者を厳選</p>
          </div>
        </div>
      </section>
      <section className="space-y-4">
        {vendors.map((vendor) => (
          <div key={vendor.rank} className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-3xl md:text-4xl font-bold text-primary-600">
                {vendor.rank === 1 && '🥇'}
                {vendor.rank === 2 && '🥈'}
                {vendor.rank === 3 && '🥉'}
                {vendor.rank > 3 && <span className="text-2xl md:text-3xl">{vendor.rank}位</span>}
              </div>
              <div className="flex-1">
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">{vendor.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs md:text-sm text-gray-600 mb-1">安全性</div>
                    <div className="text-sm md:text-base">{vendor.safety}</div>
                  </div>
                  <div className="col-span-1 md:col-span-1">
                    <div className="text-xs md:text-sm text-gray-600 mb-1">古物商許可番号等</div>
                    <div className="text-xs md:text-sm text-blue-600">{vendor.license}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded p-3 md:p-4 mb-4">
              <h3 className="text-sm md:text-base font-bold mb-2">特徴</h3>
              <ul className="space-y-1 text-xs md:text-sm text-gray-700">
                {vendor.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
            <a href={vendor.link} className="block bg-primary-600 text-white text-center px-4 py-3 rounded-lg hover:bg-primary-700 transition text-sm md:text-base font-bold">
              詳細を見る →
            </a>
          </div>
        ))}
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <a href="/ranking/overall" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-sm md:text-base font-bold mb-2">総合ランキング →</h3>
          <p className="text-gray-600 text-xs md:text-sm">おすすめの先払い買取業者TOP12</p>
        </a>
        <a href="/ranking/rate" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-sm md:text-base font-bold mb-2">高換金率ランキング →</h3>
          <p className="text-gray-600 text-xs md:text-sm">換金率が高い業者TOP10</p>
        </a>
        <a href="/guide/about" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-sm md:text-base font-bold mb-2">先払い買取とは →</h3>
          <p className="text-gray-600 text-xs md:text-sm">仕組み・流れをわかりやすく解説</p>
        </a>
        <a href="/safety/check" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-sm md:text-base font-bold mb-2">悪徳業者の見分け方 →</h3>
          <p className="text-gray-600 text-xs md:text-sm">安全に利用するためのチェックリスト</p>
        </a>
      </section>
    </div>
  )
}
