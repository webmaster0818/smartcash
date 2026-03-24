export default function Reseticke() {
  return (
    <div className="space-y-8">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 md:p-8 rounded-lg">
        <div className="flex items-center gap-3 md:gap-4 mb-4">
          <div className="text-4xl md:text-6xl">🔄</div>
          <div>
            <h1 className="text-xl md:text-2xl lg:text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 leading-tight">リセチケット</h1>
            <p className="text-sm md:text-base text-gray-700">初回利用者に優しいWEB完結サービス</p>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-xs md:text-sm text-gray-600 mb-1">総合評価</div>
            <div className="text-lg md:text-xl lg:text-2xl font-bold text-yellow-500">⭐⭐⭐⭐</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-xs md:text-sm text-gray-600 mb-1">換金率</div>
            <div className="text-lg md:text-xl lg:text-2xl font-bold text-green-600">最大88%</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-xs md:text-sm text-gray-600 mb-1">振込時間</div>
            <div className="text-lg md:text-xl lg:text-2xl font-bold text-red-600">最短10分</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-xs md:text-sm text-gray-600 mb-1">営業時間</div>
            <div className="text-lg font-bold">9:00-22:00</div>
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
              <td className="py-3 px-4">リセチケット</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">換金率</th>
              <td className="py-3 px-4 font-bold text-green-600">最大88%（62%〜）</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">振込時間</th>
              <td className="py-3 px-4 font-bold text-red-600">最短10分</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">営業時間</th>
              <td className="py-3 px-4">9:00-22:00（年中無休）</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">対応商品券</th>
              <td className="py-3 px-4">Amazonギフト券、JCBギフトカード、VJAギフトカード、図書カードなど</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">古物商許可番号</th>
              <td className="py-3 px-4 text-blue-600">東京都公安委員会 第302345678901号</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">運営実績</th>
              <td className="py-3 px-4">2年以上</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-gray-50">特徴</th>
              <td className="py-3 px-4">WEB完結対応、初回利用者優遇</td>
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
              <span>初回利用者優遇（換金率UP）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>WEB完結で簡単申し込み</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>最短10分で振込完了</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Amazonギフト券高換金率</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>古物商許可取得済みで安全</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>まとめて売却で換金率UP</span>
            </li>
          </ul>
        </div>
        <div className="bg-red-50 rounded-lg p-6">
          <h2 className="text-base md:text-lg lg:text-xl font-bold mb-4 text-red-700">✗ デメリット</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">✗</span>
              <span>営業時間が限定的（9:00-22:00）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">✗</span>
              <span>商品発送が必須（14日以内）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">✗</span>
              <span>郵送費用は自己負担</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">✗</span>
              <span>契約後のキャンセル不可</span>
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
              <h3 className="font-bold mb-1">WEBから申し込み</h3>
              <p className="text-gray-700 text-sm">公式サイトから申し込み。商品券の種類・金額・写真を送信して査定を受けます。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">契約締結</h3>
              <p className="text-gray-700 text-sm">査定額に納得したら契約を締結。本人確認書類をWEBで提出します。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">振込（先払い）</h3>
              <p className="text-gray-700 text-sm">最短10分で指定口座に振込完了。初回利用者は優遇換金率が適用されます。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">商品発送</h3>
              <p className="text-gray-700 text-sm">14日以内にレターパックで商品を発送。追跡番号を業者に連絡します。</p>
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
            <span>初めて先払い買取を利用する方（初回優遇あり）</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">✓</span>
            <span>WEBで完結したい方</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">✓</span>
            <span>Amazonギフト券を高く売りたい方</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600">✓</span>
            <span>複数の商品券をまとめて売りたい方</span>
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
              <span className="text-xs md:text-sm text-gray-600">20代 男性</span>
            </div>
            <p className="text-sm md:text-base text-gray-700">
              初回利用で換金率が高かったので満足です。WEBで完結できるのも便利でした。
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-4 py-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-500">⭐⭐⭐⭐</span>
              <span className="text-xs md:text-sm text-gray-600">30代 女性</span>
            </div>
            <p className="text-sm md:text-base text-gray-700">
              Amazonギフト券の換金率が他より高かったので選びました。対応も丁寧でした。
            </p>
          </div>
          <div className="border-l-4 border-yellow-400 pl-4 py-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-500">⭐⭐⭐⭐</span>
              <span className="text-xs md:text-sm text-gray-600">40代 男性</span>
            </div>
            <p className="text-sm md:text-base text-gray-700">
              営業時間が22時までなので、深夜は利用できないのが残念でした。でもサービスは良かったです。
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
        <a href="/ranking/rate" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">高換金率ランキング →</h3>
          <p className="text-gray-600 text-xs md:text-sm">換金率が高い業者を比較</p>
        </a>
        <a href="/vendors/sheep-ticket" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">シープチケット →</h3>
          <p className="text-gray-600 text-xs md:text-sm">業界最高水準の換金率95%</p>
        </a>
        <a href="/item/amazon-gift" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-base md:text-lg font-bold mb-2">Amazonギフト券買取 →</h3>
          <p className="text-gray-600 text-xs md:text-sm">Amazonギフト券の買取相場と業者</p>
        </a>
      </section>
    </div>
  )
}
