export default function SafetyCheck() {
  const checkItems = [
    { id: 1, title: '古物商許可番号の確認', safe: '明記あり', danger: '記載なし' },
    { id: 2, title: '運営会社情報', safe: '詳細記載', danger: '不明瞭' },
    { id: 3, title: '換金率', safe: '60〜95%', danger: '異常に高い/低い' },
    { id: 4, title: '利用規約', safe: '明確', danger: '曖昧・不明' },
    { id: 5, title: '連絡先', safe: '電話番号・住所あり', danger: 'メールのみ' },
    { id: 6, title: '口コミ', safe: '複数サイトで確認可能', danger: '見つからない' },
    { id: 7, title: 'キャンセル条件', safe: '明記あり', danger: '高額料金' },
    { id: 8, title: '公式サイト', safe: 'SSL対応', danger: '非対応' },
    { id: 9, title: '取引方法', safe: '買取方式', danger: 'キャンセル前提' },
    { id: 10, title: '実績', safe: '1年以上', danger: '開設直後' },
  ]

  return (
    <div className="space-y-8">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 md:p-8 rounded-lg">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">先払い買取の悪徳業者の見分け方｜10項目チェックリスト【2026年最新版】</h1>
        <p className="text-sm md:text-base text-gray-700">
          詐欺被害に遭わないために！安全な業者を見分けるための10項目チェックリストと、実際のトラブル事例を詳しく解説します。
        </p>
      </section>

      {/* 重要ポイント */}
      <section className="bg-red-50 border-l-4 border-red-400 p-6 rounded">
        <h2 className="font-bold text-lg mb-2 text-red-700">⚠️ 重要ポイント</h2>
        <p className="text-gray-700 mb-2">
          <strong>1つでも「危険」に該当したら、絶対に利用しないでください！</strong>
        </p>
        <p className="text-sm md:text-base text-gray-700">
          悪徳業者は巧妙に装っています。利用前に必ず以下のチェックリストで確認しましょう。
        </p>
      </section>

      {/* チェックリスト */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">10項目チェックリスト</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">チェック項目</th>
                <th className="px-4 py-3 text-center">安全な業者</th>
                <th className="px-4 py-3 text-center">危険な業者</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {checkItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-bold">{item.id}</td>
                  <td className="px-4 py-3 font-bold">{item.title}</td>
                  <td className="px-4 py-3 text-center bg-green-50 text-green-700">✅ {item.safe}</td>
                  <td className="px-4 py-3 text-center bg-red-50 text-red-700">❌ {item.danger}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* チェック項目詳細 */}
      <section className="space-y-4 md:space-y-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold">チェック項目の詳細</h2>
        
        {/* 1. 古物商許可番号 */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
          <h3 className="text-base md:text-lg lg:text-xl font-bold mb-4">1. 古物商許可番号の確認【最重要】</h3>
          <div className="space-y-3">
            <div>
              <h4 className="text-base md:text-lg font-bold mb-2 text-green-700">✅ 安全な業者</h4>
              <p className="text-sm md:text-base text-gray-700">
                公式サイトのフッターまたは「会社概要」「特定商取引法に基づく表記」ページに古物商許可番号が明記されている。
              </p>
              <div className="bg-green-50 p-3 rounded mt-2">
                <p className="text-sm text-gray-700">
                  <strong>記載例:</strong> 東京都公安委員会 第301234567890号
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-bold mb-2 text-red-700">❌ 危険な業者</h4>
              <ul className="text-gray-700 space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>許可番号の記載がない</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>「取得予定」と記載（現時点では無許可）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>許可番号が不自然（桁数が違う）</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-3 md:p-4 rounded">
              <h4 className="text-base md:text-lg font-bold mb-2">💡 確認方法</h4>
              <p className="text-gray-700 text-sm">
                管轄の警察署に電話し、「古物商許可番号の確認をお願いします」と伝えれば、許可番号が実在するか教えてもらえます。
              </p>
            </div>
          </div>
        </div>

        {/* 2. 運営会社情報 */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
          <h3 className="text-base md:text-lg lg:text-xl font-bold mb-4">2. 運営会社情報の確認</h3>
          <div className="space-y-3">
            <div>
              <h4 className="text-base md:text-lg font-bold mb-2 text-green-700">✅ 確認すべき5つの項目</h4>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">1.</span>
                  <span><strong>会社名:</strong> 株式会社○○、合同会社△△など</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">2.</span>
                  <span><strong>所在地:</strong> 〒000-0000 東京都千代田区○○1-2-3 △△ビル4階</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">3.</span>
                  <span><strong>電話番号:</strong> 03-1234-5678（固定電話）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">4.</span>
                  <span><strong>代表者名:</strong> 代表取締役 山田太郎</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">5.</span>
                  <span><strong>設立年月日:</strong> 2020年4月1日</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-3 md:p-4 rounded">
              <h4 className="text-base md:text-lg font-bold mb-2">💡 実在確認の方法</h4>
              <p className="text-gray-700 text-sm mb-2">
                <a href="https://www.houjin-bangou.nta.go.jp/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                  国税庁法人番号公表サイト
                </a>
                で会社名を検索し、住所・代表者が一致するか確認しましょう。
              </p>
            </div>
          </div>
        </div>

        {/* 3. 換金率の妥当性 */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
          <h3 className="text-base md:text-lg lg:text-xl font-bold mb-4">3. 換金率の妥当性</h3>
          <div className="space-y-3">
            <div>
              <h4 className="text-base md:text-lg font-bold mb-2 text-green-700">✅ 安全な換金率</h4>
              <div className="bg-green-50 p-4 rounded">
                <ul className="space-y-2">
                  <li><strong>先払い買取:</strong> 60〜80%</li>
                  <li><strong>郵送買取:</strong> 80〜95%</li>
                </ul>
                <p className="text-xs md:text-sm text-gray-600 mt-2">※ この範囲内であれば妥当です。</p>
              </div>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-bold mb-2 text-red-700">❌ 危険な換金率</h4>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span><strong>異常に高い（98%以上）:</strong> 後から手数料を請求される、実際には約束の金額が振り込まれない可能性</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span><strong>異常に低い（50%以下）:</strong> 明らかにぼったくり</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 実際のトラブル事例 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">実際のトラブル事例</h2>
        <div className="space-y-3 md:space-y-4">
          <div className="border-l-4 border-red-400 pl-4 py-2">
            <h3 className="text-base md:text-lg font-bold mb-2">事例1: 振込されない詐欺</h3>
            <p className="text-gray-700 text-sm mb-2">
              商品を先に郵送してしまい、その後業者と連絡が取れなくなった。振込もされず、商品も戻ってこない。
            </p>
            <p className="text-red-700 font-bold text-sm">
              → 損害額: 10万円（商品代）
            </p>
          </div>
          <div className="border-l-4 border-red-400 pl-4 py-2">
            <h3 className="text-base md:text-lg font-bold mb-2">事例2: 高額なキャンセル料を請求</h3>
            <p className="text-gray-700 text-sm mb-2">
              キャンセルしたら、キャンセル料3万円を請求された。
            </p>
            <p className="text-red-700 font-bold text-sm">
              → 損害額: 3万円
            </p>
          </div>
          <div className="border-l-4 border-red-400 pl-4 py-2">
            <h3 className="text-base md:text-lg font-bold mb-2">事例3: 個人情報の悪用</h3>
            <p className="text-gray-700 text-sm mb-2">
              怪しい業者に本人確認書類を送信したら、身に覚えのない請求書が届いた。
            </p>
            <p className="text-red-700 font-bold text-sm">
              → 損害額: 数万円〜数十万円
            </p>
          </div>
        </div>
      </section>

      {/* トラブルに遭った場合の対処法 */}
      <section className="bg-yellow-50 rounded-lg p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">トラブルに遭った場合の対処法</h2>
        <div className="space-y-3">
          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">1. すぐに証拠を保存</h3>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• メールやLINEのやり取り</li>
              <li>• 振込明細</li>
              <li>• 追跡番号</li>
              <li>• スクリーンショット</li>
            </ul>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">2. 業者に連絡</h3>
            <p className="text-gray-700 text-sm">
              まずは業者に問い合わせ。記録に残るメール・LINEで連絡しましょう。
            </p>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">3. 消費生活センターに相談</h3>
            <p className="text-gray-700 text-sm">
              <strong>連絡先:</strong> 188（消費者ホットライン）<br />
              <strong>相談時間:</strong> 平日9:00〜17:00
            </p>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">4. 警察に相談</h3>
            <p className="text-gray-700 text-sm">
              詐欺の疑いがある場合は、最寄りの警察署に相談。
            </p>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="bg-primary-50 rounded-lg p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">まとめ：安全に利用するための5つのルール</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-primary-600 font-bold">1.</span>
            <span><strong>古物商許可番号を必ず確認</strong>（記載がない業者は絶対に利用しない）</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 font-bold">2.</span>
            <span><strong>換金率が相場内か確認</strong>（60〜95%の範囲内）</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 font-bold">3.</span>
            <span><strong>口コミを複数サイトで確認</strong>（1つのサイトだけでは判断できない）</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 font-bold">4.</span>
            <span><strong>キャンセル前提の業者は避ける</strong>（買取方式の業者のみ利用）</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 font-bold">5.</span>
            <span><strong>当サイト紹介の業者を利用</strong>（全て古物商許可取得済み）</span>
          </li>
        </ul>
      </section>

      {/* 内部リンク */}
      <section className="grid grid-cols-2 gap-2 md:gap-4">
        <a href="/ranking/safety" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">安全性重視ランキング →</h3>
          <p className="text-gray-600 text-xs md:text-sm">古物商許可取得済みの安全な業者</p>
        </a>
        <a href="/safety/legal" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">違法性について →</h3>
          <p className="text-gray-600 text-xs md:text-sm">法的根拠と金融庁の見解</p>
        </a>
        <a href="/ranking/overall" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">総合ランキング →</h3>
          <p className="text-gray-600 text-xs md:text-sm">おすすめの先払い買取業者TOP10</p>
        </a>
        <a href="/guide/about" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">先払い買取とは →</h3>
          <p className="text-gray-600 text-xs md:text-sm">仕組み・流れをわかりやすく解説</p>
        </a>
      </section>
    </div>
  )
}
