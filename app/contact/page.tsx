export default function Contact() {
  return (
    <div className="space-y-8">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 md:p-8 rounded-lg">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">お問い合わせ</h1>
        <p className="text-sm md:text-base text-gray-700">
          マネーガイドジャーナルに関するご質問・ご意見・ご要望などございましたら、お気軽にお問い合わせください。
        </p>
      </section>

      {/* 注意事項 */}
      <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
        <h2 className="font-bold text-lg mb-3 text-yellow-700">📌 お問い合わせ前にご確認ください</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-yellow-600">•</span>
            <span>よくある質問（FAQ）で解決できる場合があります。まずは<a href="/faq" className="text-primary-600 hover:underline">FAQページ</a>をご確認ください。</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-600">•</span>
            <span>業者への直接のお問い合わせは、各業者の公式サイトからお願いいたします。</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-600">•</span>
            <span>トラブル・詐欺被害については、消費生活センター（188）または警察にご相談ください。</span>
          </li>
        </ul>
      </section>

      {/* お問い合わせ方法 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-6">お問い合わせ方法</h2>
        
        <div className="space-y-4 md:space-y-6">
          {/* メール */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-4 flex items-center gap-2">
              <span>📧</span>
              <span>メールでのお問い合わせ</span>
            </h3>
            <p className="text-gray-700 mb-4">
              以下のメールアドレス宛にお問い合わせください。
            </p>
            <div className="bg-white p-4 rounded">
              <p className="font-bold text-lg text-primary-600">
                contact@smartcash-example.com
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-2">
                ※ 24時間以内に返信いたします（土日祝日を除く）
              </p>
            </div>
            
            <div className="mt-4 bg-blue-50 p-3 md:p-4 rounded">
              <h4 className="text-base md:text-lg font-bold mb-2">メールに記載いただきたい内容</h4>
              <ul className="space-y-1 text-xs md:text-sm text-gray-700">
                <li>• お名前（ハンドルネーム可）</li>
                <li>• メールアドレス</li>
                <li>• お問い合わせ内容</li>
                <li>• 該当ページのURL（あれば）</li>
              </ul>
            </div>
          </div>

          {/* SNS */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-4 flex items-center gap-2">
              <span>📱</span>
              <span>SNSでのお問い合わせ</span>
            </h3>
            <p className="text-gray-700 mb-4">
              Twitterでもお問い合わせを受け付けています。
            </p>
            <div className="bg-white p-4 rounded">
              <p className="font-bold text-lg">
                <a href="https://twitter.com/smartcash_info" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                  @smartcash_info
                </a>
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-2">
                ※ DMまたはリプライでお問い合わせください
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* よくあるお問い合わせ */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">よくあるお問い合わせ</h2>
        <div className="space-y-3 md:space-y-4">
          <div className="border-l-4 border-primary-400 pl-3 md:pl-4">
            <h3 className="text-base md:text-lg font-bold mb-2">Q. サイトに掲載されている業者の情報は正確ですか？</h3>
            <p className="text-sm text-gray-700">
              A. 2026年3月時点の最新情報を掲載していますが、業者の情報は変更される可能性があります。最新情報は各業者の公式サイトでご確認ください。
            </p>
          </div>
          <div className="border-l-4 border-primary-400 pl-3 md:pl-4">
            <h3 className="text-base md:text-lg font-bold mb-2">Q. サイトに掲載してほしい業者があります</h3>
            <p className="text-sm text-gray-700">
              A. お問い合わせフォームまたはメールで業者名をお知らせください。古物商許可取得済みの業者であれば掲載を検討いたします。
            </p>
          </div>
          <div className="border-l-4 border-primary-400 pl-3 md:pl-4">
            <h3 className="text-base md:text-lg font-bold mb-2">Q. サイトの情報に誤りがあります</h3>
            <p className="text-sm text-gray-700">
              A. ご指摘いただきありがとうございます。お問い合わせフォームまたはメールで詳細をお知らせください。確認の上、速やかに修正いたします。
            </p>
          </div>
        </div>
      </section>

      {/* 免責事項 */}
      <section className="bg-gray-50 rounded-lg p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">免責事項</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <p>
            当サイトは情報提供を目的としたサイトです。掲載情報の正確性には細心の注意を払っていますが、情報の変更や誤りがある可能性があります。
          </p>
          <p>
            当サイトの情報を利用して生じたトラブルや損害について、当サイトは一切の責任を負いかねます。ご利用は自己責任でお願いいたします。
          </p>
          <p>
            業者のご利用にあたっては、必ず各業者の公式サイトで最新情報をご確認ください。
          </p>
        </div>
      </section>

      {/* 内部リンク */}
      <section className="grid grid-cols-2 gap-2 md:gap-4">
        <a href="/faq" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">よくある質問（FAQ）→</h3>
          <p className="text-gray-600 text-xs md:text-sm">お問い合わせ前にご確認ください</p>
        </a>
        <a href="/ranking/overall" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">総合ランキング →</h3>
          <p className="text-gray-600 text-xs md:text-sm">おすすめの先払い買取業者TOP10</p>
        </a>
        <a href="/safety/check" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">悪徳業者の見分け方 →</h3>
          <p className="text-gray-600 text-xs md:text-sm">安全に利用するためのチェックリスト</p>
        </a>
        <a href="/guide/about" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">先払い買取とは →</h3>
          <p className="text-gray-600 text-xs md:text-sm">仕組み・流れをわかりやすく解説</p>
        </a>
      </section>
    </div>
  )
}
