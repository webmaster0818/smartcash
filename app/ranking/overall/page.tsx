export default function OverallRanking() {
  const vendors = [
    { rank: 1, name: 'シープチケット', rate: '最大95%', speed: '最短5分', safety: '⭐⭐⭐⭐⭐', features: ['業界最高水準の換金率95%', '最短5分振込', '24時間営業'], link: '/vendors/sheep-ticket' },
    { rank: 2, name: 'ミリオンチケット', rate: '最大92%', speed: '最短7分', safety: '⭐⭐⭐⭐⭐', features: ['高換金率92%', '運営実績5年以上', '24時間営業'], link: '/vendors/million-ticket' },
    { rank: 3, name: 'アーリーチケット', rate: '最大93%', speed: '最短5分', safety: '⭐⭐⭐⭐⭐', features: ['トップクラスの換金率93%', '最短5分振込', '運営実績4年'], link: '/vendors/early-ticket' },
    { rank: 4, name: 'リゼロカイトリ', rate: '最大91%', speed: '最短7分', safety: '⭐⭐⭐⭐⭐', features: ['高換金率91%', '最短7分振込', '24時間営業'], link: '/vendors/rizero-kaitori' },
    { rank: 5, name: 'タートルチケット', rate: '最大90%', speed: '最短10分', safety: '⭐⭐⭐⭐⭐', features: ['安定した高換金率90%', 'LINE完結対応', '24時間営業'], link: '/vendors/turtle-ticket' },
    { rank: 6, name: '買取フェアリー', rate: '最大90%', speed: '最短5分', safety: '⭐⭐⭐⭐⭐', features: ['高換金率90%', '最短5分振込', '24時間営業'], link: '/vendors/kaitori-fairy' },
    { rank: 7, name: 'チケットヘブン', rate: '最大90%', speed: '最短7分', safety: '⭐⭐⭐⭐⭐', features: ['高換金率90%', '最短7分振込', '24時間営業'], link: '/vendors/ticket-heaven' },
    { rank: 8, name: '買取ダッシュ', rate: '最大89%', speed: '最短10分', safety: '⭐⭐⭐⭐', features: ['高換金率89%', '運営実績3年', '丁寧な対応'], link: '/vendors/kaitori-dash' },
    { rank: 9, name: '買取ワイルド', rate: '最大89%', speed: '最短10分', safety: '⭐⭐⭐⭐', features: ['高換金率89%', 'スピード振込', '実績3年'], link: '/vendors/kaitori-wild' },
    { rank: 10, name: '金券市場', rate: '最大89%', speed: '最短10分', safety: '⭐⭐⭐⭐', features: ['運営実績5年', '高換金率89%', '信頼性重視'], link: '/vendors/kinken-ichiba' },
    { rank: 11, name: 'わくわく買取', rate: '最大88%', speed: '最短10分', safety: '⭐⭐⭐⭐', features: ['換金率88%', '朝8時から営業', '実績2年'], link: '/vendors/wakuwaku-kaitori' },
    { rank: 12, name: 'ピクミン', rate: '最大88%', speed: '最短10分', safety: '⭐⭐⭐⭐', features: ['換金率88%', 'スピード対応', '実績2年'], link: '/vendors/pikmin' },
    { rank: 13, name: 'POPEYE', rate: '最大88%', speed: '最短10分', safety: '⭐⭐⭐⭐', features: ['運営実績4年', '換金率88%', '安定対応'], link: '/vendors/popeye' },
    { rank: 14, name: 'クイック', rate: '最大88%', speed: '最短10分', safety: '⭐⭐⭐⭐', features: ['換金率88%', 'スピード重視', '実績3年'], link: '/vendors/quick' },
    { rank: 15, name: '買取キャンプ', rate: '最大87%', speed: '最短10分', safety: '⭐⭐⭐⭐', features: ['換金率87%', '運営実績3年', '丁寧対応'], link: '/vendors/kaitori-camp' },
    { rank: 16, name: 'ライオン', rate: '最大87%', speed: '最短12分', safety: '⭐⭐⭐⭐', features: ['換金率87%', '実績3年', '安定運営'], link: '/vendors/lion' },
    { rank: 17, name: 'born', rate: '最大87%', speed: '最短12分', safety: '⭐⭐⭐⭐', features: ['換金率87%', '実績2年', 'WEB完結'], link: '/vendors/born' },
    { rank: 18, name: 'パンダ', rate: '最大87%', speed: '最短12分', safety: '⭐⭐⭐⭐', features: ['換金率87%', '実績2年', '丁寧対応'], link: '/vendors/panda' },
    { rank: 19, name: 'リッチ', rate: '最大87%', speed: '最短12分', safety: '⭐⭐⭐⭐', features: ['換金率87%', '運営実績3年', '安定性'], link: '/vendors/rich' },
    { rank: 20, name: 'チョッパー', rate: '最大86%', speed: '最短15分', safety: '⭐⭐⭐⭐', features: ['換金率86%', '実績3年', '丁寧対応'], link: '/vendors/chopper' },
  ]

  return (
    <div className="space-y-6 md:space-y-8">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 md:p-8 rounded-lg">
        <div className="flex items-center gap-3 md:gap-4 mb-4">
          <div className="text-4xl md:text-6xl">🏆</div>
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 leading-tight">先払い買取 総合ランキングTOP20【2026年最新版】</h1>
            <p className="text-sm md:text-base text-gray-700">換金率・振込時間・安全性から総合評価</p>
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
                    <div className="text-xs md:text-sm text-gray-600 mb-1">換金率</div>
                    <div className="text-sm md:text-base font-bold text-green-600">{vendor.rate}</div>
                  </div>
                  <div>
                    <div className="text-xs md:text-sm text-gray-600 mb-1">振込時間</div>
                    <div className="text-sm md:text-base font-bold text-red-600">{vendor.speed}</div>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <div className="text-xs md:text-sm text-gray-600 mb-1">安全性</div>
                    <div className="text-sm md:text-base">{vendor.safety}</div>
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
        <a href="/ranking/rate" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-sm md:text-base font-bold mb-2">高換金率ランキング →</h3>
          <p className="text-gray-600 text-xs md:text-sm">換金率が高い業者TOP10</p>
        </a>
        <a href="/ranking/speed" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-sm md:text-base font-bold mb-2">最短振込ランキング →</h3>
          <p className="text-gray-600 text-xs md:text-sm">最短5分で振込完了する業者TOP10</p>
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
