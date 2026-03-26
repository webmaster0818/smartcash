export default function Baichike() {
  return (
    <div className="space-y-8">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 md:p-8 rounded-lg">
        <div className="flex items-center gap-3 md:gap-4 mb-4">
          <div className="text-4xl md:text-6xl">🎫</div>
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 leading-tight">バイチケ</h1>
            <p className="text-sm md:text-base text-gray-700">24時間365日対応、LINE完結の先払い買取</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-center">
          <div className="bg-white p-3 md:p-4 rounded">
            <div className="text-xs md:text-sm text-gray-600 mb-1">換金率</div>
            <div className="text-base md:text-lg lg:text-xl font-bold text-green-600">最大60%</div>
          </div>
          <div className="bg-white p-3 md:p-4 rounded">
            <div className="text-xs md:text-sm text-gray-600 mb-1">振込時間</div>
            <div className="text-base md:text-lg lg:text-xl font-bold text-red-600">最短10分</div>
          </div>
          <div className="bg-white p-3 md:p-4 rounded">
            <div className="text-xs md:text-sm text-gray-600 mb-1">営業時間</div>
            <div className="text-base md:text-lg lg:text-xl font-bold">24時間</div>
          </div>
          <div className="bg-white p-3 md:p-4 rounded">
            <div className="text-xs md:text-sm text-gray-600 mb-1">対応金額</div>
            <div className="text-base md:text-lg lg:text-xl font-bold">1万〜10万円</div>
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <section className="bg-white p-4 md:p-6 rounded-lg shadow">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">バイチケの特徴</h2>
        <ul className="space-y-3 text-sm md:text-base">
          <li className="flex items-start gap-2">
            <span className="text-primary-600 font-bold">✓</span>
            <span>24時間365日営業で深夜・早朝でも対応可能</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 font-bold">✓</span>
            <span>LINE完結で最短10分振込</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 font-bold">✓</span>
            <span>商品券・金券・ギフトカード・収入印紙が対象</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 font-bold">✓</span>
            <span>審査・ヒアリングなしで手続き簡単</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 font-bold">✓</span>
            <span>スマホだけで手続き完結</span>
          </li>
        </ul>
      </section>

      {/* 利用の流れ */}
      <section className="bg-white p-4 md:p-6 rounded-lg shadow">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">利用の流れ</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base">1</div>
            <div>
              <h3 className="font-bold mb-1 text-sm md:text-base">LINE友だち追加</h3>
              <p className="text-gray-700 text-xs md:text-sm">バイチケの公式LINEアカウントを友だち追加して買取査定を依頼</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base">2</div>
            <div>
              <h3 className="font-bold mb-1 text-sm md:text-base">本人確認・査定</h3>
              <p className="text-gray-700 text-xs md:text-sm">身分証明書を提出し、買取希望商品の画像を送信</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base">3</div>
            <div>
              <h3 className="font-bold mb-1 text-sm md:text-base">最短10分で振込</h3>
              <p className="text-gray-700 text-xs md:text-sm">査定完了後、指定銀行口座に買取代金が振り込まれます</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base">4</div>
            <div>
              <h3 className="font-bold mb-1 text-sm md:text-base">商品の後日発送</h3>
              <p className="text-gray-700 text-xs md:text-sm">発送期限内に商品を郵送して取引完了</p>
            </div>
          </div>
        </div>
      </section>

      {/* メリット・デメリット */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow">
          <h2 className="text-lg md:text-xl font-bold mb-4 text-green-600">メリット</h2>
          <ul className="space-y-2 text-sm md:text-base">
            <li>• スマホだけで手続き完結</li>
            <li>• 深夜・早朝でも対応可能</li>
            <li>• 審査が比較的緩いとの評判</li>
            <li>• LINE完結で手軽</li>
          </ul>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow">
          <h2 className="text-lg md:text-xl font-bold mb-4 text-red-600">注意点</h2>
          <ul className="space-y-2 text-sm md:text-base">
            <li>• キャンセル料が高額になる可能性</li>
            <li>• 換金率は時期や金額で変動</li>
            <li>• 契約前に詳細を必ず確認</li>
            <li>• 計画的に利用すること</li>
          </ul>
        </div>
      </section>

      {/* 利用者の声 */}
      <section className="bg-white p-4 md:p-6 rounded-lg shadow">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">利用者の声</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-primary-600 pl-4">
            <p className="text-sm md:text-base text-gray-700 mb-2">「バイチケで全国百貨店共通商品券5万円分を現金化しました。買取率65%で3万2,500円が入金。WEB完結で来店不要なのが助かります。」</p>
            <p className="text-xs md:text-sm text-gray-500">40代女性｜パート</p>
          </div>
          <div className="border-l-4 border-primary-600 pl-4">
            <p className="text-sm md:text-base text-gray-700 mb-2">「バイチケは2回目の利用です。前回の情報が残っているので、今回は申込から7分で振込完了。VJAギフトカード4万円分で2万4,000円でした。」</p>
            <p className="text-xs md:text-sm text-gray-500">30代男性｜フリーランス</p>
          </div>
          <div className="border-l-4 border-primary-600 pl-4">
            <p className="text-sm md:text-base text-gray-700 mb-2">「初めての先払い買取でバイチケを選びました。手順がわからず不安でしたが、LINEで丁寧に案内してもらえて安心でした。3万円分の商品券で1万8,000円、約20分で入金。」</p>
            <p className="text-xs md:text-sm text-gray-500">20代男性｜会社員</p>
          </div>
        </div>
        <p className="text-xs md:text-sm text-gray-500 mt-4">※個人の感想であり、全ての方に同様の結果を保証するものではありません。</p>
      </section>

      {/* 内部リンク */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <a href="/ranking/overall" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-sm md:text-base font-bold mb-2">総合ランキング →</h3>
          <p className="text-gray-600 text-xs md:text-sm">おすすめの先払い買取業者TOP20</p>
        </a>
        <a href="/ranking/speed" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition min-h-[80px]">
          <h3 className="text-sm md:text-base font-bold mb-2">最短振込ランキング →</h3>
          <p className="text-gray-600 text-xs md:text-sm">最短5分で振込完了する業者TOP10</p>
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
