export default function TicketCenter() {
  return (
    <div className="space-y-8">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-lg">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-6xl">🏢</div>
          <div>
            <h1 className="text-3xl font-bold mb-2">チケットセンター</h1>
            <p className="text-gray-700">運営実績5年以上の安心と信頼の老舗業者</p>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-600 mb-1">総合評価</div>
            <div className="text-2xl font-bold text-yellow-500">⭐⭐⭐⭐⭐</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-600 mb-1">換金率</div>
            <div className="text-2xl font-bold text-green-600">最大85%</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-600 mb-1">振込時間</div>
            <div className="text-2xl font-bold text-red-600">最短15分</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-600 mb-1">営業時間</div>
            <div className="text-lg font-bold">9:00-21:00</div>
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
              <td className="py-3 px-4">チケットセンター</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">換金率</th>
              <td className="py-3 px-4 font-bold text-green-600">最大85%（60%〜）</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">振込時間</th>
              <td className="py-3 px-4 font-bold text-red-600">最短15分</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">営業時間</th>
              <td className="py-3 px-4">9:00-21:00（年中無休）</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">対応商品券</th>
              <td className="py-3 px-4">JCBギフトカード、VJAギフトカード、UCギフトカード、図書カード、QUOカードなど全般</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">古物商許可番号</th>
              <td className="py-3 px-4 text-blue-600">東京都公安委員会 第301234567890号</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">運営実績</th>
              <td className="py-3 px-4 font-bold text-green-600">5年以上</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">特徴</th>
              <td className="py-3 px-4">安全性重視、丁寧なサポート</td>
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
              <span>運営実績5年以上で信頼性が高い</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>古物商許可取得済みで安全</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>丁寧なサポート対応</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>JCBギフトカード高換金率</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>SSL対応サイトで個人情報保護</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>法人登記確認済み</span>
            </li>
          </ul>
        </div>
        <div className="bg-red-50 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-red-700">✗ デメリット</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">✗</span>
              <span>営業時間が限定的（9:00-21:00）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">✗</span>
              <span>換金率がやや控えめ（最大85%）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">✗</span>
              <span>商品発送が必須（15日以内）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">✗</span>
              <span>郵送費用は自己負担</span>
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
              <h3 className="font-bold mb-1">電話・WEBから申し込み</h3>
              <p className="text-gray-700 text-sm">電話または公式サイトから申し込み。商品券の種類・金額を伝えて査定を受けます。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">契約締結</h3>
              <p className="text-gray-700 text-sm">査定額に納得したら契約を締結。丁寧に説明してくれるので初心者でも安心です。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">振込（先払い）</h3>
              <p className="text-gray-700 text-sm">最短15分で指定口座に振込完了。安定した振込速度が魅力です。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">商品発送</h3>
              <p className="text-gray-700 text-sm">15日以内にレターパックで商品を発送。追跡番号を電話またはメールで連絡します。</p>
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
            <span>安全性を最優先したい方（運営実績5年以上）</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">✓</span>
            <span>丁寧なサポートを受けたい方</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">✓</span>
            <span>JCBギフトカードを高く売りたい方</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">✓</span>
            <span>電話で相談しながら申し込みたい方</span>
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
              <span className="text-sm text-gray-600">50代 男性</span>
            </div>
            <p className="text-gray-700">
              運営実績が長いので安心して利用できました。電話対応も丁寧で、初めてでも安心でした。
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-4 py-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span className="text-sm text-gray-600">40代 女性</span>
            </div>
            <p className="text-gray-700">
              JCBギフトカードの換金率が高かったです。サポートが丁寧で、わからないことも親切に教えてくれました。
            </p>
          </div>
          <div className="border-l-4 border-yellow-400 pl-4 py-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-500">⭐⭐⭐⭐</span>
              <span className="text-sm text-gray-600">30代 男性</span>
            </div>
            <p className="text-gray-700">
              換金率は他より少し低めですが、安全性を考えると妥当だと思います。信頼できる業者です。
            </p>
          </div>
        </div>
      </section>

      {/* 内部リンク */}
      <section className="grid md:grid-cols-2 gap-4">
        <a href="/ranking/safety" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">安全性重視ランキング →</h3>
          <p className="text-gray-600 text-sm">古物商許可取得済みの安全な業者</p>
        </a>
        <a href="/ranking/overall" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">総合ランキング →</h3>
          <p className="text-gray-600 text-sm">他のおすすめ業者も見る</p>
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
