export default function TroublePage() {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-600" aria-label="パンくずリスト">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><a href="/" className="hover:text-primary-600 transition">🏠 ホーム</a></li>
          <li>›</li>
          <li><a href="/safety/check" className="hover:text-primary-600 transition">安全ガイド</a></li>
          <li>›</li>
          <li className="text-primary-600 font-semibold">トラブル事例と対処法</li>
        </ol>
      </nav>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-red-500 via-red-600 to-red-700 p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 text-white drop-shadow-lg leading-tight">
            ⚠️ 先払い買取のトラブル事例と対処法
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-white/95 font-semibold">
            被害を防ぐための注意点【2026年版】
          </p>
        </div>
      </section>

      {/* よくあるトラブル5選 */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-black text-red-600">よくあるトラブル5選</h2>
        
        <div className="space-y-6">
          {/* トラブル1 */}
          <div className="bg-gradient-to-br from-red-50 to-white p-6 md:p-8 rounded-2xl shadow-lg border-2 border-red-200">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-red-700">1. 入金が約束の時間に来ない</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">📌 事例</h4>
                <p className="text-gray-700">
                  「最短10分で入金」と謳う業者に申し込んだが、3時間経っても入金されない。業者に連絡しても「確認中」の一点張りで、結局翌日まで待たされた。
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-green-700">✅ 対処法</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• まずは業者に連絡を取り、入金予定時刻を確認する</li>
                  <li>• 契約書に記載された入金時間を過ぎている場合は、契約違反として交渉可能</li>
                  <li>• 連絡が取れない場合は消費者ホットライン（188）に相談</li>
                  <li>• 極端に遅い場合は、詐欺の可能性があるため警察に相談</li>
                </ul>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>⚠️ 予防策:</strong> 申込前に業者の口コミを確認し、「入金が遅い」という評判が多い業者は避けましょう。
                </p>
              </div>
            </div>
          </div>

          {/* トラブル2 */}
          <div className="bg-gradient-to-br from-orange-50 to-white p-6 md:p-8 rounded-2xl shadow-lg border-2 border-orange-200">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-orange-700">2. 査定額が申込時より大幅に減額された</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">📌 事例</h4>
                <p className="text-gray-700">
                  申込時に「換金率65%」と提示されたが、本人確認後に「傷があるため50%」と大幅に減額された。納得できずキャンセルを申し出たが、「キャンセル料3,000円」を請求された。
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-green-700">✅ 対処法</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 減額理由を詳しく聞き、納得できない場合はキャンセルする</li>
                  <li>• 契約書にキャンセル料の記載があるか確認（記載がなければ拒否可能）</li>
                  <li>• 「消費者契約法」により、不当な減額や一方的な契約変更は無効</li>
                  <li>• 消費者センターに相談し、法的アドバイスを受ける</li>
                </ul>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>⚠️ 予防策:</strong> 申込時に「査定額の変動はあるか」「キャンセル料は発生するか」を必ず確認しましょう。
                </p>
              </div>
            </div>
          </div>

          {/* トラブル3 */}
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 md:p-8 rounded-2xl shadow-lg border-2 border-purple-200">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-purple-700">3. 商品を送ったのに追加手数料を請求された</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">📌 事例</h4>
                <p className="text-gray-700">
                  商品を期日通りに発送したが、業者から「検品手数料5,000円」「送料3,000円」などの追加請求を受けた。契約書には記載がなかったが、「規約に同意している」と主張された。
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-green-700">✅ 対処法</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 契約書を確認し、追加手数料の記載がなければ拒否</li>
                  <li>• 業者の主張が不当な場合は、弁護士に相談（法テラス: 0570-078374）</li>
                  <li>• 「追加手数料を払わなければ法的措置を取る」という脅しは無視</li>
                  <li>• 証拠（契約書、メールのやり取り）を保存しておく</li>
                </ul>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>⚠️ 予防策:</strong> 契約書を必ず保存し、すべての手数料が明記されているか確認しましょう。
                </p>
              </div>
            </div>
          </div>

          {/* トラブル4 */}
          <div className="bg-gradient-to-br from-red-50 to-white p-6 md:p-8 rounded-2xl shadow-lg border-2 border-red-300">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-red-700">4. 悪質な取り立て・脅迫</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">📌 事例</h4>
                <p className="text-gray-700">
                  商品の発送が1日遅れただけで、業者から1日に10回以上の電話と「自宅に取り立てに行く」というメッセージが届いた。脅迫的な言動に恐怖を感じた。
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-green-700">✅ 対処法</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong className="text-red-600">即座に警察（110番）に通報</strong></li>
                  <li>• 脅迫や恐喝は刑法で禁止されており、違法業者の可能性が高い</li>
                  <li>• 通話内容やメッセージを証拠として保存</li>
                  <li>• 弁護士に相談し、法的措置を検討</li>
                </ul>
              </div>
              <div className="bg-red-100 p-4 rounded-lg">
                <p className="text-sm text-red-800">
                  <strong>🚨 重要:</strong> 悪質な取り立てはヤミ金融の典型的な手口です。絶対に屈せず、公的機関に相談してください。
                </p>
              </div>
            </div>
          </div>

          {/* トラブル5 */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 md:p-8 rounded-2xl shadow-lg border-2 border-blue-200">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-700">5. 個人情報が悪用された</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">📌 事例</h4>
                <p className="text-gray-700">
                  申込時に提出した免許証や銀行口座情報が第三者に売られ、クレジットカードの不正利用や詐欺の被害に遭った。
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-green-700">✅ 対処法</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 警察に被害届を提出</li>
                  <li>• クレジットカード会社に連絡し、カードを停止</li>
                  <li>• 銀行に連絡し、口座を凍結または新規開設</li>
                  <li>• 信用情報機関に「本人申告」を登録（他人による不正契約を防ぐ）</li>
                </ul>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>⚠️ 予防策:</strong> 業者の信頼性を事前に確認し、古物商許可番号がない業者には個人情報を提出しないようにしましょう。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 相談窓口 */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-black text-primary-600">相談窓口</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-primary-200">
            <h3 className="font-bold text-lg mb-3 text-primary-600">📞 消費者ホットライン</h3>
            <p className="text-3xl font-bold text-primary-600 mb-2">188</p>
            <p className="text-sm text-gray-600 mb-4">（いやや！）最寄りの消費生活センターにつながります。</p>
            <p className="text-xs text-gray-500">受付時間: 平日9:00〜17:00（地域により異なる）</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-200">
            <h3 className="font-bold text-lg mb-3 text-blue-600">🚓 警察相談専用電話</h3>
            <p className="text-3xl font-bold text-blue-600 mb-2">#9110</p>
            <p className="text-sm text-gray-600 mb-4">緊急でない相談はこちら。詐欺や脅迫の相談が可能。</p>
            <p className="text-xs text-gray-500">受付時間: 平日8:30〜17:15（都道府県により異なる）</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-green-200">
            <h3 className="font-bold text-lg mb-3 text-green-600">⚖️ 法テラス</h3>
            <p className="text-3xl font-bold text-green-600 mb-2">0570-078374</p>
            <p className="text-sm text-gray-600 mb-4">日本司法支援センター。法的トラブルの相談窓口。</p>
            <p className="text-xs text-gray-500">受付時間: 平日9:00〜21:00、土曜9:00〜17:00</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-yellow-200">
            <h3 className="font-bold text-lg mb-3 text-yellow-600">🏦 金融庁 金融サービス利用者相談室</h3>
            <p className="text-2xl font-bold text-yellow-600 mb-2">0570-016811</p>
            <p className="text-sm text-gray-600 mb-4">金融トラブル全般の相談窓口。</p>
            <p className="text-xs text-gray-500">受付時間: 平日10:00〜17:00</p>
          </div>
        </div>
      </section>

      {/* チェックリスト */}
      <section className="bg-gradient-to-br from-green-50 to-white p-6 md:p-8 rounded-2xl shadow-lg border-2 border-green-300">
        <h2 className="text-2xl md:text-3xl font-black mb-4 text-green-700">✅ 被害を防ぐチェックリスト</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <span className="text-green-600 text-xl">✓</span>
            <span>古物商許可番号が公式サイトに明記されている</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 text-xl">✓</span>
            <span>運営会社の住所・電話番号が明記されている</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 text-xl">✓</span>
            <span>換金率・手数料が明確に表示されている</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 text-xl">✓</span>
            <span>契約書をよく読み、すべての条件を理解している</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 text-xl">✓</span>
            <span>口コミ・評判を事前に確認している</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 text-xl">✓</span>
            <span>過度な勧誘や脅迫がない</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 text-xl">✓</span>
            <span>商品発送期日を守れる見込みがある</span>
          </li>
        </ul>
      </section>

      {/* 関連記事 */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center">📚 関連記事</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/pillar/sakibarai-kaitori-guide" className="block p-6 bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition border border-primary-200">
            <h3 className="font-bold text-lg mb-2">📖 先払い買取完全ガイド</h3>
            <p className="text-sm text-gray-600">仕組み・安全な使い方を徹底解説</p>
          </a>
          <a href="/safety/government" className="block p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition border border-blue-200">
            <h3 className="font-bold text-lg mb-2">📜 金融庁・警察庁の警告</h3>
            <p className="text-sm text-gray-600">公的機関からの注意喚起</p>
          </a>
          <a href="/safety/check" className="block p-6 bg-gradient-to-br from-yellow-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition border border-yellow-200">
            <h3 className="font-bold text-lg mb-2">🔍 悪徳業者の見分け方</h3>
            <p className="text-sm text-gray-600">安全チェックリスト</p>
          </a>
        </div>
      </section>
    </div>
  )
}
