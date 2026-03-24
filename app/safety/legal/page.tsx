export default function Legal() {
  return (
    <div className="space-y-8">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 md:p-8 rounded-lg">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">先払い買取は違法？合法？法的根拠と金融庁の見解を徹底解説【2026年最新版】</h1>
        <p className="text-sm md:text-base text-gray-700">
          「先払い買取は違法なのでは？」という不安を持つ方は多いでしょう。このページでは、先払い買取の違法性・合法性を法的根拠に基づいて徹底解説します。
        </p>
      </section>

      {/* 結論を先に */}
      <section className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
        <h2 className="font-bold text-lg mb-3 text-blue-700">📌 結論を先に</h2>
        <div className="space-y-2">
          <div className="bg-white p-4 rounded">
            <p className="font-bold text-green-700 mb-2">✅ 買取方式の先払い買取は合法</p>
            <p className="text-sm text-gray-700">
              商品の授受が伴う実態のある取引であり、古物営業法に基づく正規の買取です。
            </p>
          </div>
          <div className="bg-white p-4 rounded">
            <p className="font-bold text-red-700 mb-2">❌ キャンセル方式の先払い買取は違法の可能性が高い</p>
            <p className="text-sm text-gray-700">
              実質的な金銭の貸借とみなされ、出資法違反（違法金利）の可能性があります。
            </p>
          </div>
        </div>
      </section>

      {/* 2つの取引方式 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">2つの取引方式で違法性が異なる</h2>
        <p className="text-gray-700 mb-4">
          先払い買取には<strong>2つの取引方式</strong>があり、それぞれ法的評価が異なります。
        </p>

        <div className="space-y-4 md:space-y-6">
          {/* 買取方式 */}
          <div className="border-l-4 border-green-400 pl-4">
            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-3 text-green-700">✅ 買取方式（合法）</h3>
            <div className="bg-green-50 p-4 rounded mb-3">
              <h4 className="text-base md:text-lg font-bold mb-2">流れ</h4>
              <ol className="space-y-1 text-sm">
                <li>1. 申込・査定</li>
                <li>2. 契約締結</li>
                <li>3. 振込（先払い）</li>
                <li>4. 商品発送（期限内に必ず送る）</li>
                <li>5. 業者が商品受領 → 取引完了</li>
              </ol>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="text-base md:text-lg font-bold mb-2">特徴</h4>
              <ul className="space-y-1 text-xs md:text-sm text-gray-700">
                <li>• 商品の授受が伴う実態のある取引</li>
                <li>• 古物営業法に基づく合法的な買取</li>
                <li>• 契約後のキャンセルは原則不可</li>
              </ul>
            </div>
          </div>

          {/* キャンセル方式 */}
          <div className="border-l-4 border-red-400 pl-4">
            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-3 text-red-700">❌ キャンセル方式（違法の可能性）</h3>
            <div className="bg-red-50 p-4 rounded mb-3">
              <h4 className="text-base md:text-lg font-bold mb-2">流れ</h4>
              <ol className="space-y-1 text-sm">
                <li>1. 申込・査定</li>
                <li>2. 契約締結</li>
                <li>3. 振込</li>
                <li>4. キャンセル料を支払って契約解除（商品は送らない）</li>
              </ol>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="text-base md:text-lg font-bold mb-2">リスク</h4>
              <ul className="space-y-1 text-xs md:text-sm text-gray-700">
                <li>• 実質的な金銭の貸借</li>
                <li>• 出資法違反の可能性</li>
                <li>• 年利換算で20%を超える違法金利</li>
              </ul>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-3">
              <p className="font-bold text-yellow-700 mb-2">⚠️ 金融庁の注意喚起</p>
              <p className="text-sm text-gray-700">
                「買取契約の解除に伴う違約金やキャンセル料を受領することを目的として運営を行った事業者が、出資法違反などの疑いで摘発される事案が発生しました。」
              </p>
              <a href="https://www.fsa.go.jp/ordinary/chuui/cashing_chuui2.html" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline text-sm mt-2 inline-block">
                → 金融庁の注意喚起を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 法的根拠1: 古物営業法 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">法的根拠1: 古物営業法</h2>
        <div className="bg-gray-50 p-4 rounded mb-4">
          <h3 className="text-base md:text-lg font-bold mb-2">古物営業法 第2条</h3>
          <p className="text-sm text-gray-700">
            「この法律において「古物」とは、一度使用された物品（中古品）若しくは使用されない物品で使用のために取引されたもの又はこれらの物品に幾分の手入れをしたものをいう。」
          </p>
        </div>
        <p className="text-gray-700 mb-4">
          <strong>商品券・ギフトカードは「古物」に該当</strong>するため、買取には古物商許可が必要です。
        </p>

        <div className="bg-gray-50 p-4 rounded">
          <h3 className="text-base md:text-lg font-bold mb-2">古物営業法 第3条</h3>
          <p className="text-sm text-gray-700 mb-2">
            「古物営業を営もうとする者は、営業所ごとに、その営業所の所在地を管轄する都道府県公安委員会の許可を受けなければならない。」
          </p>
          <p className="text-sm text-gray-700 font-bold">
            → 古物商許可番号の記載がない業者は違法営業の可能性が高い
          </p>
        </div>
      </section>

      {/* 法的根拠2: 出資法 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">法的根拠2: 出資法</h2>
        <div className="bg-gray-50 p-4 rounded mb-4">
          <h3 className="text-base md:text-lg font-bold mb-2">出資法 第5条（高金利の処罰）</h3>
          <p className="text-sm text-gray-700">
            「金銭の貸付けを行う者が、年20％を超える割合による利息の契約をしたときは、5年以下の懲役若しくは1,000万円以下の罰金に処し、又はこれを併科する。」
          </p>
        </div>

        <div className="bg-red-50 p-4 rounded">
          <h3 className="text-base md:text-lg font-bold mb-2 text-red-700">キャンセル方式が違法となる理由</h3>
          <p className="text-sm text-gray-700 mb-2">
            <strong>例:</strong> 10万円で買取契約 → 振込9万円 → キャンセル料3万円
          </p>
          <div className="bg-white p-3 rounded mt-2">
            <p className="text-sm text-gray-700 mb-2">
              <strong>実質的な計算:</strong><br />
              受取: 9万円<br />
              返済: 9万円（元金） + 3万円（キャンセル料） = 12万円<br />
              利息: 3万円
            </p>
            <p className="text-sm font-bold text-red-700">
              年利換算: 3万円 ÷ 9万円 ≈ 33% → <strong>出資法違反（年20%超）</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 過去の摘発事例 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">過去の摘発事例</h2>
        <div className="space-y-3 md:space-y-4">
          <div className="border-l-4 border-red-400 pl-4 py-2">
            <h3 className="text-base md:text-lg font-bold mb-2">事例1: キャンセル方式による出資法違反（2023年）</h3>
            <p className="text-sm text-gray-700 mb-2">
              キャンセル料を目的とした先払い買取業者が出資法違反で摘発。実質的な年利が100%を超えていたケース。
            </p>
            <p className="text-sm text-red-700 font-bold">
              容疑: 出資法違反（高金利）
            </p>
          </div>
          <div className="border-l-4 border-red-400 pl-4 py-2">
            <h3 className="text-base md:text-lg font-bold mb-2">事例2: 無許可営業（2024年）</h3>
            <p className="text-sm text-gray-700 mb-2">
              古物商許可を取得せずに先払い買取を営んでいた業者が古物営業法違反で摘発。
            </p>
            <p className="text-sm text-red-700 font-bold">
              容疑: 古物営業法違反（無許可営業）
            </p>
          </div>
        </div>
      </section>

      {/* 安全に利用するために */}
      <section className="bg-primary-50 rounded-lg p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">安全に利用するために</h2>
        <div className="space-y-3">
          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">✅ 必ず確認すべきこと</h3>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary-600">1.</span>
                <span><strong>古物商許可番号が明記されているか</strong>（記載がない業者は違法営業の可能性）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600">2.</span>
                <span><strong>買取方式か確認</strong>（キャンセル前提の業者は違法の可能性）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600">3.</span>
                <span><strong>運営会社情報が詳細に記載されているか</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600">4.</span>
                <span><strong>口コミを複数サイトで確認</strong></span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">❌ 絶対に利用してはいけない業者</h3>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span>古物商許可番号の記載がない業者</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span>キャンセル前提の取引を提案してくる業者</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span>高額なキャンセル料を請求する業者</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span>運営会社情報が不明瞭な業者</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 内部リンク */}
      <section className="grid grid-cols-2 gap-2 md:gap-4">
        <a href="/ranking/safety" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">安全性重視ランキング →</h3>
          <p className="text-gray-600 text-xs md:text-sm">古物商許可取得済みの安全な業者</p>
        </a>
        <a href="/safety/check" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">悪徳業者の見分け方 →</h3>
          <p className="text-gray-600 text-xs md:text-sm">10項目チェックリストと実際のトラブル事例</p>
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
