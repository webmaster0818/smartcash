export default function Articles() {
  const categories = [
    {
      title: '先払い買取業者',
      icon: '🏢',
      items: [
        { name: 'チケットセンター', link: '/vendors/ticket-center' },
        { name: 'タートルチケット', link: '/vendors/turtle-ticket' },
        { name: 'リセチケット', link: '/vendors/reseticke' },
        { name: 'シープチケット', link: '/vendors/sheep-ticket' },
        { name: 'バイチケ', link: '/vendors/baichike' },
        { name: 'チケリア', link: '/vendors/tickelia' },
        { name: 'プラメリ', link: '/vendors/prameri' },
        { name: 'ユニコーン', link: '/vendors/unicorn' },
        { name: '買取キング', link: '/vendors/kaitori-king' },
        { name: 'フォレスト', link: '/vendors/forest' },
        { name: 'ピクミン', link: '/vendors/pikmin' },
        { name: 'しいたけ', link: '/vendors/shiitake' },
      ],
    },
    {
      title: 'ランキング',
      icon: '🏆',
      items: [
        { name: '総合ランキングTOP12', link: '/ranking/overall' },
        { name: '最短振込ランキングTOP10', link: '/ranking/speed' },
        { name: '高換金率ランキングTOP10', link: '/ranking/rate' },
        { name: '安全性重視ランキングTOP10', link: '/ranking/safety' },
      ],
    },
    {
      title: '商品別買取ガイド',
      icon: '🎁',
      items: [
        { name: 'Amazonギフト券買取', link: '/item/amazon-gift' },
        { name: 'JCBギフトカード買取', link: '/item/jcb-gift' },
        { name: 'VJAギフトカード買取', link: '/item/vja-gift' },
        { name: 'UCギフトカード買取', link: '/item/uc-gift' },
        { name: 'QUOカード買取', link: '/item/quo-card' },
        { name: '図書カード買取', link: '/item/tosho-card' },
        { name: '全国百貨店共通商品券買取', link: '/item/hyakkaten-gift' },
      ],
    },
    {
      title: '基礎知識',
      icon: '📚',
      items: [
        { name: '先払い買取とは？', link: '/guide/about' },
        { name: 'メリット・デメリット', link: '/guide/merit' },
        { name: '業者の選び方', link: '/guide/comparison' },
      ],
    },
    {
      title: '安全ガイド',
      icon: '🔒',
      items: [
        { name: '悪徳業者の見分け方', link: '/safety/check' },
        { name: '法律・規制について', link: '/safety/legal' },
      ],
    },
    {
      title: 'その他',
      icon: '📄',
      items: [
        { name: 'よくある質問（FAQ）', link: '/faq' },
        { name: 'お問い合わせ', link: '/contact' },
        { name: '利用規約', link: '/terms' },
        { name: 'プライバシーポリシー', link: '/privacy' },
      ],
    },
  ]

  return (
    <div className="space-y-8 md:space-y-12">
      {/* ヘッダー */}
      <section className="text-center py-8 md:py-12 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg px-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">記事一覧</h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-700">
          マネーガイドジャーナルの全コンテンツを一覧でご確認いただけます
        </p>
      </section>

      {/* カテゴリー別記事一覧 */}
      <section className="space-y-8 md:space-y-12">
        {categories.map((category) => (
          <div key={category.title} className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="text-3xl md:text-4xl">{category.icon}</div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">{category.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {category.items.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  className="block p-3 md:p-4 border rounded-lg hover:border-primary-600 hover:bg-primary-50 transition min-h-[60px] flex items-center"
                >
                  <div className="text-sm md:text-base font-medium">
                    {item.name} →
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTAセクション */}
      <section className="bg-primary-50 p-4 md:p-6 lg:p-8 rounded-lg text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">初めての方へ</h2>
        <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
          先払い買取が初めての方は、まず基礎知識からご覧ください
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <a href="/guide/about" className="inline-block bg-primary-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-primary-700 transition text-sm md:text-base font-bold min-h-[48px] flex items-center justify-center">
            先払い買取とは？
          </a>
          <a href="/ranking/overall" className="inline-block bg-white text-primary-600 border-2 border-primary-600 px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-primary-50 transition text-sm md:text-base font-bold min-h-[48px] flex items-center justify-center">
            おすすめランキング
          </a>
        </div>
      </section>
    </div>
  )
}
