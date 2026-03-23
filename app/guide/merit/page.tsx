export default function Merit() {
  const merits = [
    { id: 1, title: '最短5分で現金化', desc: '業界最速クラスのスピード振込' },
    { id: 2, title: '審査なし', desc: '信用情報の照会なし・金融ブラックOK' },
    { id: 3, title: 'クレジットカード不要', desc: 'カードを持っていなくても利用可能' },
    { id: 4, title: '24時間営業の業者あり', desc: '深夜でも対応可能' },
    { id: 5, title: '在籍確認なし', desc: '会社に電話がかかってこない' },
    { id: 6, title: '郵送期限に猶予がある', desc: '7〜30日以内に発送すればOK' },
    { id: 7, title: 'WEB・LINE完結', desc: '来店不要で簡単申し込み' },
    { id: 8, title: '土日祝日も対応', desc: 'モアタイム対応銀行なら即時振込' },
    { id: 9, title: '個人情報保護', desc: '秘密厳守で家族にバレない' },
    { id: 10, title: '法的リスクが低い', desc: '古物営業法に基づく合法的な取引' },
  ]

  const demerits = [
    { id: 1, title: '換金率が低め', desc: '60〜80%（通常の買取は80〜95%）' },
    { id: 2, title: '商品発送が必須', desc: '7〜30日以内に商品を郵送する義務' },
    { id: 3, title: '郵送費用は自己負担', desc: 'レターパック代（370〜520円）が必要' },
    { id: 4, title: 'キャンセル不可', desc: '契約後のキャンセルは原則できない' },
    { id: 5, title: '悪徳業者も存在', desc: '古物商許可番号の確認が必須' },
  ]

  return (
    <div className="space-y-8">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">先払い買取のメリット・デメリット【2026年最新版】</h1>
        <p className="text-gray-700">
          先払い買取を利用する前に知っておきたいメリット10個とデメリット5個を詳しく解説します。
        </p>
      </section>

      {/* メリット10個 */}
      <section>
        <h2 className="text-2xl font-bold mb-6">メリット10個</h2>
        <div className="space-y-6">
          {merits.map((merit) => (
            <div key={merit.id} className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {merit.id}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-green-700">{merit.title}</h3>
                  <p className="text-gray-700 mb-3">{merit.desc}</p>
                  <div className="bg-white p-4 rounded">
                    {merit.id === 1 && (
                      <>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>詳細:</strong> シープチケットなら最短5分で振込完了。モアタイム対応の銀行口座なら土日祝日でも即時振込されます。
                        </p>
                        <p className="text-sm text-gray-600">
                          → 今すぐ現金が必要な方に最適
                        </p>
                      </>
                    )}
                    {merit.id === 2 && (
                      <>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>詳細:</strong> クレジットカード現金化や後払い現金化は審査がありますが、先払い買取は審査なし。金融ブラックの方でも利用できます。
                        </p>
                        <p className="text-sm text-gray-600">
                          → 審査に通らない方でも利用可能
                        </p>
                      </>
                    )}
                    {merit.id === 3 && (
                      <>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>詳細:</strong> クレジットカードを持っていない方、カード利用限度額を使い切った方でも利用できます。
                        </p>
                        <p className="text-sm text-gray-600">
                          → カードなしでも現金化できる
                        </p>
                      </>
                    )}
                    {merit.id === 4 && (
                      <>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>詳細:</strong> シープチケット、タートルチケットなどは24時間営業。深夜でも申し込み・振込が可能です。
                        </p>
                        <p className="text-sm text-gray-600">
                          → 深夜の急な出費にも対応
                        </p>
                      </>
                    )}
                    {merit.id === 5 && (
                      <>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>詳細:</strong> 給料ファクタリングやビジネスローンとは違い、在籍確認（会社への電話確認）がありません。
                        </p>
                        <p className="text-sm text-gray-600">
                          → 会社にバレずに利用できる
                        </p>
                      </>
                    )}
                    {merit.id === 6 && (
                      <>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>詳細:</strong> 通常の買取は「商品を送ってから振込」ですが、先払い買取は「振込を受け取ってから7〜30日以内に発送」でOK。
                        </p>
                        <p className="text-sm text-gray-600">
                          → 急いで郵送する必要がない
                        </p>
                      </>
                    )}
                    {merit.id === 7 && (
                      <>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>詳細:</strong> WEBサイトやLINEから申し込み可能。来店不要で自宅から簡単に申し込めます。
                        </p>
                        <p className="text-sm text-gray-600">
                          → スマホだけで完結
                        </p>
                      </>
                    )}
                    {merit.id === 8 && (
                      <>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>詳細:</strong> モアタイム対応の銀行口座（楽天銀行、PayPay銀行、住信SBIネット銀行など）なら土日祝日でも即時振込。
                        </p>
                        <p className="text-sm text-gray-600">
                          → 土日祝日の急な出費にも対応
                        </p>
                      </>
                    )}
                    {merit.id === 9 && (
                      <>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>詳細:</strong> 秘密厳守で対応してくれるため、家族にバレる心配がありません。郵送物も追跡番号付きで安全です。
                        </p>
                        <p className="text-sm text-gray-600">
                          → プライバシーが守られる
                        </p>
                      </>
                    )}
                    {merit.id === 10 && (
                      <>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>詳細:</strong> 古物営業法に基づく合法的な買取取引。キャンセル前提の業者は違法ですが、買取方式なら安全です。
                        </p>
                        <p className="text-sm text-gray-600">
                          → 合法的なサービス
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* デメリット5個 */}
      <section>
        <h2 className="text-2xl font-bold mb-6">デメリット5個</h2>
        <div className="space-y-6">
          {demerits.map((demerit) => (
            <div key={demerit.id} className="bg-red-50 rounded-lg p-6 border-l-4 border-red-400">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {demerit.id}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-red-700">{demerit.title}</h3>
                  <p className="text-gray-700 mb-3">{demerit.desc}</p>
                  <div className="bg-white p-4 rounded">
                    {demerit.id === 1 && (
                      <>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>詳細:</strong> 先払い買取の換金率は60〜80%。通常の買取（80〜95%）と比べると低めです。
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>対策:</strong> 換金率が高い業者（シープチケット95%、タートルチケット90%など）を選びましょう。
                        </p>
                      </>
                    )}
                    {demerit.id === 2 && (
                      <>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>詳細:</strong> 振込を受け取った後、7〜30日以内に商品を郵送する義務があります。期限内に送らないと延滞金が発生します。
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>対策:</strong> 郵送期限をカレンダーに登録して忘れないようにしましょう。
                        </p>
                      </>
                    )}
                    {demerit.id === 3 && (
                      <>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>詳細:</strong> レターパックライト（370円）またはレターパックプラス（520円）の費用が自己負担です。
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>対策:</strong> 郵送費用を考慮して換金率を比較しましょう。
                        </p>
                      </>
                    )}
                    {demerit.id === 4 && (
                      <>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>詳細:</strong> 契約締結後のキャンセルは原則不可。高額なキャンセル料（買取金額の30〜40%）を請求されることもあります。
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>対策:</strong> 契約前に内容をよく確認しましょう。
                        </p>
                      </>
                    )}
                    {demerit.id === 5 && (
                      <>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>詳細:</strong> 古物商許可番号がない業者、キャンセル前提の業者など、悪徳業者も存在します。
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>対策:</strong> 古物商許可番号を必ず確認し、当サイト紹介の業者を利用しましょう。
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 最終結論 */}
      <section className="bg-primary-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">最終結論</h2>
        <p className="text-gray-700 mb-4">
          先払い買取は、<strong>スピード・利便性・審査なし</strong>という点で優れたサービスです。
        </p>
        <p className="text-gray-700 mb-4">
          ただし、<strong>換金率の低さ・商品発送の義務</strong>というデメリットも理解した上で利用することが重要です。
        </p>
        <div className="bg-white p-4 rounded">
          <h3 className="font-bold mb-2">こんな方におすすめ</h3>
          <ul className="space-y-1 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary-600">✓</span>
              <span>今すぐ現金が必要な方（最短5分振込）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600">✓</span>
              <span>クレジットカードを持っていない方</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600">✓</span>
              <span>金融ブラックの方（審査なし）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600">✓</span>
              <span>在籍確認されたくない方</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600">✓</span>
              <span>手元に商品券・ギフトカードがある方</span>
            </li>
          </ul>
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
        <a href="/guide/comparison" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">他サービスとの違い →</h3>
          <p className="text-gray-600 text-sm">Amazon買取・クレカ現金化などと比較</p>
        </a>
        <a href="/safety/check" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">悪徳業者の見分け方 →</h3>
          <p className="text-gray-600 text-sm">安全に利用するためのチェックリスト</p>
        </a>
      </section>
    </div>
  )
}
