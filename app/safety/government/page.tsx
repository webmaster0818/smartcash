export default function GovernmentPage() {
  return (
    <div className="space-y-8 md:space-y-12">
      <nav className="text-sm text-gray-600" aria-label="パンくずリスト">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><a href="/" className="hover:text-primary-600 transition">🏠 ホーム</a></li>
          <li>›</li>
          <li><a href="/safety/check" className="hover:text-primary-600 transition">安全ガイド</a></li>
          <li>›</li>
          <li className="text-primary-600 font-semibold">金融庁・警察庁の警告まとめ</li>
        </ol>
      </nav>

      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 text-white drop-shadow-lg leading-tight">
            📜 金融庁・警察庁の警告まとめ
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-white/95 font-semibold">
            先払い買取の注意喚起と違法業者の見分け方
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-black text-blue-600">金融庁からの警告</h2>
        <div className="bg-red-50 p-6 md:p-8 rounded-2xl shadow-lg border-2 border-red-300">
          <h3 className="text-xl font-bold mb-4 text-red-700">⚠️ 公式警告（2023年3月発表）</h3>
          <p className="text-base leading-relaxed mb-4">
            金融庁は、<strong>「後払い（ツケ払い）現金化」「先払い買取現金化」などと称して、実質的には貸付けを行うもの</strong>について注意喚起を行っています。
          </p>
          <div className="bg-white p-4 rounded-lg mb-4">
            <h4 className="font-bold mb-2">金融庁の指摘内容</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• 実質的には金銭の貸付であり、貸金業法の規制対象となる可能性がある</li>
              <li>• 法外な利息（年利数百%）を取る悪質な業者が確認されている</li>
              <li>• 貸金業登録を受けずに営業している業者が多数存在する</li>
              <li>• 利用者が多重債務に陥るケースが急増している</li>
            </ul>
          </div>
          <a href="https://www.fsa.go.jp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-bold">
            → 金融庁公式サイトで詳細を確認
          </a>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-black text-blue-600">警察庁からの注意喚起</h2>
        <div className="bg-yellow-50 p-6 md:p-8 rounded-2xl shadow-lg border-2 border-yellow-300">
          <h3 className="text-xl font-bold mb-4 text-yellow-700">🚨 ヤミ金融への警告</h3>
          <p className="text-base leading-relaxed mb-4">
            警察庁は、<strong>先払い買取を装ったヤミ金融</strong>の相談件数が急増していることを発表しています。
          </p>
          <div className="bg-white p-4 rounded-lg mb-4">
            <h4 className="font-bold mb-2">警察庁の指摘内容</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• 実質的に高利貸しであり、違法な金利（年利数百%〜数千%）を取っている</li>
              <li>• 脅迫的な取り立てや嫌がらせが横行している</li>
              <li>• 個人情報が第三者に売られ、二次被害に遭うケースがある</li>
              <li>• 相談件数は2023年に前年比300%増加</li>
            </ul>
          </div>
          <div className="bg-red-100 p-4 rounded-lg">
            <p className="text-sm text-red-800">
              <strong>🚨 緊急時は110番!</strong> 脅迫や恐喝を受けた場合は、すぐに警察に通報してください。
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-black text-red-600">違法業者の特徴</h2>
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold mb-4">❌ こんな業者は違法の可能性大</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-red-600 text-xl">✗</span>
              <span><strong>古物商許可番号が記載されていない</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 text-xl">✗</span>
              <span><strong>運営会社の住所・電話番号が不明確</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 text-xl">✗</span>
              <span><strong>換金率が異常に高い（80%以上）</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 text-xl">✗</span>
              <span><strong>契約書に不明瞭な条項が多い</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 text-xl">✗</span>
              <span><strong>過度な勧誘や脅迫的な言動がある</strong></span>
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-black text-green-600">合法業者の条件</h2>
        <div className="bg-green-50 p-6 md:p-8 rounded-2xl shadow-lg border-2 border-green-300">
          <h3 className="text-xl font-bold mb-4">✅ 安全な業者のチェックリスト</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span><strong>古物商許可番号が公式サイトに明記</strong>（例: 東京都公安委員会 第123456789012号）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span><strong>運営会社の正確な住所・電話番号が記載</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span><strong>換金率・手数料が明確に表示</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span><strong>口コミ・評判が確認できる</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span><strong>丁寧なサポート体制がある</strong></span>
            </li>
          </ul>
          <p className="text-sm text-gray-600 mt-4">
            <a href="/safety/check" className="text-primary-600 hover:underline font-bold">→ 悪徳業者の見分け方 詳細はこちら</a>
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center">📚 関連記事</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/pillar/sakibarai-kaitori-guide" className="block p-6 bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition border border-primary-200">
            <h3 className="font-bold text-lg mb-2">📖 先払い買取完全ガイド</h3>
            <p className="text-sm text-gray-600">仕組み・安全な使い方を徹底解説</p>
          </a>
          <a href="/safety/trouble" className="block p-6 bg-gradient-to-br from-red-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition border border-red-200">
            <h3 className="font-bold text-lg mb-2">⚠️ トラブル事例と対処法</h3>
            <p className="text-sm text-gray-600">被害を防ぐための注意点</p>
          </a>
          <a href="/ranking/safety" className="block p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition border border-purple-200">
            <h3 className="font-bold text-lg mb-2">🔒 安全性重視ランキング</h3>
            <p className="text-sm text-gray-600">古物商許可取得業者TOP10</p>
          </a>
        </div>
      </section>
    </div>
  )
}
