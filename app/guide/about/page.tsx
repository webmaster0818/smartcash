export default function About() {
  return (
    <div className="space-y-8">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">先払い買取とは？仕組み・流れを徹底解説【2026年最新版】</h1>
        <p className="text-gray-700">
          商品券・ギフトカードを売却し、商品を送る前に代金を受け取れる「先払い買取」の仕組み・流れ・メリットをわかりやすく解説します。
        </p>
      </section>

      {/* 先払い買取とは */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">先払い買取とは</h2>
        <p className="text-gray-700 mb-4">
          先払い買取とは、<strong>商品券・ギフトカードを売却し、商品を送る「前」に代金を受け取れるサービス</strong>です。
        </p>
        <p className="text-gray-700 mb-4">
          通常の買取（郵送買取）では「商品を送った後」に振込されますが、先払い買取では「商品を送る前」に振込されます。
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
          <p className="font-bold mb-2">💡 ポイント</p>
          <p className="text-gray-700">
            「先払い」という名前ですが、実際には「先に振込を受け取る」という意味です。商品を送る前に現金を手に入れられるため、今すぐ現金が必要な方に人気のサービスです。
          </p>
        </div>
      </section>

      {/* 通常の買取との違い */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">通常の買取との違い</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">項目</th>
                <th className="px-4 py-3 text-center">先払い買取</th>
                <th className="px-4 py-3 text-center">通常の買取（郵送買取）</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-3 font-bold">振込タイミング</td>
                <td className="px-4 py-3 text-center bg-green-50 text-green-700 font-bold">商品発送前</td>
                <td className="px-4 py-3 text-center">商品受領後</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-bold">換金率</td>
                <td className="px-4 py-3 text-center">60〜80%</td>
                <td className="px-4 py-3 text-center bg-green-50 text-green-700 font-bold">80〜95%</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-bold">振込時間</td>
                <td className="px-4 py-3 text-center bg-green-50 text-green-700 font-bold">最短5分</td>
                <td className="px-4 py-3 text-center">1〜3日</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-bold">商品発送</td>
                <td className="px-4 py-3 text-center">7〜30日以内</td>
                <td className="px-4 py-3 text-center bg-green-50 text-green-700 font-bold">査定後すぐ</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-bold">審査</td>
                <td className="px-4 py-3 text-center bg-green-50 text-green-700 font-bold">なし</td>
                <td className="px-4 py-3 text-center">なし</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm mt-4">
          ※ 先払い買取は「スピード重視」、通常の買取は「換金率重視」という特徴があります。
        </p>
      </section>

      {/* 利用の流れ */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">先払い買取の流れ（5ステップ）</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">1</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">申し込み・査定</h3>
              <p className="text-gray-700 mb-2">
                公式サイトから申し込み。商品券の種類・金額・写真を送信して査定を受けます。
              </p>
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-sm text-gray-600">
                  <strong>必要なもの:</strong> 商品券の写真、本人確認書類
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">2</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">契約締結</h3>
              <p className="text-gray-700 mb-2">
                査定額に納得したら契約を締結。本人確認書類を提出し、契約内容を確認します。
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                <p className="text-sm text-gray-700">
                  <strong>重要:</strong> 契約後のキャンセルは原則不可。必ず内容を確認してから契約しましょう。
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">3</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-green-700">振込（先払い）</h3>
              <p className="text-gray-700 mb-2">
                <strong className="text-green-700">最短5分で指定口座に振込完了。</strong>商品を送る前に現金を受け取れます。
              </p>
              <div className="bg-green-50 p-3 rounded">
                <p className="text-sm text-gray-700">
                  <strong>モアタイム対応銀行</strong>なら土日祝日でも即時振込！
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">4</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">商品発送</h3>
              <p className="text-gray-700 mb-2">
                7〜30日以内にレターパックで商品を発送。追跡番号を業者に連絡します。
              </p>
              <div className="bg-red-50 border-l-4 border-red-400 p-3">
                <p className="text-sm text-gray-700">
                  <strong>注意:</strong> 期限内に商品を発送しないと延滞金が発生する場合があります。
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">5</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">取引完了</h3>
              <p className="text-gray-700">
                業者が商品を受領し、追跡番号で配達完了を確認したら取引完了です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* メリット・デメリット */}
      <section>
        <h2 className="text-2xl font-bold mb-4">メリット・デメリット</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-green-700">✓ メリット</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>最短5分で現金化（業界最速）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>審査なし・信用情報の照会なし</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>クレジットカード不要</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>24時間営業の業者あり</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>金融ブラックでも利用可能</span>
              </li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-red-700">✗ デメリット</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span>換金率が低め（60〜80%）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span>商品発送が必須（7〜30日以内）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span>郵送費用は自己負担</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span>契約後のキャンセル不可</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span>悪徳業者も存在</span>
              </li>
            </ul>
          </div>
        </div>
        <a href="/guide/merit" className="inline-block mt-4 text-primary-600 hover:underline">
          → メリット・デメリットの詳細はこちら
        </a>
      </section>

      {/* こんな人におすすめ */}
      <section className="bg-primary-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">こんな人におすすめ</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-primary-600">✓</span>
            <span><strong>今すぐ現金が必要な方</strong>（最短5分で振込完了）</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">✓</span>
            <span><strong>クレジットカードを持っていない方</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">✓</span>
            <span><strong>金融ブラックの方</strong>（審査なし）</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">✓</span>
            <span><strong>在籍確認されたくない方</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">✓</span>
            <span><strong>手元に商品券・ギフトカードがある方</strong></span>
          </li>
        </ul>
      </section>

      {/* 内部リンク */}
      <section className="grid md:grid-cols-2 gap-4">
        <a href="/ranking/overall" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">おすすめ業者ランキング →</h3>
          <p className="text-gray-600 text-sm">安全に利用できる業者TOP10</p>
        </a>
        <a href="/guide/merit" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">メリット・デメリット →</h3>
          <p className="text-gray-600 text-sm">詳しく解説</p>
        </a>
        <a href="/safety/check" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">悪徳業者の見分け方 →</h3>
          <p className="text-gray-600 text-sm">安全に利用するためのチェックリスト</p>
        </a>
        <a href="/guide/comparison" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">他サービスとの違い →</h3>
          <p className="text-gray-600 text-sm">Amazon買取・クレカ現金化などと比較</p>
        </a>
      </section>
    </div>
  )
}
