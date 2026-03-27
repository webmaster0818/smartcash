export default function Home() {
  const vendors = [
    { rank: 1, name: 'チケットセンター', emoji: '🎫', rate: '最大65%', speed: '最短10分', hours: '10:00-19:00', link: '/vendors/ticket-center', image: '/images/vendors/ticket-center.jpg' },
    { rank: 2, name: 'タートルチケット', emoji: '🐢', rate: '最大60%', speed: '最短10分', hours: '10:00-19:30', link: '/vendors/turtle-ticket', image: '/images/vendors/turtle-ticket.jpg' },
    { rank: 3, name: 'リセチケット', emoji: '🔄', rate: '最大65%', speed: '最短10分', hours: '24時間', link: '/vendors/reseticke', image: '/images/vendors/reseticke.svg' },
    { rank: 4, name: 'シープチケット', emoji: '🐑', rate: '最大60%', speed: '最短5分', hours: '24時間', link: '/vendors/sheep-ticket', image: '/images/vendors/sheep-ticket.png' },
    { rank: 5, name: 'バイチケ', emoji: '🎟️', rate: '最大60%', speed: '最短10分', hours: '24時間', link: '/vendors/baichike' },
    { rank: 6, name: 'チケリア', emoji: '🎪', rate: '最大60%', speed: '最短10分', hours: '9:00-19:00', link: '/vendors/tickelia' },
    { rank: 7, name: 'プラメリ', emoji: '💎', rate: '最大60%', speed: '最短10分', hours: '9:00-19:00', link: '/vendors/prameri' },
    { rank: 8, name: 'ユニコーン', emoji: '🦄', rate: '最大60%', speed: '最短10分', hours: '10:00-19:00', link: '/vendors/unicorn' },
    { rank: 9, name: '買取キング', emoji: '👑', rate: '最大60%', speed: '最短10分', hours: '9:00-19:00', link: '/vendors/kaitori-king' },
    { rank: 10, name: 'フォレスト', emoji: '🌲', rate: '最大60%', speed: '最短10分', hours: '9:00-19:00', link: '/vendors/forest' },
    { rank: 11, name: 'ピクミン', emoji: '🌱', rate: '最大60%', speed: '最短10分', hours: '9:00-18:00', link: '/vendors/pikmin' },
    { rank: 12, name: 'しいたけ', emoji: '🍄', rate: '最大60%', speed: '最短10分', hours: '10:00-18:00', link: '/vendors/shiitake' },
  ]

  return (
    <div className="space-y-8 md:space-y-12">
      {/* Hero Section */}
      <section className="text-center py-8 md:py-12 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg px-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">スマートキャッシュへようこそ</h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8">
          商品券・ギフトカードの先払い買取業者を徹底比較
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <a href="/ranking/overall" className="inline-block bg-primary-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-primary-700 transition text-sm md:text-base lg:text-lg font-bold min-h-[48px] flex items-center justify-center">
            総合ランキングを見る
          </a>
          <a href="/guide/about" className="inline-block bg-white text-primary-600 border-2 border-primary-600 px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-primary-50 transition text-sm md:text-base lg:text-lg font-bold min-h-[48px] flex items-center justify-center">
            先払い買取とは？
          </a>
        </div>
      </section>

      {/* 業者一覧 */}
      <section>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-center">先払い買取業者12社 比較一覧</h2>
        
        {/* PC版：テーブル表示 */}
        <div className="hidden md:block overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full">
            <thead className="bg-primary-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm lg:text-base">順位</th>
                <th className="px-4 py-3 text-left text-sm lg:text-base">業者名</th>
                <th className="px-4 py-3 text-left text-sm lg:text-base">換金率</th>
                <th className="px-4 py-3 text-left text-sm lg:text-base">振込時間</th>
                <th className="px-4 py-3 text-left text-sm lg:text-base">営業時間</th>
                <th className="px-4 py-3 text-left text-sm lg:text-base">詳細</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((vendor, index) => (
                <tr key={vendor.rank} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-3 font-bold text-primary-600 text-sm lg:text-base">{vendor.rank}位</td>
                  <td className="px-4 py-3 text-sm lg:text-base">
                    <div className="flex items-center gap-3">
                      {vendor.image ? (
                        <img src={vendor.image} alt={vendor.name} className="w-12 h-12 object-cover rounded" />
                      ) : (
                        <span className="text-xl">{vendor.emoji}</span>
                      )}
                      <span>{vendor.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-bold text-green-600 text-sm lg:text-base">{vendor.rate}</td>
                  <td className="px-4 py-3 font-bold text-red-600 text-sm lg:text-base">{vendor.speed}</td>
                  <td className="px-4 py-3 text-sm lg:text-base">{vendor.hours}</td>
                  <td className="px-4 py-3">
                    <a href={vendor.link} className="text-primary-600 hover:text-primary-800 font-bold text-sm lg:text-base">
                      詳細 →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* スマホ版：カード表示 */}
        <div className="md:hidden space-y-4">
          {vendors.map((vendor) => (
            <div key={vendor.rank} className="bg-white p-4 rounded-lg shadow">
              {vendor.image && (
                <div className="mb-3 rounded-lg overflow-hidden">
                  <img src={vendor.image} alt={vendor.name} className="w-full h-auto" />
                </div>
              )}
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">{vendor.emoji}</div>
                <div className="flex-1">
                  <div className="text-sm text-primary-600 font-bold">{vendor.rank}位</div>
                  <div className="font-bold text-base">{vendor.name}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                <div>
                  <div className="text-gray-600 text-xs mb-1">換金率</div>
                  <div className="font-bold text-green-600">{vendor.rate}</div>
                </div>
                <div>
                  <div className="text-gray-600 text-xs mb-1">振込時間</div>
                  <div className="font-bold text-red-600">{vendor.speed}</div>
                </div>
                <div className="col-span-2">
                  <div className="text-gray-600 text-xs mb-1">営業時間</div>
                  <div className="font-bold">{vendor.hours}</div>
                </div>
              </div>
              <a href={vendor.link} className="block bg-primary-600 text-white text-center py-2 rounded hover:bg-primary-700 transition text-sm font-bold">
                詳細を見る →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ランキング */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <a href="/ranking/overall" className="block bg-white p-4 md:p-6 rounded-lg shadow hover:shadow-lg transition min-h-[120px]">
          <div className="text-3xl md:text-4xl mb-2 md:mb-3">🏆</div>
          <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2">総合ランキング</h3>
          <p className="text-gray-600 text-xs md:text-sm">おすすめTOP12</p>
        </a>
        <a href="/ranking/speed" className="block bg-white p-4 md:p-6 rounded-lg shadow hover:shadow-lg transition min-h-[120px]">
          <div className="text-3xl md:text-4xl mb-2 md:mb-3">⚡</div>
          <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2">最短振込ランキング</h3>
          <p className="text-gray-600 text-xs md:text-sm">最短5分のスピード</p>
        </a>
        <a href="/ranking/rate" className="block bg-white p-4 md:p-6 rounded-lg shadow hover:shadow-lg transition min-h-[120px]">
          <div className="text-3xl md:text-4xl mb-2 md:mb-3">💰</div>
          <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2">高換金率ランキング</h3>
          <p className="text-gray-600 text-xs md:text-sm">最大65%の換金率</p>
        </a>
        <a href="/ranking/safety" className="block bg-white p-4 md:p-6 rounded-lg shadow hover:shadow-lg transition min-h-[120px]">
          <div className="text-3xl md:text-4xl mb-2 md:mb-3">🔒</div>
          <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2">安全性重視ランキング</h3>
          <p className="text-gray-600 text-xs md:text-sm">古物商許可取得業者</p>
        </a>
      </section>

      {/* ガイド */}
      <section className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">先払い買取の基礎知識</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <a href="/guide/about" className="block p-4 border rounded hover:border-primary-600 transition min-h-[100px]">
            <h3 className="font-bold mb-2 text-sm md:text-base">先払い買取とは？</h3>
            <p className="text-gray-600 text-xs md:text-sm">仕組み・流れをわかりやすく解説</p>
          </a>
          <a href="/guide/merit" className="block p-4 border rounded hover:border-primary-600 transition min-h-[100px]">
            <h3 className="font-bold mb-2 text-sm md:text-base">メリット・デメリット</h3>
            <p className="text-gray-600 text-xs md:text-sm">他の資金調達方法との比較</p>
          </a>
          <a href="/guide/comparison" className="block p-4 border rounded hover:border-primary-600 transition min-h-[100px]">
            <h3 className="font-bold mb-2 text-sm md:text-base">業者の選び方</h3>
            <p className="text-gray-600 text-xs md:text-sm">失敗しない4つのポイント</p>
          </a>
        </div>
      </section>

      {/* 安全ガイド */}
      <section className="bg-primary-50 p-4 md:p-6 lg:p-8 rounded-lg">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">安全に利用するために</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <a href="/safety/check" className="block bg-white p-4 rounded hover:shadow-lg transition min-h-[100px]">
            <h3 className="font-bold mb-2 text-sm md:text-base">悪徳業者の見分け方</h3>
            <p className="text-gray-600 text-xs md:text-sm">安全チェックリスト</p>
          </a>
          <a href="/safety/legal" className="block bg-white p-4 rounded hover:shadow-lg transition min-h-[100px]">
            <h3 className="font-bold mb-2 text-sm md:text-base">法律・規制について</h3>
            <p className="text-gray-600 text-xs md:text-sm">古物営業法と関連法規</p>
          </a>
        </div>
      </section>
    </div>
  )
}
