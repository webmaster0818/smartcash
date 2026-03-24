export default function Terms() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 md:p-8 rounded-lg">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">利用規約</h1>
        <p className="text-sm md:text-base text-gray-700">SmartCash（当サイト）のご利用にあたって</p>
      </section>

      {/* サイトの目的 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">第1条（サイトの目的）</h2>
        <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed">
          SmartCash（以下「当サイト」）は、先払い買取業者の情報を提供する比較・情報サイトです。ユーザーが適切な業者を選択できるよう、中立的な立場で情報を提供します。
        </p>
        <p className="text-sm md:text-base text-gray-700">
          当サイトは情報提供のみを目的としており、先払い買取サービスそのものを提供するものではありません。
        </p>
      </section>

      {/* 免責事項 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">第2条（免責事項）</h2>
        <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">1. 情報の正確性について</h3>
            <p>
              当サイトに掲載されている情報は、作成時点での情報に基づいており、その正確性・完全性・最新性を保証するものではありません。掲載内容は予告なく変更される場合があります。
            </p>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">2. 損害の免責</h3>
            <p>
              当サイトの情報を利用したことにより生じたいかなる損害についても、当サイトは一切の責任を負いません。ユーザーの自己責任においてご利用ください。
            </p>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">3. 外部サイトについて</h3>
            <p>
              当サイトから外部サイトへのリンクは、ユーザーの利便性のために提供しています。リンク先サイトの内容や取引について、当サイトは一切の責任を負いません。
            </p>
          </div>
        </div>
      </section>

      {/* 著作権・知的財産権 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">第3条（著作権・知的財産権）</h2>
        <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed">
          当サイトに掲載されている全てのコンテンツ（文章、画像、デザイン等）の著作権・知的財産権は、当サイト運営者または正当な権利者に帰属します。
        </p>
        <p className="text-sm md:text-base text-gray-700">
          無断での転載、複製、二次利用を禁じます。
        </p>
      </section>

      {/* 禁止事項 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">第4条（禁止事項）</h2>
        <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed">当サイトの利用にあたり、以下の行為を禁止します。</p>
        <ul className="space-y-2 text-sm md:text-base text-gray-700">
          <li>• 法令または公序良俗に違反する行為</li>
          <li>• 当サイトまたは第三者の権利を侵害する行為</li>
          <li>• 虚偽の情報を送信する行為</li>
          <li>• サーバーやネットワークに過度な負荷をかける行為</li>
          <li>• 不正アクセス、クラッキング等の行為</li>
          <li>• その他、当サイトの運営を妨げる行為</li>
        </ul>
      </section>

      {/* リンクに関する注意事項 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">第5条（リンクに関する注意事項）</h2>
        <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed">
          当サイトは、掲載されている業者の公式サイトや関連サイトへのリンクを含む場合があります。リンク先のサイトで提供されるサービスや情報については、各サイトの利用規約・プライバシーポリシーに従ってください。
        </p>
        <p className="text-sm md:text-base text-gray-700">
          当サイトはリンク先のサイトの内容について一切の責任を負いません。
        </p>
      </section>

      {/* 利用規約の変更 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">第6条（利用規約の変更）</h2>
        <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed">
          当サイトは、必要に応じて本利用規約を変更することがあります。変更後の利用規約は、当サイトに掲載された時点で効力を生じるものとします。
        </p>
        <p className="text-sm md:text-base text-gray-700">
          ユーザーは、定期的に本利用規約を確認するものとします。
        </p>
      </section>

      {/* 準拠法・管轄裁判所 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">第7条（準拠法・管轄裁判所）</h2>
        <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed">
          本利用規約の解釈にあたっては、日本法を準拠法とします。
        </p>
        <p className="text-sm md:text-base text-gray-700">
          当サイトに関連して紛争が生じた場合、当サイト運営者の所在地を管轄する裁判所を専属的合意管轄裁判所とします。
        </p>
      </section>

      {/* お問い合わせ */}
      <section className="bg-blue-50 p-4 md:p-6 rounded-lg">
        <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">お問い合わせ</h2>
        <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed">
          本利用規約に関するご質問・ご不明な点がございましたら、お問い合わせページよりご連絡ください。
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
