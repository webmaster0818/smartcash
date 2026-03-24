export default function RateRanking() {
  const vendors = [
    {
      rank: 1,
      name: 'シープチケット',
      rate: '最大95%',
      minRate: '60%〜',
      speed: '最短5分',
      features: ['業界最高水準の換金率', '商品券の種類が豊富', '初回利用者も高換金率'],
      link: '/vendors/sheep-ticket'
    },
    {
      rank: 2,
      name: 'タートルチケット',
      rate: '最大90%',
      minRate: '65%〜',
      speed: '最短10分',
      features: ['安定した高換金率', '商品券・ギフトカード全般対応', 'リピーター優遇あり'],
      link: '/vendors/turtle-ticket'
    },
    {
      rank: 3,
      name: 'リセチケット',
      rate: '最大88%',
      minRate: '62%〜',
      speed: '最短10分',
      features: ['初回利用者優遇', 'Amazonギフト券高換金率', 'まとめて売却で換金率UP'],
      link: '/vendors/reseticke'
    },
    {
      rank: 4,
      name: 'チケットセンター',
      rate: '最大85%',
      minRate: '60%〜',
      speed: '最短15分',
      features: ['安定した換金率', 'JCBギフトカード高換金率', '5年以上の実績'],
      link: '/vendors/ticket-center'
    },
    {
      rank: 5,
      name: 'MOOMIN',
      rate: '最大82%',
      minRate: '58%〜',
      speed: '最短20分',
      features: ['商品券種類問わず', 'VJAギフトカード対応', '女性スタッフ対応'],
      link: '/vendors/moomin'
    },
  ]

  return (
    <div className="space-y-8">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 md:p-8 rounded-lg">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">高換金率ランキング【2026年最新版】</h1>
        <p className="text-sm md:text-base text-gray-700">
          少しでも高く換金したい方向けに、換金率90%以上の先払い買取業者をランキング形式でご紹介します。
        </p>
      </section>

      {/* ポイント */}
      <section className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
        <h2 className="font-bold text-lg mb-2">💰 高換金率のポイント</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-green-600">✓</span>
            <span><strong>商品券の種類</strong>によって換金率が変わります（JCBギフトカード、Amazonギフト券など）</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600">✓</span>
            <span><strong>初回利用者優遇</strong>がある業者を選ぶと高換金率で利用できます</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600">✓</span>
            <span><strong>複数業者を比較</strong>して最も高い換金率の業者を選びましょう</span>
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
                <th className="px-4 py-3">最大換金率</th>
                <th className="px-4 py-3">最低換金率</th>
                <th className="px-4 py-3">振込時間</th>
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
                  <td className="px-4 py-3 text-center text-green-600 font-bold text-lg">{vendor.rate}</td>
                  <td className="px-4 py-3 text-center text-gray-600">{vendor.minRate}</td>
                  <td className="px-4 py-3 text-center">{vendor.speed}</td>
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
                    <span className="text-gray-600 text-xs md:text-sm">最大換金率</span>
                    <div className="text-lg font-bold text-green-600">{vendor.rate}</div>
                  </div>
                  <div>
                    <span className="text-gray-600 text-xs md:text-sm">最低換金率</span>
                    <div className="text-lg font-bold text-gray-600">{vendor.minRate}</div>
                  </div>
                  <div>
                    <span className="text-gray-600 text-xs md:text-sm">振込時間</span>
                    <div className="text-lg font-bold">{vendor.speed}</div>
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

      {/* 換金率の相場 */}
      <section className="bg-gray-50 rounded-lg p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">先払い買取の換金率相場</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm bg-white rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">商品券の種類</th>
                <th className="px-4 py-3 text-center">換金率相場</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-3">JCBギフトカード</td>
                <td className="px-4 py-3 text-center font-bold text-green-600">85〜95%</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Amazonギフト券</td>
                <td className="px-4 py-3 text-center font-bold text-green-600">80〜90%</td>
              </tr>
              <tr>
                <td className="px-4 py-3">VJAギフトカード</td>
                <td className="px-4 py-3 text-center font-bold text-green-600">80〜88%</td>
              </tr>
              <tr>
                <td className="px-4 py-3">UCギフトカード</td>
                <td className="px-4 py-3 text-center font-bold text-green-600">78〜85%</td>
              </tr>
              <tr>
                <td className="px-4 py-3">図書カード</td>
                <td className="px-4 py-3 text-center font-bold text-green-600">75〜82%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-xs md:text-sm mt-4">
          ※ 換金率は時期や在庫状況により変動します。詳細は各業者にお問い合わせください。
        </p>
      </section>

      {/* よくある質問 */}
      <section className="bg-gray-50 rounded-lg p-4 md:p-6 mt-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">よくある質問</h2>
        <div className="space-y-3 md:space-y-4">
          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">Q. なぜ業者によって換金率が違うのですか？</h3>
            <p className="text-sm md:text-base text-gray-700">
              A. 業者の仕入れルート、在庫状況、運営コストなどによって換金率が変わります。複数業者を比較して最も高い換金率の業者を選びましょう。
            </p>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">Q. 換金率95%は本当ですか？</h3>
            <p className="text-sm md:text-base text-gray-700">
              A. JCBギフトカードなどの人気商品券であれば、実際に95%の換金率で買取してもらえます。ただし、商品券の種類や金額によって換金率は変動します。
            </p>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">Q. 初回利用者でも高換金率で利用できますか？</h3>
            <p className="text-sm md:text-base text-gray-700">
              A. シープチケット、タートルチケット、リセチケットなどは初回利用者でも高換金率で利用できます。
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
        <a href="/ranking/speed" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">最短振込ランキング →</h3>
          <p className="text-gray-600 text-xs md:text-sm">最短5分で振込完了する業者</p>
        </a>
        <a href="/item/jcb-gift" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">JCBギフトカード買取 →</h3>
          <p className="text-gray-600 text-xs md:text-sm">JCBギフトカードの買取相場と業者</p>
        </a>
        <a href="/guide/about" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">先払い買取とは →</h3>
          <p className="text-gray-600 text-xs md:text-sm">仕組み・流れをわかりやすく解説</p>
        </a>
      </section>
    </div>
  )
}
