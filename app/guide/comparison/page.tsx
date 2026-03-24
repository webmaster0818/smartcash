export default function Comparison() {
  const services = [
    { name: '先払い買取', rate: '60〜80%', speed: '最短5分', need: 'クレカ不要', audit: 'なし', legal: '合法' },
    { name: 'Amazon買取', rate: '80〜90%', speed: '30分〜1時間', need: 'クレカ必要', audit: 'なし', legal: '合法' },
    { name: '後払い現金化', rate: '70〜80%', speed: '10〜30分', need: '後払いアプリ', audit: 'あり', legal: 'グレー' },
    { name: 'クレカ現金化', rate: '70〜80%', speed: '10〜30分', need: 'クレカ必要', audit: 'なし', legal: 'グレー' },
    { name: '給料ファクタリング', rate: '70〜85%', speed: '即日〜3日', need: '給与明細', audit: 'あり', legal: '違法の可能性' },
  ]

  return (
    <div className="space-y-8">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 md:p-8 rounded-lg">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">先払い買取と他サービスの違いを徹底比較【2026年最新版】</h1>
        <p className="text-sm md:text-base text-gray-700">
          先払い買取と他の現金化サービス（Amazon買取・後払い現金化・クレカ現金化・給料ファクタリング）の違いを5つの観点から徹底比較します。
        </p>
      </section>

      {/* 一覧比較表 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">5つのサービス 一覧比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">サービス</th>
                <th className="px-4 py-3 text-center">換金率</th>
                <th className="px-4 py-3 text-center">振込時間</th>
                <th className="px-4 py-3 text-center">必要なもの</th>
                <th className="px-4 py-3 text-center">審査</th>
                <th className="px-4 py-3 text-center">法的評価</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {services.map((service, index) => (
                <tr key={index} className={index === 0 ? 'bg-primary-50 font-bold' : 'hover:bg-gray-50'}>
                  <td className="px-4 py-3">{service.name}</td>
                  <td className="px-4 py-3 text-center">{service.rate}</td>
                  <td className="px-4 py-3 text-center">{service.speed}</td>
                  <td className="px-4 py-3 text-center">{service.need}</td>
                  <td className="px-4 py-3 text-center">{service.audit}</td>
                  <td className="px-4 py-3 text-center">{service.legal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs md:text-xs md:text-sm text-gray-600 mt-3 md:mt-4">
          ※ 先払い買取が最も法的リスクが低く、審査なしで利用できます。
        </p>
      </section>

      {/* 1. 先払い買取 vs Amazon買取 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">1. 先払い買取 vs Amazon買取</h2>
        <div className="space-y-3 md:space-y-4">
          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">換金率</h3>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-bold mb-1">先払い買取: 60〜80%</p>
                <p className="text-xs md:text-sm text-gray-600">10万円 → 6〜8万円</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <p className="font-bold mb-1 text-green-700">Amazon買取: 80〜90% ✓</p>
                <p className="text-xs md:text-sm text-gray-600">10万円 → 8〜9万円</p>
              </div>
            </div>
            <p className="text-xs md:text-sm text-gray-600 mt-2">→ Amazon買取の方が換金率が高い</p>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">振込時間</h3>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div className="bg-green-50 p-4 rounded">
                <p className="font-bold mb-1 text-green-700">先払い買取: 最短5分 ✓</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-bold mb-1">Amazon買取: 30分〜1時間</p>
              </div>
            </div>
            <p className="text-xs md:text-sm text-gray-600 mt-2">→ 先払い買取の方が速い</p>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">必要なもの</h3>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div className="bg-green-50 p-4 rounded">
                <p className="font-bold mb-1 text-green-700">先払い買取: クレカ不要 ✓</p>
                <p className="text-xs md:text-sm text-gray-600">商品券があればOK</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-bold mb-1">Amazon買取: クレカ必要</p>
                <p className="text-xs md:text-sm text-gray-600">Amazonギフト券を購入</p>
              </div>
            </div>
            <p className="text-xs md:text-sm text-gray-600 mt-2">→ クレカがない方は先払い買取のみ利用可能</p>
          </div>

          <div className="bg-blue-50 p-3 md:p-4 rounded">
            <h3 className="text-base md:text-lg font-bold mb-2">どちらを選ぶべき？</h3>
            <ul className="space-y-1 text-sm">
              <li><strong>先払い買取:</strong> クレカなし・最短で現金化したい・手元に商品券がある</li>
              <li><strong>Amazon買取:</strong> クレカあり・高換金率重視・商品発送の手間を省きたい</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. 先払い買取 vs 後払い現金化 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">2. 先払い買取 vs 後払い現金化</h2>
        <div className="space-y-3 md:space-y-4">
          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">審査</h3>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div className="bg-green-50 p-4 rounded">
                <p className="font-bold mb-1 text-green-700">先払い買取: 審査なし ✓</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-bold mb-1">後払い現金化: 審査あり</p>
                <p className="text-xs md:text-sm text-gray-600">後払いアプリの審査</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">金融ブラックの利用</h3>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div className="bg-green-50 p-4 rounded">
                <p className="font-bold mb-1 text-green-700">先払い買取: OK ✓</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-bold mb-1">後払い現金化: NG</p>
                <p className="text-xs md:text-sm text-gray-600">審査に通らない</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">法的リスク</h3>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div className="bg-green-50 p-4 rounded">
                <p className="font-bold mb-1 text-green-700">先払い買取: 低（合法） ✓</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded">
                <p className="font-bold mb-1 text-yellow-700">後払い現金化: 中（グレー）</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-3 md:p-4 rounded">
            <h3 className="text-base md:text-lg font-bold mb-2">どちらを選ぶべき？</h3>
            <ul className="space-y-1 text-sm">
              <li><strong>先払い買取:</strong> 金融ブラック・審査なしで利用したい・法的リスクを避けたい</li>
              <li><strong>後払い現金化:</strong> 後払いアプリを持っている・与信枠に余裕がある</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. 先払い買取 vs クレカ現金化 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">3. 先払い買取 vs クレジットカード現金化</h2>
        <div className="space-y-3 md:space-y-4">
          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">クレジットカードの必要性</h3>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div className="bg-green-50 p-4 rounded">
                <p className="font-bold mb-1 text-green-700">先払い買取: 不要 ✓</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-bold mb-1">クレカ現金化: 必要</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">規約違反のリスク</h3>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div className="bg-green-50 p-4 rounded">
                <p className="font-bold mb-1 text-green-700">先払い買取: なし ✓</p>
              </div>
              <div className="bg-red-50 p-4 rounded">
                <p className="font-bold mb-1 text-red-700">クレカ現金化: あり</p>
                <p className="text-xs md:text-sm text-gray-600">カード会社の規約違反</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-3 md:p-4 rounded">
            <h3 className="text-base md:text-lg font-bold mb-2">どちらを選ぶべき？</h3>
            <ul className="space-y-1 text-sm">
              <li><strong>先払い買取:</strong> クレカなし・カード利用停止のリスクを避けたい・規約違反を避けたい</li>
              <li><strong>クレカ現金化:</strong> クレカあり・ショッピング枠に余裕がある</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. 先払い買取 vs 給料ファクタリング */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">4. 先払い買取 vs 給料ファクタリング</h2>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
          <p className="font-bold text-red-700 mb-2">⚠️ 給料ファクタリングは金融庁が違法性を指摘</p>
          <p className="text-sm text-gray-700">
            金融庁は「給料ファクタリングは実質的な金銭の貸借であり、貸金業登録が必要」と注意喚起しています。
          </p>
        </div>

        <div className="space-y-3 md:space-y-4">
          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">在籍確認</h3>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div className="bg-green-50 p-4 rounded">
                <p className="font-bold mb-1 text-green-700">先払い買取: なし ✓</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-bold mb-1">給料ファクタリング: あり</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">法的リスク</h3>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div className="bg-green-50 p-4 rounded">
                <p className="font-bold mb-1 text-green-700">先払い買取: 低（合法） ✓</p>
              </div>
              <div className="bg-red-50 p-4 rounded">
                <p className="font-bold mb-1 text-red-700">給料ファクタリング: 高（違法の可能性）</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-3 md:p-4 rounded">
            <h3 className="text-base md:text-lg font-bold mb-2">結論</h3>
            <p className="text-sm">
              給料ファクタリングは違法性が指摘されているため、利用を推奨しません。先払い買取なら在籍確認なし・法的リスクも低いです。
            </p>
          </div>
        </div>
      </section>

      {/* 最終結論 */}
      <section className="bg-primary-50 rounded-lg p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">最終結論</h2>
        <div className="space-y-3">
          <div>
            <h3 className="text-base md:text-lg font-bold mb-2">先払い買取はこんな方におすすめ</h3>
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
                <span>法的リスクを避けたい方</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 内部リンク */}
      <section className="grid grid-cols-2 gap-2 md:gap-4">
        <a href="/ranking/overall" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">おすすめ業者ランキング →</h3>
          <p className="text-gray-600 text-xs md:text-sm">安全に利用できる業者TOP10</p>
        </a>
        <a href="/guide/merit" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">メリット・デメリット →</h3>
          <p className="text-gray-600 text-xs md:text-sm">詳しく解説</p>
        </a>
        <a href="/guide/about" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">先払い買取とは →</h3>
          <p className="text-gray-600 text-xs md:text-sm">仕組み・流れをわかりやすく解説</p>
        </a>
        <a href="/safety/check" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">悪徳業者の見分け方 →</h3>
          <p className="text-gray-600 text-xs md:text-sm">安全に利用するためのチェックリスト</p>
        </a>
      </section>
    </div>
  )
}
