export default function Home() {
  const vendors = [
    { rank: 1, name: 'シープチケット', emoji: '🐑', rate: '95%', speed: '5分', hours: '24時間', link: '/vendors/sheep-ticket' },
    { rank: 2, name: 'ミリオンチケット', emoji: '💰', rate: '92%', speed: '7分', hours: '24時間', link: '/vendors/million-ticket' },
    { rank: 3, name: 'アーリーチケット', emoji: '🌅', rate: '93%', speed: '5分', hours: '9:00-22:00', link: '/vendors/early-ticket' },
    { rank: 4, name: 'リゼロカイトリ', emoji: '🔄', rate: '91%', speed: '7分', hours: '24時間', link: '/vendors/rizero-kaitori' },
    { rank: 5, name: 'タートルチケット', emoji: '🐢', rate: '90%', speed: '10分', hours: '24時間', link: '/vendors/turtle-ticket' },
    { rank: 6, name: '買取フェアリー', emoji: '🧚', rate: '90%', speed: '5分', hours: '24時間', link: '/vendors/kaitori-fairy' },
    { rank: 7, name: 'チケットヘブン', emoji: '☁️', rate: '90%', speed: '7分', hours: '24時間', link: '/vendors/ticket-heaven' },
    { rank: 8, name: '買取ダッシュ', emoji: '⚡', rate: '89%', speed: '10分', hours: '9:00-21:00', link: '/vendors/kaitori-dash' },
    { rank: 9, name: '買取ワイルド', emoji: '🦁', rate: '89%', speed: '10分', hours: '9:00-22:00', link: '/vendors/kaitori-wild' },
    { rank: 10, name: '金券市場', emoji: '🏪', rate: '89%', speed: '10分', hours: '9:00-22:00', link: '/vendors/kinken-ichiba' },
    { rank: 11, name: 'わくわく買取', emoji: '✨', rate: '88%', speed: '10分', hours: '8:00-22:00', link: '/vendors/wakuwaku-kaitori' },
    { rank: 12, name: 'ピクミン', emoji: '🌱', rate: '88%', speed: '10分', hours: '9:00-22:00', link: '/vendors/pikmin' },
    { rank: 13, name: 'POPEYE', emoji: '💪', rate: '88%', speed: '10分', hours: '9:00-21:00', link: '/vendors/popeye' },
    { rank: 14, name: 'クイック', emoji: '⚡', rate: '88%', speed: '10分', hours: '9:00-22:00', link: '/vendors/quick' },
    { rank: 15, name: '買取キャンプ', emoji: '🏕️', rate: '87%', speed: '10分', hours: '10:00-20:00', link: '/vendors/kaitori-camp' },
    { rank: 16, name: 'ライオン', emoji: '🦁', rate: '87%', speed: '12分', hours: '9:00-21:00', link: '/vendors/lion' },
    { rank: 17, name: 'born', emoji: '🦴', rate: '87%', speed: '12分', hours: '9:00-20:00', link: '/vendors/born' },
    { rank: 18, name: 'パンダ', emoji: '🐼', rate: '87%', speed: '12分', hours: '10:00-20:00', link: '/vendors/panda' },
    { rank: 19, name: 'リッチ', emoji: '💎', rate: '87%', speed: '12分', hours: '9:00-21:00', link: '/vendors/rich' },
    { rank: 20, name: 'チョッパー', emoji: '🚁', rate: '86%', speed: '15分', hours: '9:00-21:00', link: '/vendors/chopper' },
    { rank: 21, name: 'パプリカ', emoji: '🌶️', rate: '86%', speed: '15分', hours: '10:00-20:00', link: '/vendors/paprika' },
    { rank: 22, name: 'Beetle', emoji: '🪲', rate: '86%', speed: '15分', hours: '10:00-21:00', link: '/vendors/beetle' },
    { rank: 23, name: '先払いセブン', emoji: '7️⃣', rate: '86%', speed: '12分', hours: '10:00-22:00', link: '/vendors/sakibarai-seven' },
    { rank: 24, name: 'チケットセンター', emoji: '🎫', rate: '85%', speed: '15分', hours: '9:00-21:00', link: '/vendors/ticket-center' },
    { rank: 25, name: 'MAKE', emoji: '🎨', rate: '85%', speed: '15分', hours: '10:00-19:00', link: '/vendors/make' },
    { rank: 26, name: 'ROCKY', emoji: '🥊', rate: '85%', speed: '15分', hours: '10:00-21:00', link: '/vendors/rocky' },
    { rank: 27, name: 'バックアップ', emoji: '💾', rate: '85%', speed: '15分', hours: '9:00-21:00', link: '/vendors/backup' },
    { rank: 28, name: '買取たぬ吉', emoji: '🦝', rate: '84%', speed: '15分', hours: '10:00-20:00', link: '/vendors/kaitori-tanukichi' },
    { rank: 29, name: 'MOOMIN', emoji: '🐻', rate: '83%', speed: '20分', hours: '10:00-19:00', link: '/vendors/moomin' },
    { rank: 30, name: 'リセチケット', emoji: '♻️', rate: '82%', speed: '20分', hours: '9:00-21:00', link: '/vendors/reseticke' },
  ]

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Hero Section */}
      <section className="text-center py-6 md:py-8 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg px-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">先払い買取業者 徹底比較【2026年最新版】</h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-4 md:mb-6">
          全30業者を換金率・振込時間・安全性で徹底比較
        </p>
      </section>

      {/* 業者一覧テーブル */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">先払い買取業者 全30社一覧</h2>
        
        {/* PC表示用テーブル */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-center w-16">順位</th>
                <th className="px-4 py-3 text-left">業者名</th>
                <th className="px-4 py-3 text-center">換金率</th>
                <th className="px-4 py-3 text-center">振込時間</th>
                <th className="px-4 py-3 text-center">営業時間</th>
                <th className="px-4 py-3 text-center">詳細</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {vendors.map((vendor) => (
                <tr key={vendor.rank} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-center font-bold text-primary-600">{vendor.rank}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{vendor.emoji}</span>
                      <span className="font-bold">{vendor.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className="font-bold text-green-600 text-base">最大{vendor.rate}</span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className="font-bold text-red-600 text-base">最短{vendor.speed}</span>
                  </td>
                  <td className="px-4 py-4 text-center text-gray-700">{vendor.hours}</td>
                  <td className="px-4 py-4 text-center">
                    <a href={vendor.link} className="inline-block bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition text-sm">
                      詳細 →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* スマホ表示用カード */}
        <div className="md:hidden space-y-4">
          {vendors.map((vendor) => (
            <div key={vendor.rank} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  {vendor.rank}
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-2xl">{vendor.emoji}</span>
                  <h3 className="font-bold text-base">{vendor.name}</h3>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <div className="text-xs text-gray-600 mb-1">換金率</div>
                  <div className="font-bold text-green-600 text-sm">最大{vendor.rate}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-1">振込時間</div>
                  <div className="font-bold text-red-600 text-sm">最短{vendor.speed}</div>
                </div>
                <div className="col-span-2">
                  <div className="text-xs text-gray-600 mb-1">営業時間</div>
                  <div className="text-sm text-gray-700">{vendor.hours}</div>
                </div>
              </div>
              <a href={vendor.link} className="block bg-primary-600 text-white text-center px-4 py-3 rounded hover:bg-primary-700 transition text-sm font-bold">
                詳細を見る →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 特徴 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">スマートキャッシュの特徴</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-base md:text-lg font-bold mb-2 text-blue-700">📊 全30社徹底比較</h3>
            <p className="text-sm text-gray-700">換金率・振込時間・営業時間を一覧で比較できます</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-base md:text-lg font-bold mb-2 text-green-700">🔒 安全性重視</h3>
            <p className="text-sm text-gray-700">古物商許可番号を確認済みの安全な業者のみ掲載</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-base md:text-lg font-bold mb-2 text-yellow-700">📱 2026年最新版</h3>
            <p className="text-sm text-gray-700">常に最新の情報を更新しています</p>
          </div>
        </div>
      </section>

      {/* 人気のページ */}
      <section>
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">人気のページ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <a href="/ranking/overall" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
            <h3 className="font-bold text-base md:text-lg mb-2">📊 総合ランキング</h3>
            <p className="text-gray-600 text-xs md:text-sm">おすすめの先払い買取業者TOP20</p>
          </a>
          <a href="/ranking/rate" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
            <h3 className="font-bold text-base md:text-lg mb-2">💰 高換金率ランキング</h3>
            <p className="text-gray-600 text-xs md:text-sm">換金率が高い業者TOP10</p>
          </a>
          <a href="/ranking/speed" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
            <h3 className="font-bold text-base md:text-lg mb-2">⚡ 最短振込ランキング</h3>
            <p className="text-gray-600 text-xs md:text-sm">最短5分で振込完了する業者TOP10</p>
          </a>
          <a href="/guide/about" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
            <h3 className="font-bold text-base md:text-lg mb-2">📖 先払い買取とは</h3>
            <p className="text-gray-600 text-xs md:text-sm">仕組み・流れをわかりやすく解説</p>
          </a>
        </div>
      </section>
    </div>
  )
}
