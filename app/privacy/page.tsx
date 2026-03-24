export default function Privacy() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 md:p-8 rounded-lg">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">プライバシーポリシー</h1>
        <p className="text-sm md:text-base text-gray-700">SmartCash（当サイト）の個人情報保護方針</p>
      </section>

      {/* 個人情報の取り扱い */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">第1条（個人情報の取り扱い）</h2>
        <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed">
          SmartCash（以下「当サイト」）は、ユーザーの個人情報保護を重要な責務と認識し、適切な管理・保護に努めます。
        </p>
        <div className="bg-blue-50 p-4 rounded">
          <h3 className="text-base md:text-lg font-bold mb-2">当サイトが取得する情報</h3>
          <ul className="space-y-1 text-xs md:text-sm text-gray-700 leading-relaxed">
            <li>• お問い合わせフォームから送信された情報（氏名、メールアドレス、お問い合わせ内容）</li>
            <li>• アクセス解析ツールによる自動取得情報（IPアドレス、閲覧ページ、滞在時間等）</li>
            <li>• Cookieによる情報（後述）</li>
          </ul>
        </div>
      </section>

      {/* 個人情報の利用目的 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">第2条（個人情報の利用目的）</h2>
        <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed">当サイトは、取得した個人情報を以下の目的で利用します。</p>
        <ul className="space-y-2 text-sm md:text-base text-gray-700">
          <li>• お問い合わせへの対応</li>
          <li>• サービス改善のためのアクセス解析</li>
          <li>• 当サイトの運営・管理</li>
          <li>• 法令に基づく対応</li>
        </ul>
        <p className="text-sm md:text-base text-gray-700 mt-3 md:mt-4">
          上記以外の目的で個人情報を利用する場合は、事前にユーザーの同意を得るものとします。
        </p>
      </section>

      {/* Cookieの使用 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">第3条（Cookieの使用）</h2>
        <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed">
          当サイトは、ユーザーの利便性向上およびサイト改善のため、Cookieを使用します。
        </p>
        <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">Cookieとは</h3>
            <p>
              Cookieとは、ウェブサイトがユーザーのブラウザに保存する小さなテキストファイルです。再訪問時にユーザーを識別し、利便性を向上させます。
            </p>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">Cookieの無効化</h3>
            <p>
              ユーザーはブラウザの設定によりCookieを無効化できます。ただし、一部機能が利用できなくなる場合があります。
            </p>
          </div>
        </div>
      </section>

      {/* アクセス解析ツール */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">第4条（アクセス解析ツール）</h2>
        <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed">
          当サイトは、Google Analyticsなどのアクセス解析ツールを使用しています。これらのツールはCookieを使用してユーザーの行動データを収集します。
        </p>
        <div className="bg-blue-50 p-4 rounded">
          <h3 className="text-base md:text-lg font-bold mb-2">Google Analyticsについて</h3>
          <ul className="space-y-1 text-xs md:text-sm text-gray-700 leading-relaxed">
            <li>• 収集されるデータは匿名化されており、個人を特定するものではありません</li>
            <li>• データはGoogleのプライバシーポリシーに基づいて管理されます</li>
            <li>• オプトアウトを希望する場合は、Googleのオプトアウトアドオンをご利用ください</li>
          </ul>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Google Analyticsの詳細：
          <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline ml-1">
            Googleのプライバシーポリシー
          </a>
        </p>
      </section>

      {/* 第三者提供 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">第5条（第三者提供）</h2>
        <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed">
          当サイトは、以下の場合を除き、ユーザーの個人情報を第三者に提供しません。
        </p>
        <ul className="space-y-2 text-sm md:text-base text-gray-700">
          <li>• ユーザーの同意がある場合</li>
          <li>• 法令に基づく場合</li>
          <li>• 人の生命、身体または財産の保護のために必要がある場合</li>
          <li>• 公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
        </ul>
      </section>

      {/* 個人情報の開示・訂正・削除 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">第6条（個人情報の開示・訂正・削除）</h2>
        <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed">
          ユーザーは、当サイトが保有する自身の個人情報について、開示・訂正・削除を求めることができます。
        </p>
        <p className="text-sm md:text-base text-gray-700">
          ご希望の場合は、お問い合わせページよりご連絡ください。合理的な期間内に対応いたします。
        </p>
      </section>

      {/* 個人情報の安全管理 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">第7条（個人情報の安全管理）</h2>
        <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed">
          当サイトは、個人情報の漏えい、滅失、毀損を防止するため、適切なセキュリティ対策を講じます。
        </p>
        <ul className="space-y-2 text-sm md:text-base text-gray-700">
          <li>• SSL/TLSによる通信の暗号化</li>
          <li>• アクセス権限の厳格な管理</li>
          <li>• 定期的なセキュリティ監査</li>
        </ul>
      </section>

      {/* プライバシーポリシーの変更 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">第8条（プライバシーポリシーの変更）</h2>
        <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed">
          当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載された時点で効力を生じるものとします。
        </p>
        <p className="text-sm md:text-base text-gray-700">
          ユーザーは、定期的に本プライバシーポリシーを確認するものとします。
        </p>
      </section>

      {/* お問い合わせ */}
      <section className="bg-blue-50 p-4 md:p-6 rounded-lg">
        <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">お問い合わせ</h2>
        <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed">
          本プライバシーポリシーに関するご質問・ご不明な点、または個人情報の取り扱いに関するご相談がございましたら、お問い合わせページよりご連絡ください。
        </p>
        <a href="/contact" className="inline-block bg-primary-600 text-white px-4 md:px-6 py-3 md:py-2 text-sm md:text-base min-h-[44px] flex items-center justify-center rounded-lg hover:bg-primary-700 transition">
          お問い合わせ →
        </a>
      </section>

      {/* 制定日 */}
      <section className="text-right text-xs md:text-sm text-gray-600">
        <p>制定日：2026年3月23日</p>
      </section>
    </div>
  )
}
