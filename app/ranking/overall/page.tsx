export default function OverallRanking() {
  const vendors = [
    { rank: 1, name: 'チケットセンター', rate: '最大65%', speed: '最短10分', hours: '10:00-19:00', features: ['換金率65%と高水準', '初めての方に最適', '丁寧なサポート'], link: '/vendors/ticket-center' },
    { rank: 2, name: 'タートルチケット', rate: '最大60%', speed: '最短10分', hours: '10:00-19:30', features: ['最大30万円対応', 'LINE完結', '高額買取に強い'], link: '/vendors/turtle-ticket' },
    { rank: 3, name: 'リセチケット', rate: '最大65%', speed: '最短10分', hours: '24時間', features: ['24時間365日営業', 'LINE完結', '高換金率65%'], link: '/vendors/reseticke' },
    { rank: 4, name: 'シープチケット', rate: '最大60%', speed: '最短5分', hours: '24時間', features: ['業界最速5分振込', '24時間受付', '土日祝も営業'], link: '/vendors/sheep-ticket' },
    { rank: 5, name: 'バイチケ', rate: '最大60%', speed: '最短10分', hours: '24時間', features: ['24時間365日対応', 'LINE完結', '審査なし'], link: '/vendors/baichike' },
    { rank: 6, name: 'チケリア', rate: '最大60%', speed: '最短10分', hours: '9:00-19:00', features: ['シンプル手続き', '親切サポート', 'WEB完結'], link: '/vendors/tickelia' },
    { rank: 7, name: 'プラメリ', rate: '最大60%', speed: '最短10分', hours: '9:00-19:00', features: ['独自査定基準', '柔軟な対応', '丁寧なスタッフ'], link: '/vendors/prameri' },
    { rank: 8, name: 'ユニコーン', rate: '最大60%', speed: '最短10分', hours: '10:00-19:00', features: ['丁寧な接客', 'シンプル手続き', 'WEB完結'], link: '/vendors/unicorn' },
    { rank: 9, name: '買取キング', rate: '最大60%', speed: '最短10分', hours: '9:00-19:00', features: ['安定した実績', '親切対応', '年中無休'], link: '/vendors/kaitori-king' },
    { rank: 10, name: 'フォレスト', rate: '最大60%', speed: '最短10分', hours: '9:00-19:00', features: ['丁寧サポート', '分かりやすい説明', '信頼性重視'], link: '/vendors/forest' },
    { rank: 11, name: 'ピクミン', rate: '最大60%', speed: '最短10分', hours: '9:00-18:00', features: ['御三家系列', '安定運営', 'LINE完結'], link: '/vendors/pikmin' },
    { rank: 12, name: 'しいたけ', rate: '最大60%', speed: '最短10分', hours: '10:00-18:00', features: ['御三家系列', '大手業者', 'LINE完結'], link: '/vendors/shiitake' },
  ]

  return (
    <div className="space-y-6 md:space-y-8">
      {/* ヘッダー - 強化版 */}
      <section className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
        <div className="relative z-10 flex items-center gap-4 md:gap-6">
          <div className="text-6xl md:text-8xl lg:text-9xl transition-transform duration-300 hover:scale-110 hover:rotate-12">🏆</div>
          <div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-2 md:mb-3 text-white drop-shadow-lg leading-tight">
              総合ランキングTOP12
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-white/95 font-semibold">
              💰 換金率・⚡ 振込スピード・🔒 安全性を総合評価【2026年最新版】
            </p>
          </div>
        </div>
      </section>

      {/* ランキング */}
      <section className="space-y-6">
        {vendors.map((vendor) => (
          <div key={vendor.rank} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 md:p-8 border border-gray-100 transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 transition-transform duration-300 hover:scale-110">
                {vendor.rank === 1 && '🥇'}
                {vendor.rank === 2 && '🥈'}
                {vendor.rank === 3 && '🥉'}
                {vendor.rank > 3 && <span className="text-3xl md:text-4xl">{vendor.rank}位</span>}
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-black mb-3 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">{vendor.name}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex items-center gap-1 text-xs md:text-sm text-gray-600 mb-1">
                      <span className="text-base">💰</span>
                      <span>換金率</span>
                    </div>
                    <div className="text-sm md:text-base font-bold text-green-600">{vendor.rate}</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex items-center gap-1 text-xs md:text-sm text-gray-600 mb-1">
                      <span className="text-base">⚡</span>
                      <span>振込時間</span>
                    </div>
                    <div className="text-sm md:text-base font-bold text-red-600">{vendor.speed}</div>
                  </div>
                  <div className="col-span-2 md:col-span-1 bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex items-center gap-1 text-xs md:text-sm text-gray-600 mb-1">
                      <span className="text-base">🕒</span>
                      <span>営業時間</span>
                    </div>
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
            <a href={vendor.link} className="block bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center px-6 py-4 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 text-base md:text-lg font-bold shadow-lg hover:shadow-2xl transform hover:scale-105">
              📄 詳細を見る →
            </a>
          </div>
        ))}
      </section>

      {/* 内部リンク */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <a href="/ranking/speed" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-sm md:text-base font-bold mb-2">最短振込ランキング →</h3>
          <p className="text-gray-600 text-xs md:text-sm">最短5分で振込完了する業者TOP10</p>
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
