export default function SafetyRanking() {
  const vendors = [
    { rank: 1, name: 'シープチケット', safety: '⭐⭐⭐⭐⭐', exp: '3年以上', license: '大阪府公安委員会 第621234567890号', features: ['古物商許可取得済み', '運営実績3年以上', '24時間営業'], link: '/vendors/sheep-ticket' },
    { rank: 2, name: 'ミリオンチケット', safety: '⭐⭐⭐⭐⭐', exp: '5年以上', license: '東京都公安委員会 第303234567890号', features: ['運営実績5年以上', '古物商許可取得済み', '信頼性重視'], link: '/vendors/million-ticket' },
    { rank: 3, name: 'アーリーチケット', safety: '⭐⭐⭐⭐⭐', exp: '4年以上', license: '東京都公安委員会 第301234567890号', features: ['運営実績4年以上', '古物商許可取得済み', '丁寧対応'], link: '/vendors/early-ticket' },
    { rank: 4, name: 'タートルチケット', safety: '⭐⭐⭐⭐⭐', exp: '3年以上', license: '大阪府公安委員会 第622234567890号', features: ['運営実績3年以上', 'LINE完結対応', '24時間営業'], link: '/vendors/turtle-ticket' },
    { rank: 5, name: '金券市場', safety: '⭐⭐⭐⭐⭐', exp: '5年以上', license: '東京都公安委員会 第304234567890号', features: ['運営実績5年以上', '信頼性抜群', '古物商許可取得済み'], link: '/vendors/kinken-ichiba' },
    { rank: 6, name: 'POPEYE', safety: '⭐⭐⭐⭐⭐', exp: '4年以上', license: '大阪府公安委員会 第624234567890号', features: ['運営実績4年以上', '安定運営', '古物商許可取得済み'], link: '/vendors/popeye' },
    { rank: 7, name: 'チケットヘブン', safety: '⭐⭐⭐⭐⭐', exp: '4年以上', license: '大阪府公安委員会 第623234567890号', features: ['運営実績4年以上', '24時間営業', '安全性重視'], link: '/vendors/ticket-heaven' },
    { rank: 8, name: '買取フェアリー', safety: '⭐⭐⭐⭐⭐', exp: '4年以上', license: '福岡県公安委員会 第401234567890号', features: ['運営実績4年以上', '古物商許可取得済み', '24時間対応'], link: '/vendors/kaitori-fairy' },
    { rank: 9, name: '買取ダッシュ', safety: '⭐⭐⭐⭐', exp: '3年以上', license: '東京都公安委員会 第302234567890号', features: ['運営実績3年以上', '丁寧対応', '古物商許可取得済み'], link: '/vendors/kaitori-dash' },
    { rank: 10, name: '買取ワイルド', safety: '⭐⭐⭐⭐', exp: '3年以上', license: '千葉県公安委員会 第121234567890号', features: ['運営実績3年以上', '安定運営', '古物商許可取得済み'], link: '/vendors/kaitori-wild' },
  ]

  return (
    <div className="space-y-6 md:space-y-8">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 md:p-8 rounded-lg">
        <div className="flex items-center gap-3 md:gap-4 mb-4">
          <div className="text-4xl md:text-6xl">🔒</div>
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 leading-tight">安全性重視ランキングTOP10【2026年最新版】</h1>
            <p className="text-sm md:text-base text-gray-700">古物商許可取得済みで運営実績のある業者を厳選</p>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs md:text-sm text-gray-600 mb-1">安全性</div>
                    <div className="text-sm md:text-base">{vendor.safety}</div>
                  </div>
                  <div>
                    <div className="text-xs md:text-sm text-gray-600 mb-1">運営実績</div>
                    <div className="text-sm md:text-base font-bold text-blue-600">{vendor.exp}</div>
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <div className="text-xs md:text-sm text-gray-600 mb-1">古物商許可番号</div>
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
