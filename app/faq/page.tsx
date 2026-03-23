export default function FAQ() {
  const faqs = [
    {
      category: '基本的な質問',
      questions: [
        {
          q: '先払い買取とは何ですか？',
          a: '商品券・ギフトカードを売却し、商品を送る前に代金を受け取れるサービスです。通常の買取とは異なり、振込を先に受け取れるため、今すぐ現金が必要な方に人気です。'
        },
        {
          q: '本当に商品を送る前に振り込まれますか？',
          a: 'はい。契約締結後、最短5分で指定口座に振り込まれます。その後、7〜30日以内に商品を郵送すればOKです。'
        },
        {
          q: '審査はありますか？',
          a: 'ありません。信用情報の照会もないため、金融ブラックの方でも利用できます。'
        },
      ]
    },
    {
      category: '利用方法',
      questions: [
        {
          q: '利用の流れを教えてください',
          a: '①申込・査定 → ②契約締結 → ③振込（先払い） → ④商品発送 → ⑤取引完了 の5ステップです。最短5分で振込完了します。'
        },
        {
          q: '必要なものは何ですか？',
          a: '商品券・ギフトカード、本人確認書類（運転免許証・マイナンバーカードなど）、振込先口座が必要です。'
        },
        {
          q: 'どの商品券が使えますか？',
          a: 'JCBギフトカード、Amazonギフト券、VJAギフトカード、UCギフトカード、図書カード、QUOカードなど、多くの商品券が対応しています。'
        },
        {
          q: '申し込みから振込までどのくらいかかりますか？',
          a: '最短5分です。シープチケット、タートルチケットなどの業者は24時間営業で、深夜でも即時振込可能です。'
        },
      ]
    },
    {
      category: '換金率・手数料',
      questions: [
        {
          q: '換金率はどのくらいですか？',
          a: '業者や商品券の種類により異なりますが、60〜95%が相場です。シープチケット（最大95%）、タートルチケット（最大90%）などの高換金率業者がおすすめです。'
        },
        {
          q: '手数料はかかりますか？',
          a: '基本的に手数料はかかりませんが、郵送費用（レターパック代370〜520円）は自己負担です。'
        },
        {
          q: '換金率が業者によって違うのはなぜですか？',
          a: '業者の仕入れルート、在庫状況、運営コストなどによって換金率が変わります。複数業者を比較して最も高い換金率の業者を選びましょう。'
        },
      ]
    },
    {
      category: '安全性',
      questions: [
        {
          q: '先払い買取は違法ではありませんか？',
          a: '買取方式の先払い買取は合法です。古物営業法に基づく正規の買取取引です。ただし、キャンセル前提の業者は違法の可能性が高いため注意してください。'
        },
        {
          q: '悪徳業者の見分け方を教えてください',
          a: '古物商許可番号の記載がない業者、運営会社情報が不明瞭な業者、キャンセル前提の取引を提案する業者は危険です。当サイト紹介の業者は全て古物商許可取得済みです。'
        },
        {
          q: '個人情報は安全ですか？',
          a: 'SSL対応サイトで個人情報が暗号化されているか確認しましょう。当サイト紹介の業者は全てSSL対応です。'
        },
      ]
    },
    {
      category: '商品発送',
      questions: [
        {
          q: '商品はいつまでに送ればいいですか？',
          a: '業者により異なりますが、7〜30日以内が一般的です。期限内に送らないと延滞金が発生する可能性があります。'
        },
        {
          q: '郵送費用は誰が負担しますか？',
          a: '基本的に自己負担です。レターパックライト（370円）またはレターパックプラス（520円）を利用します。'
        },
        {
          q: '商品を送らなかったらどうなりますか？',
          a: '期限内に商品を発送しないと、延滞金が発生したり、詐欺罪で訴えられる可能性があります。必ず期限内に発送してください。'
        },
      ]
    },
    {
      category: 'キャンセル・トラブル',
      questions: [
        {
          q: '契約後にキャンセルできますか？',
          a: '原則できません。契約締結後のキャンセルは高額なキャンセル料（買取金額の30〜40%）を請求されることがあります。契約前に内容をよく確認しましょう。'
        },
        {
          q: 'トラブルに遭った場合はどうすればいいですか？',
          a: 'まずは証拠（メール、LINE、振込明細など）を保存し、業者に連絡してください。解決しない場合は、消費生活センター（188）または警察に相談しましょう。'
        },
        {
          q: '振込されない場合はどうすればいいですか？',
          a: 'すぐに業者に連絡し、証拠を保存してください。連絡がつかない場合は、消費生活センター（188）または警察に相談しましょう。'
        },
      ]
    },
    {
      category: 'その他',
      questions: [
        {
          q: '家族にバレずに利用できますか？',
          a: 'はい。秘密厳守で対応してくれるため、家族にバレる心配はありません。郵送物も追跡番号付きで自分で管理できます。'
        },
        {
          q: '土日祝日も利用できますか？',
          a: 'はい。24時間営業の業者（シープチケット、タートルチケット）なら土日祝日でも対応可能です。モアタイム対応銀行なら即時振込されます。'
        },
        {
          q: '未成年でも利用できますか？',
          a: 'いいえ。先払い買取は20歳以上（成人）が対象です。未成年の方は利用できません。'
        },
        {
          q: '何回でも利用できますか？',
          a: 'はい。リピーター優遇制度がある業者もあります。ただし、同時に複数の業者を利用するのは避けましょう。'
        },
      ]
    },
  ]

  return (
    <div className="space-y-8">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">よくある質問（FAQ）【2026年最新版】</h1>
        <p className="text-gray-700">
          先払い買取に関するよくある質問とその回答をまとめました。疑問や不安がある方はこちらをご覧ください。
        </p>
      </section>

      {/* 目次 */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">目次</h2>
        <div className="grid md:grid-cols-2 gap-2">
          {faqs.map((category, index) => (
            <a key={index} href={`#category-${index}`} className="text-primary-600 hover:underline">
              {index + 1}. {category.category}
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      {faqs.map((category, catIndex) => (
        <section key={catIndex} id={`category-${catIndex}`} className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
          <div className="space-y-6">
            {category.questions.map((item, qIndex) => (
              <div key={qIndex} className="border-l-4 border-primary-400 pl-4">
                <h3 className="font-bold text-lg mb-2 text-primary-700">Q. {item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* それでも解決しない場合 */}
      <section className="bg-yellow-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">それでも解決しない場合</h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold mb-2">1. 業者に直接問い合わせ</h3>
            <p className="text-sm text-gray-700">
              公式サイトのお問い合わせフォーム、電話、LINEなどで直接業者に質問してください。
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">2. 消費生活センターに相談</h3>
            <p className="text-sm text-gray-700">
              <strong>連絡先:</strong> 188（消費者ホットライン）<br />
              <strong>相談時間:</strong> 平日9:00〜17:00
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">3. 警察に相談</h3>
            <p className="text-sm text-gray-700">
              詐欺の疑いがある場合は、最寄りの警察署に相談してください。
            </p>
          </div>
        </div>
      </section>

      {/* 内部リンク */}
      <section className="grid md:grid-cols-2 gap-4">
        <a href="/ranking/overall" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">おすすめ業者ランキング →</h3>
          <p className="text-gray-600 text-sm">安全に利用できる業者TOP10</p>
        </a>
        <a href="/guide/about" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">先払い買取とは →</h3>
          <p className="text-gray-600 text-sm">仕組み・流れをわかりやすく解説</p>
        </a>
        <a href="/safety/check" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">悪徳業者の見分け方 →</h3>
          <p className="text-gray-600 text-sm">安全に利用するためのチェックリスト</p>
        </a>
        <a href="/guide/merit" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">メリット・デメリット →</h3>
          <p className="text-gray-600 text-sm">詳しく解説</p>
        </a>
      </section>
    </div>
  )
}
