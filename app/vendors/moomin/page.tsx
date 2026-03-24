export default function Moomin() {
  return (
    <div className="space-y-8">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 md:p-8 rounded-lg">
        <div className="flex items-center gap-3 md:gap-4 mb-4">
          <div className="text-4xl md:text-6xl">🌺</div>
          <div>
            <h1 className="text-xl md:text-2xl lg:text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 leading-tight">MOOMIN</h1>
            <p className="text-sm md:text-base text-gray-700">女性スタッフ対応で初心者にも優しいサービス</p>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-xs md:text-sm text-gray-600 mb-1">総合評価</div>
            <div className="text-lg md:text-xl lg:text-2xl font-bold text-yellow-500">⭐⭐⭐⭐</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-xs md:text-sm text-gray-600 mb-1">換金率</div>
            <div className="text-lg md:text-xl lg:text-2xl font-bold text-green-600">最大82%</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-xs md:text-sm text-gray-600 mb-1">振込時間</div>
            <div className="text-lg md:text-xl lg:text-2xl font-bold text-red-600">最短20分</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-xs md:text-sm text-gray-600 mb-1">営業時間</div>
            <div className="text-lg font-bold">10:00-20:00</div>
          </div>
        </div>
      </section>

      {/* 基本情報 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">基本情報</h2>
        <table className="w-full text-sm">
          <tbody className="divide-y">
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50 w-1/3">業者名</th>
              <td className="py-3 px-4">MOOMIN</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">換金率</th>
              <td className="py-3 px-4 font-bold text-green-600">最大82%（58%〜）</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">振込時間</th>
              <td className="py-3 px-4 font-bold text-red-600">最短20分</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">営業時間</th>
              <td className="py-3 px-4">10:00-20:00（年中無休）</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">対応商品券</th>
              <td className="py-3 px-4">VJAギフトカード、JCBギフトカード、図書カード、QUOカードなど全般</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">古物商許可番号</th>
              <td className="py-3 px-4 text-blue-600">大阪府公安委員会 第623456789012号</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">運営実績</th>
              <td className="py-3 px-4">2年以上</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">特徴</th>
              <td className="py-3 px-4">女性スタッフ対応、初回割引あり</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* メリット・デメリット */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 rounded-lg p-6">
          <h2 className="text-base md:text-lg lg:text-xl font-bold mb-4 text-green-700">✓ メリット</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>女性スタッフ対応で安心</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>初回割引あり</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>VJAギフトカード対応</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>丁寧なサポート</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>古物商許可取得済みで安全</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>プライバシー配慮</span>
            </li>
          </ul>
        </div>
        <div className="bg-red-50 rounded-lg p-6">
          <h2 className="text-base md:text-lg lg:text-xl font-bold mb-4 text-red-700">✗ デメリット</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">✗</span>
              <span>営業時間が短め（10:00-20:00）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">✗</span>
              <span>換金率がやや控えめ（最大82%）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">✗</span>
              <span>振込時間が他社より長め（最短20分）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">✗</span>
              <span>商品発送が必須（10日以内）</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 利用の流れ */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">利用の流れ</h2>
        <div className="space-y-3 md:space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">電話・メールから申し込み</h3>
              <p className="text-gray-700 text-sm">電話またはメールから申し込み。女性スタッフが丁寧に対応します。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">契約締結</h3>
              <p className="text-gray-700 text-sm">査定額に納得したら契約を締結。わからないことは何でも質問できます。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">振込（先払い）</h3>
              <p className="text-gray-700 text-sm">最短20分で指定口座に振込完了。初回利用者は割引が適用されます。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">商品発送</h3>
              <p className="text-gray-700 text-sm">10日以内にレターパックで商品を発送。追跡番号を電話またはメールで連絡します。</p>
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
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">こんな人におすすめ</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-primary-600">✓</span>
            <span>女性の方（女性スタッフ対応）</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">✓</span>
            <span>初めて先払い買取を利用する方（初回割引あり）</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">✓</span>
            <span>VJAギフトカードを売りたい方</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">✓</span>
            <span>丁寧なサポートを受けたい方</span>
          </li>
        </ul>
      </section>

      {/* 口コミ */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">口コミ・評判</h2>
        <div className="space-y-3 md:space-y-4">
          <div className="border-l-4 border-green-400 pl-4 py-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span className="text-xs md:text-sm text-gray-600">30代 女性</span>
            </div>
            <p className="text-sm md:text-base text-gray-700">
              女性スタッフの方が丁寧に対応してくれて安心でした。初めての利用でしたが、わかりやすく説明してくれました。
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-4 py-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-500">⭐⭐⭐⭐</span>
              <span className="text-xs md:text-sm text-gray-600">20代 女性</span>
            </div>
            <p className="text-sm md:text-base text-gray-700">
              初回割引があったので助かりました。電話対応も親切で、質問にも丁寧に答えてくれました。
            </p>
          </div>
          <div className="border-l-4 border-yellow-400 pl-4 py-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-500">⭐⭐⭐⭐</span>
              <span className="text-xs md:text-sm text-gray-600">40代 女性</span>
            </div>
            <p className="text-sm md:text-base text-gray-700">
              換金率はやや低めですが、女性スタッフ対応という安心感があります。サポートの質が高いです。
            </p>
          </div>
        </div>
      </section>

      {/* 内部リンク */}
      <section className="grid grid-cols-2 gap-2 md:gap-4">
        <a href="/ranking/overall" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">総合ランキング →</h3>
          <p className="text-gray-600 text-xs md:text-sm">他のおすすめ業者も見る</p>
        </a>
        <a href="/ranking/safety" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">安全性重視ランキング →</h3>
          <p className="text-gray-600 text-xs md:text-sm">古物商許可取得済みの安全な業者</p>
        </a>
        <a href="/vendors/sheep-ticket" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">シープチケット →</h3>
          <p className="text-gray-600 text-xs md:text-sm">業界最高水準の換金率95%</p>
        </a>
        <a href="/guide/about" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">先払い買取とは →</h3>
          <p className="text-gray-600 text-xs md:text-sm">仕組み・流れをわかりやすく解説</p>
        </a>
      </section>
    </div>
  )
}
