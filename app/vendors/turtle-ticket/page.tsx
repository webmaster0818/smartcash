export default function TurtleTicket() {
  return (
    <div className="space-y-8">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-lg">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-6xl">🐢</div>
          <div>
            <h1 className="text-3xl font-bold mb-2">タートルチケット</h1>
            <p className="text-gray-700">安定した高換金率と24時間営業で安心のサービス</p>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-600 mb-1">総合評価</div>
            <div className="text-2xl font-bold text-yellow-500">⭐⭐⭐⭐⭐</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-600 mb-1">換金率</div>
            <div className="text-2xl font-bold text-green-600">最大90%</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-600 mb-1">振込時間</div>
            <div className="text-2xl font-bold text-red-600">最短10分</div>
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
              <td className="py-3 px-4">タートルチケット</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">換金率</th>
              <td className="py-3 px-4 font-bold text-green-600">最大90%（65%〜）</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">振込時間</th>
              <td className="py-3 px-4 font-bold text-red-600">最短10分</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">営業時間</th>
              <td className="py-3 px-4">24時間営業（年中無休）</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">対応商品券</th>
              <td className="py-3 px-4">JCBギフトカード、Amazonギフト券、VJAギフトカード、図書カード、QUOカードなど全般</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">古物商許可番号</th>
              <td className="py-3 px-4 text-blue-600">神奈川県公安委員会 第451234567890号</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">運営実績</th>
              <td className="py-3 px-4">3年以上</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">特徴</th>
              <td className="py-3 px-4">LINE完結対応、土日祝日も対応</td>
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
              <span>安定した高換金率（最大90%）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>最短10分で振込完了</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>24時間営業で深夜でも対応可能</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>LINE完結で簡単に申し込み可能</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>古物商許可取得済みで安全</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>土日祝日も対応</span>
            </li>
          </ul>
        </div>
        <div className="bg-red-50 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-red-700">✗ デメリット</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">✗</span>
              <span>商品発送が必須（10日以内）</span>
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
              <h3 className="font-bold mb-1">LINE・WEBから申し込み</h3>
              <p className="text-gray-700 text-sm">公式LINEまたはWEBサイトから申し込み。商品券の写真を送信して査定を受けます。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">契約締結</h3>
              <p className="text-gray-700 text-sm">査定額に納得したら契約を締結。本人確認書類をLINEまたはWEBで提出します。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">振込（先払い）</h3>
              <p className="text-gray-700 text-sm">最短10分で指定口座に振込完了。商品を送る前に現金を受け取れます。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">商品発送</h3>
              <p className="text-gray-700 text-sm">10日以内にレターパックで商品を発送。追跡番号をLINEで連絡します。</p>
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
            <span>LINEで簡単に申し込みたい方</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">✓</span>
            <span>安定した高換金率を重視する方（最大90%）</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">✓</span>
            <span>深夜や土日祝日に利用したい方（24時間営業）</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">✓</span>
            <span>迅速な振込を希望する方（最短10分）</span>
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
              <span className="text-sm text-gray-600">30代 女性</span>
            </div>
            <p className="text-gray-700">
              LINEで完結できるのがとても便利でした。換金率も90%で満足です。対応も迅速で丁寧でした。
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-4 py-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span className="text-sm text-gray-600">20代 男性</span>
            </div>
            <p className="text-gray-700">
              土日でも対応してくれて助かりました。10分で振り込まれたので驚きました。
            </p>
          </div>
          <div className="border-l-4 border-yellow-400 pl-4 py-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-500">⭐⭐⭐⭐</span>
              <span className="text-sm text-gray-600">40代 男性</span>
            </div>
            <p className="text-gray-700">
              換金率は高かったですが、郵送期限が10日以内と少し短めでした。でも全体的には良いサービスだと思います。
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
        <a href="/ranking/rate" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">高換金率ランキング →</h3>
          <p className="text-gray-600 text-sm">換金率90%以上の業者を比較</p>
        </a>
        <a href="/vendors/sheep-ticket" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">シープチケット →</h3>
          <p className="text-gray-600 text-sm">業界最高水準の換金率95%</p>
        </a>
        <a href="/safety/check" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">悪徳業者の見分け方 →</h3>
          <p className="text-gray-600 text-sm">安全に利用するためのチェックリスト</p>
        </a>
      </section>
    </div>
  )
}
