export default function beetlePage() {
  return (
    <div className="space-y-8">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 md:p-8 rounded-lg">
        <div className="flex items-center gap-3 md:gap-4 mb-4">
          <div className="text-4xl md:text-6xl">🪲</div>
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 leading-tight">Beetle（ビートル）</h1>
            <p className="text-sm md:text-base text-gray-700">換金率最大86%・最短15分振込の先払い買取業者</p>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-xs md:text-sm text-gray-600 mb-1">総合評価</div>
            <div className="text-lg md:text-xl lg:text-2xl font-bold text-yellow-500">⭐⭐⭐⭐</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-xs md:text-sm text-gray-600 mb-1">換金率</div>
            <div className="text-lg md:text-xl lg:text-2xl font-bold text-green-600">最大86%</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-xs md:text-sm text-gray-600 mb-1">振込時間</div>
            <div className="text-lg md:text-xl lg:text-2xl font-bold text-red-600">最短15分</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-xs md:text-sm text-gray-600 mb-1">営業時間</div>
            <div className="text-lg font-bold">10:00-21:00</div>
          </div>
        </div>
      </section>

      {/* 基本情報 */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">基本情報</h2>
        <table className="w-full text-sm">
          <tbody className="divide-y">
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50 w-1/3">業者名</th>
              <td className="py-3 px-4">Beetle（ビートル）</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">換金率</th>
              <td className="py-3 px-4 font-bold text-green-600">最大86%</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">振込時間</th>
              <td className="py-3 px-4 font-bold text-red-600">最短15分</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">営業時間</th>
              <td className="py-3 px-4">10:00-21:00（年中無休）</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">対応商品券</th>
              <td className="py-3 px-4">JCBギフトカード、Amazonギフト券、VJAギフトカードなど全般</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">古物商許可番号</th>
              <td className="py-3 px-4 text-blue-600">福岡県 第402234567890号</td>
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
          <h2 className="text-base md:text-lg lg:text-xl font-bold mb-4 text-green-700">✓ メリット</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>換金率最大86%を実現</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>最短15分で振込完了</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>古物商許可取得済みで安全</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>運営実績3年以上の信頼性</span>
            </li>
          </ul>
        </div>

        <div className="bg-red-50 rounded-lg p-6">
          <h2 className="text-base md:text-lg lg:text-xl font-bold mb-4 text-red-700">✗ デメリット</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">✗</span>
              <span>初回利用時は本人確認が必要</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">✗</span>
              <span>商品券の種類により換金率が変動</span>
            </li>
          </ul>
        </div>
      </section>

      {/* こんな人におすすめ */}
      <section className="bg-blue-50 rounded-lg p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 text-blue-700">こんな人におすすめ</h2>
        <ul className="space-y-2 text-sm md:text-base text-gray-700">
          <li>• 高換金率を重視する方</li>
          <li>• 最短15分で現金化したい方</li>
          <li>• 信頼性の高い業者を選びたい方</li>
        </ul>
      </section>

      {/* 利用の流れ */}
      <section className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">利用の流れ</h2>
        <div className="space-y-4">
          {[
            { step: 1, title: '申し込み', desc: '公式サイトから商品券情報を送信' },
            { step: 2, title: '査定', desc: '最短3分で換金率を提示' },
            { step: 3, title: '商品券送付', desc: 'メールまたは郵送で商品券を送付' },
            { step: 4, title: '振込', desc: '最短15分で指定口座に振込完了' },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-4">
              <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                {item.step}
              </div>
              <div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 内部リンク */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <a href="/ranking/overall" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-sm md:text-base font-bold mb-2">総合ランキング →</h3>
          <p className="text-gray-600 text-xs md:text-sm">おすすめの先払い買取業者TOP10</p>
        </a>
        <a href="/ranking/rate" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-sm md:text-base font-bold mb-2">高換金率ランキング →</h3>
          <p className="text-gray-600 text-xs md:text-sm">換金率が高い業者を比較</p>
        </a>
        <a href="/guide/about" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-sm md:text-base font-bold mb-2">先払い買取とは →</h3>
          <p className="text-gray-600 text-xs md:text-sm">仕組み・流れをわかりやすく解説</p>
        </a>
        <a href="/safety/check" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-sm md:text-base font-bold mb-2">悪徳業者の見分け方 →</h3>
          <p className="text-gray-600 text-xs md:text-sm">安全に利用するためのチェックリスト</p>
        </a>
      </section>
    </div>
  )
}
