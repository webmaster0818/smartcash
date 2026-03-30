export default function SakibaraiKaitoriGuidePage() {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-600" aria-label="パンくずリスト">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><a href="/" className="hover:text-primary-600 transition">🏠 ホーム</a></li>
          <li>›</li>
          <li className="text-primary-600 font-semibold">先払い買取完全ガイド</li>
        </ol>
      </nav>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 md:mb-6 text-white drop-shadow-lg leading-tight">
            先払い買取完全ガイド【2026年最新版】
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-white/95 font-semibold leading-relaxed">
            仕組み・安全な使い方・おすすめ業者を徹底解説
          </p>
        </div>
      </section>

      {/* 目次 */}
      <section className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary-600">📚 目次</h2>
        <ol className="space-y-2 text-sm md:text-base">
          <li><a href="#what-is" className="hover:text-primary-600 transition">1. 先払い買取とは？仕組みを解説</a></li>
          <li><a href="#merit-demerit" className="hover:text-primary-600 transition">2. メリット・デメリット</a></li>
          <li><a href="#safety" className="hover:text-primary-600 transition">3. 安全性とリスク</a></li>
          <li><a href="#how-to-choose" className="hover:text-primary-600 transition">4. 業者の選び方</a></li>
          <li><a href="#ranking" className="hover:text-primary-600 transition">5. おすすめ業者ランキングTOP5</a></li>
          <li><a href="#trouble" className="hover:text-primary-600 transition">6. トラブル事例と対処法</a></li>
          <li><a href="#faq" className="hover:text-primary-600 transition">7. よくある質問</a></li>
        </ol>
      </section>

      {/* 1. 先払い買取とは？ */}
      <section id="what-is" className="space-y-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-primary-600">1. 先払い買取とは？仕組みを解説</h2>
        
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold mb-4">先払い買取の定義</h3>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            先払い買取とは、<strong className="text-primary-600">商品券・ギフトカード・金券などを業者に売却し、商品を送る前に代金を受け取れるサービス</strong>です。通常の買取では商品到着後に入金されますが、先払い買取では申込・査定後すぐに入金されるため、急な資金調達に活用できます。
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            利用者は手持ちの商品券（Amazonギフト券、クオカード、JCBギフトカードなど）を業者に売却し、<strong>最短5分〜10分で銀行口座に現金が振り込まれます。</strong>その後、約束した期日までに商品を業者に郵送する仕組みです。
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white p-6 md:p-8 rounded-2xl shadow-lg border border-blue-200">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-700">💡 先払い買取の流れ</h3>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-2xl font-bold text-blue-600">1</span>
              <div>
                <strong className="block text-lg mb-1">業者選び・申込</strong>
                <p className="text-gray-700">公式サイトまたはLINEから申込。本人確認書類（免許証・保険証等）を提出。</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl font-bold text-blue-600">2</span>
              <div>
                <strong className="block text-lg mb-1">査定</strong>
                <p className="text-gray-700">売却する商品券の種類・金額を伝え、業者が査定。換金率60〜65%が相場。</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl font-bold text-blue-600">3</span>
              <div>
                <strong className="block text-lg mb-1">契約・入金</strong>
                <p className="text-gray-700">契約書に同意し、業者が銀行口座に入金（最短5分〜10分）。</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl font-bold text-blue-600">4</span>
              <div>
                <strong className="block text-lg mb-1">商品発送</strong>
                <p className="text-gray-700">約束した期日（通常7日以内）までに商品券を郵送。</p>
              </div>
            </li>
          </ol>
          <div className="mt-6 p-4 bg-blue-100 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>📌 ポイント:</strong> 商品到着前に入金されるため、急な資金需要に対応できます。ただし、<strong>期日までに商品を送らないとトラブルになる</strong>ため、約束を守ることが重要です。
            </p>
          </div>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold mb-4">先払い買取とファクタリングの違い</h3>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            先払い買取はしばしば「ファクタリング」と混同されますが、<strong>両者は全く異なるサービス</strong>です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left">項目</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">先払い買取</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">ファクタリング</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-bold">対象物</td>
                  <td className="border border-gray-300 px-4 py-3">商品券・ギフトカード</td>
                  <td className="border border-gray-300 px-4 py-3">売掛金（請求書）</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-bold">法的位置づけ</td>
                  <td className="border border-gray-300 px-4 py-3">古物営業法（買取業）</td>
                  <td className="border border-gray-300 px-4 py-3">債権譲渡（金融取引）</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-bold">対象者</td>
                  <td className="border border-gray-300 px-4 py-3">個人・法人</td>
                  <td className="border border-gray-300 px-4 py-3">主に法人（個人事業主も可）</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-bold">換金率</td>
                  <td className="border border-gray-300 px-4 py-3">60〜65%</td>
                  <td className="border border-gray-300 px-4 py-3">80〜98%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            <a href="/guide/difference" className="text-primary-600 hover:underline font-bold">→ 詳しい比較はこちら</a>
          </p>
        </div>
      </section>

      {/* 2. メリット・デメリット */}
      <section id="merit-demerit" className="space-y-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-primary-600">2. メリット・デメリット</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-white p-6 md:p-8 rounded-2xl shadow-lg border border-green-200">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-green-700">✅ メリット</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <div>
                  <strong className="block">最短5分で入金</strong>
                  <p className="text-sm text-gray-700">審査が早く、申込から入金まで最短5〜10分。</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <div>
                  <strong className="block">審査なし</strong>
                  <p className="text-sm text-gray-700">信用情報に傷がある人でも利用可能。</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <div>
                  <strong className="block">24時間対応</strong>
                  <p className="text-sm text-gray-700">多くの業者が24時間365日営業。</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <div>
                  <strong className="block">来店不要</strong>
                  <p className="text-sm text-gray-700">WEBまたはLINEで完結。</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-white p-6 md:p-8 rounded-2xl shadow-lg border border-red-200">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-red-700">⚠️ デメリット</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <div>
                  <strong className="block">換金率が低い</strong>
                  <p className="text-sm text-gray-700">60〜65%が相場。元本の35〜40%が手数料。</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <div>
                  <strong className="block">悪徳業者のリスク</strong>
                  <p className="text-sm text-gray-700">違法な高利貸しや詐欺業者が混在。</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <div>
                  <strong className="block">商品発送義務</strong>
                  <p className="text-sm text-gray-700">期日までに商品を送らないとトラブルに。</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <div>
                  <strong className="block">法的グレーゾーン</strong>
                  <p className="text-sm text-gray-700">金融庁・警察庁から警告が出ている。</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. 安全性とリスク */}
      <section id="safety" className="space-y-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-primary-600">3. 安全性とリスク</h2>
        
        <div className="bg-red-50 p-6 md:p-8 rounded-2xl shadow-lg border-2 border-red-400">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-red-700">⚠️ 金融庁・警察庁からの警告</h3>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            金融庁および警察庁は、<strong>先払い買取を装ったヤミ金融・違法な貸付行為</strong>について注意喚起を行っています。
          </p>
          <div className="bg-white p-4 rounded-lg mb-4">
            <h4 className="font-bold mb-2">📌 金融庁からの警告（2023年3月）</h4>
            <p className="text-sm text-gray-700 mb-2">
              「後払い（ツケ払い）現金化」「先払い買取現金化」などと称して、実質的には貸付けを行うもので、法外な利息を取る悪質な業者が確認されています。
            </p>
            <a href="https://www.fsa.go.jp/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline text-sm">
              → 金融庁公式サイト
            </a>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold mb-2">📌 警察庁からの注意喚起</h4>
            <p className="text-sm text-gray-700">
              先払い買取を装ったヤミ金融の相談件数が急増。実質的に高利貸しであり、利用者が多重債務に陥るケースが多発しています。
            </p>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            <a href="/safety/government" className="text-primary-600 hover:underline font-bold">→ 金融庁・警察庁の警告詳細はこちら</a>
          </p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold mb-4">安全な業者の見分け方</h3>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            すべての先払い買取業者が違法というわけではありません。<strong>古物商許可を取得し、透明性の高い運営を行っている業者も存在します。</strong>
          </p>
          <h4 className="font-bold text-lg mb-3">✅ 安全な業者のチェックリスト</h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span><strong>古物商許可番号が公式サイトに明記されている</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span><strong>運営会社の住所・電話番号が明記されている</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span><strong>換金率・手数料が明確に表示されている</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span><strong>口コミ・評判が確認できる</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span><strong>過度な勧誘や脅迫がない</strong></span>
            </li>
          </ul>
          <p className="text-sm text-gray-600 mt-4">
            <a href="/safety/check" className="text-primary-600 hover:underline font-bold">→ 悪徳業者の見分け方 詳細はこちら</a>
          </p>
        </div>
      </section>

      {/* 4. 業者の選び方 */}
      <section id="how-to-choose" className="space-y-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-primary-600">4. 業者の選び方</h2>
        
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold mb-4">業者選びの4つのポイント</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-4xl font-bold text-primary-600">1</span>
              <div className="flex-1">
                <h4 className="text-lg font-bold mb-2">古物商許可の有無を確認</h4>
                <p className="text-gray-700 mb-2">
                  古物商許可は買取業を行うために必須の許可です。公式サイトに「古物商許可番号」が明記されているか確認しましょう。番号が記載されていない業者は違法の可能性があります。
                </p>
                <div className="bg-gray-100 p-3 rounded">
                  <p className="text-sm"><strong>例:</strong> 東京都公安委員会 第123456789012号</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-4xl font-bold text-primary-600">2</span>
              <div className="flex-1">
                <h4 className="text-lg font-bold mb-2">換金率・手数料の透明性</h4>
                <p className="text-gray-700 mb-2">
                  換金率が明確に表示されているか確認しましょう。<strong>相場は60〜65%</strong>です。極端に高い換金率（80%以上）を謳う業者は、後から追加手数料を請求する可能性があります。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-4xl font-bold text-primary-600">3</span>
              <div className="flex-1">
                <h4 className="text-lg font-bold mb-2">口コミ・評判の確認</h4>
                <p className="text-gray-700 mb-2">
                  Googleレビュー、Twitter、掲示板などで実際の利用者の評判を確認しましょう。<strong>「入金が遅い」「追加手数料を請求された」などの悪評が多い業者は避けるべき</strong>です。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-4xl font-bold text-primary-600">4</span>
              <div className="flex-1">
                <h4 className="text-lg font-bold mb-2">サポート体制の充実度</h4>
                <p className="text-gray-700 mb-2">
                  電話・LINE・メールなど複数の問い合わせ手段があるか、対応が丁寧かを確認しましょう。連絡が取れない業者は危険です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. おすすめ業者ランキングTOP5 */}
      <section id="ranking" className="space-y-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-primary-600">5. おすすめ業者ランキングTOP5</h2>
        
        <div className="space-y-6">
          {[
            { rank: 1, name: 'チケットセンター', rate: '最大65%', speed: '最短10分', link: '/vendors/ticket-center', emoji: '🥇' },
            { rank: 2, name: 'タートルチケット', rate: '最大60%', speed: '最短10分', link: '/vendors/turtle-ticket', emoji: '🥈' },
            { rank: 3, name: 'リセチケット', rate: '最大65%', speed: '最短10分', link: '/vendors/reseticke', emoji: '🥉' },
            { rank: 4, name: 'シープチケット', rate: '最大60%', speed: '最短5分', link: '/vendors/sheep-ticket', emoji: '4位' },
            { rank: 5, name: 'バイチケ', rate: '最大60%', speed: '最短10分', link: '/vendors/baichike', emoji: '5位' },
          ].map((vendor) => (
            <div key={vendor.rank} className="bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-bold">{vendor.emoji}</span>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-black text-primary-600">{vendor.name}</h3>
                  <div className="flex gap-4 mt-2">
                    <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">💰 {vendor.rate}</span>
                    <span className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full font-bold">⚡ {vendor.speed}</span>
                  </div>
                </div>
              </div>
              <a href={vendor.link} className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-bold">
                詳細を見る →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center p-6 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl">
          <p className="text-lg font-bold mb-4">全12業者のランキングはこちら</p>
          <a href="/ranking/overall" className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition text-lg font-bold shadow-lg">
            🏆 総合ランキングを見る
          </a>
        </div>
      </section>

      {/* 6. トラブル事例と対処法 */}
      <section id="trouble" className="space-y-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-primary-600">6. トラブル事例と対処法</h2>
        
        <div className="bg-red-50 p-6 md:p-8 rounded-2xl shadow-lg border-2 border-red-300">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-red-700">よくあるトラブル5選</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold mb-2">1. 入金が約束の時間に来ない</h4>
              <p className="text-sm text-gray-700">業者に連絡を取り、入金予定時刻を確認。連絡が取れない場合は消費者センターに相談。</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold mb-2">2. 査定額が申込時より大幅に減額された</h4>
              <p className="text-sm text-gray-700">減額理由を確認し、納得できない場合はキャンセル。契約前に必ず確認を。</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold mb-2">3. 商品を送ったのに追加請求された</h4>
              <p className="text-sm text-gray-700">契約書を確認し、追加手数料の記載がなければ拒否可能。弁護士に相談。</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold mb-2">4. 悪質な取り立て・脅迫</h4>
              <p className="text-sm text-gray-700">即座に警察（110番）に通報。ヤミ金融の可能性が高い。</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold mb-2">5. 個人情報が悪用された</h4>
              <p className="text-sm text-gray-700">警察に被害届を提出し、クレジットカード会社・銀行に連絡。</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            <a href="/safety/trouble" className="text-primary-600 hover:underline font-bold">→ トラブル事例と対処法の詳細はこちら</a>
          </p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold mb-4">相談窓口</h3>
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-bold">消費者ホットライン</h4>
              <p className="text-lg font-bold text-primary-600">188（いやや！）</p>
              <p className="text-sm text-gray-600">最寄りの消費生活センターにつながります。</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-bold">警察相談専用電話</h4>
              <p className="text-lg font-bold text-primary-600">#9110</p>
              <p className="text-sm text-gray-600">緊急でない相談はこちら。</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-bold">法テラス（日本司法支援センター）</h4>
              <p className="text-lg font-bold text-primary-600">0570-078374</p>
              <p className="text-sm text-gray-600">法的トラブルの相談窓口。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. よくある質問 */}
      <section id="faq" className="space-y-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-primary-600">7. よくある質問</h2>
        
        <div className="space-y-4">
          {[
            {
              q: '先払い買取は違法ですか？',
              a: '先払い買取自体は違法ではありません。ただし、実質的に高利貸しを行っている業者は違法です。古物商許可を取得している業者を選びましょう。'
            },
            {
              q: '審査はありますか？',
              a: '基本的に審査はありません。ただし、本人確認書類の提出は必須です。'
            },
            {
              q: '換金率はどのくらいですか？',
              a: '相場は60〜65%です。業者や商品券の種類によって異なります。'
            },
            {
              q: '入金までどのくらいかかりますか？',
              a: '最短5分〜10分です。業者や時間帯によって異なる場合があります。'
            },
            {
              q: '商品を送らないとどうなりますか？',
              a: '契約違反となり、法的措置を取られる可能性があります。必ず期日までに発送してください。'
            },
            {
              q: '信用情報に傷がつきますか？',
              a: '先払い買取は貸付ではないため、信用情報機関には登録されません。'
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="text-lg font-bold mb-2 text-primary-600">Q. {item.q}</h4>
              <p className="text-gray-700">A. {item.a}</p>
            </div>
          ))}
        </div>

        <div className="text-center p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl">
          <p className="text-lg font-bold mb-4">その他の質問はFAQページをご覧ください</p>
          <a href="/faq" className="inline-block bg-yellow-500 text-white px-8 py-4 rounded-lg hover:bg-yellow-600 transition text-lg font-bold shadow-lg">
            ❓ FAQページへ
          </a>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center">📚 関連記事</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="/safety/trouble" className="block p-6 bg-gradient-to-br from-red-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition border border-red-200">
            <h3 className="font-bold text-lg mb-2">⚠️ トラブル事例と対処法</h3>
            <p className="text-sm text-gray-600">被害を防ぐための注意点</p>
          </a>
          <a href="/safety/government" className="block p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition border border-blue-200">
            <h3 className="font-bold text-lg mb-2">📜 金融庁・警察庁の警告</h3>
            <p className="text-sm text-gray-600">公的機関からの注意喚起</p>
          </a>
          <a href="/guide/flow" className="block p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition border border-green-200">
            <h3 className="font-bold text-lg mb-2">📝 利用手順・流れ</h3>
            <p className="text-sm text-gray-600">申込から入金までのステップ</p>
          </a>
          <a href="/guide/difference" className="block p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition border border-purple-200">
            <h3 className="font-bold text-lg mb-2">🔄 ファクタリングとの違い</h3>
            <p className="text-sm text-gray-600">どちらを選ぶべき？徹底比較</p>
          </a>
          <a href="/guide/cost" className="block p-6 bg-gradient-to-br from-yellow-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition border border-yellow-200">
            <h3 className="font-bold text-lg mb-2">💰 手数料・換金率の相場</h3>
            <p className="text-sm text-gray-600">費用を抑えるポイント</p>
          </a>
          <a href="/guide/bank-account" className="block p-6 bg-gradient-to-br from-pink-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition border border-pink-200">
            <h3 className="font-bold text-lg mb-2">🏦 口座凍結リスクと対策</h3>
            <p className="text-sm text-gray-600">銀行口座のトラブルを防ぐ</p>
          </a>
        </div>
      </section>

      {/* トップページへのリンク */}
      <div className="text-center p-6 bg-primary-600 text-white rounded-2xl">
        <p className="text-lg mb-4">おすすめ業者ランキング・詳細比較はこちら</p>
        <a href="/" className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-bold">
          🏠 トップページへ
        </a>
      </div>
    </div>
  )
}
