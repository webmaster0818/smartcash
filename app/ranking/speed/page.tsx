export default function SpeedRanking() {
  const vendors = [
    { rank: 1, name: 'シープチケット', speed: '最短5分', rate: '最大95%', hours: '24時間', features: ['業界最速クラス', 'モアタイム対応', '土日祝日も即時振込'], link: '/vendors/sheep-ticket' },
    { rank: 2, name: 'アーリーチケット', speed: '最短5分', rate: '最大93%', hours: '9:00-22:00', features: ['最短5分振込', '高換金率93%', '実績4年'], link: '/vendors/early-ticket' },
    { rank: 3, name: '買取フェアリー', speed: '最短5分', rate: '最大90%', hours: '24時間', features: ['最短5分振込', '24時間営業', '高換金率90%'], link: '/vendors/kaitori-fairy' },
    { rank: 4, name: 'ミリオンチケット', speed: '最短7分', rate: '最大92%', hours: '24時間', features: ['最短7分振込', '高換金率92%', '実績5年'], link: '/vendors/million-ticket' },
    { rank: 5, name: 'リゼロカイトリ', speed: '最短7分', rate: '最大91%', hours: '24時間', features: ['最短7分振込', '高換金率91%', '24時間対応'], link: '/vendors/rizero-kaitori' },
    { rank: 6, name: 'チケットヘブン', speed: '最短7分', rate: '最大90%', hours: '24時間', features: ['最短7分振込', '実績4年', '24時間営業'], link: '/vendors/ticket-heaven' },
    { rank: 7, name: 'タートルチケット', speed: '最短10分', rate: '最大90%', hours: '24時間', features: ['最短10分振込', 'LINE完結', '24時間対応'], link: '/vendors/turtle-ticket' },
    { rank: 8, name: '買取ダッシュ', speed: '最短10分', rate: '最大89%', hours: '9:00-21:00', features: ['スピード振込', '実績3年', '丁寧対応'], link: '/vendors/kaitori-dash' },
    { rank: 9, name: '買取ワイルド', speed: '最短10分', rate: '最大89%', hours: '9:00-22:00', features: ['最短10分振込', '実績3年', '安定運営'], link: '/vendors/kaitori-wild' },
    { rank: 10, name: '金券市場', speed: '最短10分', rate: '最大89%', hours: '9:00-22:00', features: ['実績5年', 'スピード対応', '信頼性重視'], link: '/vendors/kinken-ichiba' },
  ]

  return (
    <div className="space-y-6 md:space-y-8">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 md:p-8 rounded-lg">
        <div className="flex items-center gap-3 md:gap-4 mb-4">
          <div className="text-4xl md:text-6xl">⚡</div>
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 leading-tight">最短振込ランキングTOP10【2026年最新版】</h1>
            <p className="text-sm md:text-base text-gray-700">最短5分〜10分で振込完了する業者を厳選</p>
          </div>
        </div>
      </section>

      {/* ランキング */}
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
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div>
                    <div className="text-xs md:text-sm text-gray-600 mb-1">振込時間</div>
                    <div className="text-sm md:text-base font-bold text-red-600">{vendor.speed}</div>
                  </div>
                  <div>
                    <div className="text-xs md:text-sm text-gray-600 mb-1">換金率</div>
                    <div className="text-sm md:text-base font-bold text-green-600">{vendor.rate}</div>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <div className="text-xs md:text-sm text-gray-600 mb-1">営業時間</div>
                    <div className="text-sm md:text-base">{vendor.hours}</div>
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

      {/* 内部リンク */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <a href="/ranking/overall" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-sm md:text-base font-bold mb-2">総合ランキング →</h3>
          <p className="text-gray-600 text-xs md:text-sm">おすすめの先払い買取業者TOP20</p>
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
