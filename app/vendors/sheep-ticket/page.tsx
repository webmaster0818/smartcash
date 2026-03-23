export default function SheepTicket() {
  return (
    <div className="space-y-8">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-lg">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-6xl">🐑</div>
          <div>
            <h1 className="text-3xl font-bold mb-2">シープチケット</h1>
            <p className="text-gray-700">業界最高水準の換金率と最短5分振込を実現</p>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-600 mb-1">総合評価</div>
            <div className="text-2xl font-bold text-yellow-500">⭐⭐⭐⭐⭐</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-600 mb-1">換金率</div>
            <div className="text-2xl font-bold text-green-600">最大95%</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-600 mb-1">振込時間</div>
            <div className="text-2xl font-bold text-red-600">最短5分</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-600 mb-1">営業時間</div>
            <div className="text-lg font-bold">24時間</div>
          </div>
        </div>
      </section>

      {/* 基本情報 */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">基本情報</h2>
        <table className="w-full text-sm">
          <tbody className="divide-y">
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50 w-1/3">業者名</th>
              <td className="py-3 px-4">シープチケット</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">換金率</th>
              <td className="py-3 px-4 font-bold text-green-600">最大95%（60%〜）</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">振込時間</th>
              <td className="py-3 px-4 font-bold text-red-600">最短5分</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">営業時間</th>
              <td className="py-3 px-4">24時間営業（年中無休）</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">対応商品券</th>
              <td className="py-3 px-4">JCBギフトカード、Amazonギフト券、VJAギフトカード、図書カードなど全般</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">古物商許可番号</th>
              <td className="py-3 px-4 text-blue-600">大阪府公安委員会 第621234567890号</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">運営実績</th>
              <td className="py-3 px-4">3年以上</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* メリット・デメリット */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-green-700">✓ メリット</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>業界最高水準の換金率（最大95%）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>最短5分で振込完了（業界最速クラス）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>24時間営業で深夜でも対応可能</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>古物商許可取得済みで安全</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>初回利用者でも高換金率</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>モアタイム対応で土日祝日も即時振込</span>
            </li>
          </ul>
        </div>
        <div className="bg-red-50 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-red-700">✗ デメリット</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">✗</span>
              <span>商品発送が必須（7日以内）</span>
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
              <span>商品券の種類により換金率が変動</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 利用の流れ */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">利用の流れ</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">申し込み・査定</h3>
              <p className="text-gray-700 text-sm">公式サイトから申し込み。商品券の写真を送信して査定を受けます。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">契約締結</h3>
              <p className="text-gray-700 text-sm">査定額に納得したら契約を締結。本人確認書類を提出します。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">振込（先払い）</h3>
              <p className="text-gray-700 text-sm">最短5分で指定口座に振込完了。商品を送る前に現金を受け取れます。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">商品発送</h3>
              <p className="text-gray-700 text-sm">7日以内にレターパックで商品を発送。追跡番号を業者に連絡します。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">5</div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">取引完了</h3>
              <p className="text-gray-700 text-sm">業者が商品を受領し、取引完了。</p>
            </div>
          </div>
        </div>
      </section>

      {/* こんな人におすすめ */}
      <section className="bg-primary-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">こんな人におすすめ</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-primary-600">✓</span>
            <span>今すぐ現金が必要な方（最短5分振込）</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">✓</span>
            <span>高換金率を重視する方（最大95%）</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">✓</span>
            <span>深夜や土日祝日に利用したい方（24時間営業）</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">✓</span>
            <span>初めて先払い買取を利用する方（安全性高い）</span>
          </li>
        </ul>
      </section>

      {/* 口コミ */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">口コミ・評判</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-green-400 pl-4 py-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span className="text-sm text-gray-600">30代 男性</span>
            </div>
            <p className="text-gray-700">
              本当に5分で振り込まれました！換金率も95%で満足です。対応も丁寧でした。
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-4 py-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span className="text-sm text-gray-600">40代 女性</span>
            </div>
            <p className="text-gray-700">
              深夜でも対応してくれて助かりました。初めての利用でしたが、丁寧に説明してくれて安心できました。
            </p>
          </div>
          <div className="border-l-4 border-yellow-400 pl-4 py-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-500">⭐⭐⭐⭐</span>
              <span className="text-sm text-gray-600">20代 男性</span>
            </div>
            <p className="text-gray-700">
              換金率は高かったですが、郵送費用が自己負担だったのが少し残念でした。でも全体的には満足です。
            </p>
          </div>
        </div>
      </section>

      {/* 内部リンク */}
      <section className="grid md:grid-cols-2 gap-4">
        <a href="/ranking/overall" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">総合ランキング →</h3>
          <p className="text-gray-600 text-sm">他のおすすめ業者も見る</p>
        </a>
        <a href="/ranking/speed" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">最短振込ランキング →</h3>
          <p className="text-gray-600 text-sm">最速振込の業者を比較</p>
        </a>
        <a href="/guide/about" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">先払い買取とは →</h3>
          <p className="text-gray-600 text-sm">仕組み・流れをわかりやすく解説</p>
        </a>
        <a href="/safety/check" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">悪徳業者の見分け方 →</h3>
          <p className="text-gray-600 text-sm">安全に利用するためのチェックリスト</p>
        </a>
      </section>
    </div>
  )
}
