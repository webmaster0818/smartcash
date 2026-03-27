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
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">マネーガイドジャーナルへようこそ</h1>
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
        <div className="hidden md:block overflow-x-auto bg-white rounded-2xl shadow-xl">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm lg:text-base font-bold">順位</th>
                <th className="px-6 py-4 text-left text-sm lg:text-base font-bold">業者名</th>
                <th className="px-6 py-4 text-left text-sm lg:text-base font-bold">換金率</th>
                <th className="px-6 py-4 text-left text-sm lg:text-base font-bold">振込時間</th>
                <th className="px-6 py-4 text-left text-sm lg:text-base font-bold">営業時間</th>
                <th className="px-6 py-4 text-left text-sm lg:text-base font-bold">詳細</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((vendor, index) => (
                <tr key={vendor.rank} className={`${index % 2 === 0 ? 'bg-gradient-to-r from-gray-50 to-white' : 'bg-white'} hover:bg-primary-50 transition-colors duration-200 border-b border-gray-100`}>
                  <td className="px-6 py-5 font-bold text-primary-600 text-sm lg:text-base">{vendor.rank}位</td>
                  <td className="px-6 py-5 text-sm lg:text-base">
                    <div className="flex items-center gap-4">
                      {vendor.image ? (
                        <img src={vendor.image} alt={vendor.name} className="w-16 h-16 object-cover rounded-lg shadow-md" />
                      ) : (
                        <span className="text-2xl">{vendor.emoji}</span>
                      )}
                      <span className="font-semibold">{vendor.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 font-bold text-green-600 text-sm lg:text-base">{vendor.rate}</td>
                  <td className="px-6 py-5 font-bold text-red-600 text-sm lg:text-base">{vendor.speed}</td>
                  <td className="px-6 py-5 text-sm lg:text-base text-gray-700">{vendor.hours}</td>
                  <td className="px-6 py-5">
                    <a href={vendor.link} className="inline-block bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-all duration-200 font-bold text-sm lg:text-base shadow-md hover:shadow-lg">
                      詳細 →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* スマホ版：カード表示 */}
        <div className="md:hidden space-y-6">
          {vendors.map((vendor) => (
            <div key={vendor.rank} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              {vendor.image && (
                <div className="mb-4 rounded-xl overflow-hidden shadow-md">
                  <img src={vendor.image} alt={vendor.name} className="w-full h-auto" />
                </div>
              )}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{vendor.emoji}</div>
                <div className="flex-1">
                  <div className="text-base text-primary-600 font-bold mb-1">{vendor.rank}位</div>
                  <div className="font-bold text-lg">{vendor.name}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="text-gray-600 text-xs mb-1">換金率</div>
                  <div className="font-bold text-green-600 text-base">{vendor.rate}</div>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="text-gray-600 text-xs mb-1">振込時間</div>
                  <div className="font-bold text-red-600 text-base">{vendor.speed}</div>
                </div>
                <div className="col-span-2 bg-white p-3 rounded-lg shadow-sm">
                  <div className="text-gray-600 text-xs mb-1">営業時間</div>
                  <div className="font-bold text-base">{vendor.hours}</div>
                </div>
              </div>
              <a href={vendor.link} className="block bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center py-3 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 text-base font-bold shadow-md">
                詳細を見る →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ランキング */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <a href="/ranking/overall" className="block bg-gradient-to-br from-yellow-50 to-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[160px] border border-yellow-100 hover:border-yellow-300 transform hover:-translate-y-1">
          <div className="text-4xl md:text-5xl mb-3 md:mb-4">🏆</div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">総合ランキング</h3>
          <p className="text-gray-700 text-sm md:text-base">おすすめTOP12</p>
        </a>
        <a href="/ranking/speed" className="block bg-gradient-to-br from-blue-50 to-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[160px] border border-blue-100 hover:border-blue-300 transform hover:-translate-y-1">
          <div className="text-4xl md:text-5xl mb-3 md:mb-4">⚡</div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">最短振込ランキング</h3>
          <p className="text-gray-700 text-sm md:text-base">最短5分のスピード</p>
        </a>
        <a href="/ranking/rate" className="block bg-gradient-to-br from-green-50 to-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[160px] border border-green-100 hover:border-green-300 transform hover:-translate-y-1">
          <div className="text-4xl md:text-5xl mb-3 md:mb-4">💰</div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">高換金率ランキング</h3>
          <p className="text-gray-700 text-sm md:text-base">最大65%の換金率</p>
        </a>
        <a href="/ranking/safety" className="block bg-gradient-to-br from-purple-50 to-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[160px] border border-purple-100 hover:border-purple-300 transform hover:-translate-y-1">
          <div className="text-4xl md:text-5xl mb-3 md:mb-4">🔒</div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">安全性重視ランキング</h3>
          <p className="text-gray-700 text-sm md:text-base">古物商許可取得業者</p>
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

      {/* 記事一覧リンク */}
      <section className="text-center p-4 md:p-6 border-2 border-primary-600 rounded-lg">
        <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">すべての記事を見る</h2>
        <p className="text-sm md:text-base text-gray-700 mb-4">
          業者詳細・ランキング・ガイド記事など全35ページを一覧でご確認いただけます
        </p>
        <a href="/articles" className="inline-block bg-primary-600 text-white px-6 md:px-8 py-3 rounded-lg hover:bg-primary-700 transition text-sm md:text-base font-bold">
          記事一覧ページへ →
        </a>
      </section>
    </div>
  )
}
