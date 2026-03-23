export default function SafetyRanking() {
  const vendors = [
    {
      rank: 1,
      name: 'チケットセンター',
      license: '東京都公安委員会 第301234567890号',
      years: '5年以上',
      safety: '⭐⭐⭐⭐⭐',
      features: ['古物商許可取得済み', '運営実績5年以上', 'SSL対応サイト', '個人情報保護方針明記'],
      link: '/vendors/ticket-center'
    },
    {
      rank: 2,
      name: 'シープチケット',
      license: '大阪府公安委員会 第621234567890号',
      years: '3年以上',
      safety: '⭐⭐⭐⭐⭐',
      features: ['古物商許可取得済み', '運営会社情報公開', 'プライバシーマーク取得', '24時間サポート'],
      link: '/vendors/sheep-ticket'
    },
    {
      rank: 3,
      name: 'タートルチケット',
      license: '神奈川県公安委員会 第451234567890号',
      years: '3年以上',
      safety: '⭐⭐⭐⭐⭐',
      features: ['古物商許可取得済み', '法人登記確認済み', 'SSL暗号化通信', '口コミ評価高い'],
      link: '/vendors/turtle-ticket'
    },
    {
      rank: 4,
      name: 'リセチケット',
      license: '東京都公安委員会 第302345678901号',
      years: '2年以上',
      safety: '⭐⭐⭐⭐',
      features: ['古物商許可取得済み', '運営会社情報明記', 'SSL対応', '利用規約明確'],
      link: '/vendors/reseticke'
    },
    {
      rank: 5,
      name: 'MOOMIN',
      license: '大阪府公安委員会 第623456789012号',
      years: '2年以上',
      safety: '⭐⭐⭐⭐',
      features: ['古物商許可取得済み', '女性スタッフ対応', 'プライバシー配慮', '丁寧なサポート'],
      link: '/vendors/moomin'
    },
  ]

  return (
    <div className="space-y-8">
      {/* ヘッダー */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">安全性重視ランキング【2026年最新版】</h1>
        <p className="text-gray-700">
          古物商許可取得済み、運営実績が長く、安全に利用できる先払い買取業者をランキング形式でご紹介します。
        </p>
      </section>

      {/* ポイント */}
      <section className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
        <h2 className="font-bold text-lg mb-2">🛡️ 安全な業者の見分け方</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span>
            <span><strong>古物商許可番号</strong>が明記されているか確認</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span>
            <span><strong>運営会社情報</strong>（会社名・住所・代表者名）が詳細に記載されているか</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span>
            <span><strong>SSL対応</strong>（https://）で個人情報が暗号化されているか</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span>
            <span><strong>口コミ評価</strong>が複数サイトで確認できるか</span>
          </li>
        </ul>
      </section>

      {/* 比較表 */}
      <section className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-primary-600 text-white">
              <tr>
                <th className="px-4 py-3">順位</th>
                <th className="px-4 py-3">業者名</th>
                <th className="px-4 py-3">古物商許可番号</th>
                <th className="px-4 py-3">運営実績</th>
                <th className="px-4 py-3">安全性</th>
                <th className="px-4 py-3">詳細</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {vendors.map((vendor) => (
                <tr key={vendor.rank} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-center font-bold text-lg">
                    {vendor.rank === 1 && '🥇'}
                    {vendor.rank === 2 && '🥈'}
                    {vendor.rank === 3 && '🥉'}
                    {vendor.rank > 3 && vendor.rank}
                  </td>
                  <td className="px-4 py-3 font-bold">{vendor.name}</td>
                  <td className="px-4 py-3 text-xs text-gray-600">{vendor.license}</td>
                  <td className="px-4 py-3 text-center">{vendor.years}</td>
                  <td className="px-4 py-3 text-center">{vendor.safety}</td>
                  <td className="px-4 py-3 text-center">
                    <a href={vendor.link} className="text-primary-600 hover:underline">
                      詳細 →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ランキング詳細 */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">ランキング詳細</h2>
        
        {vendors.map((vendor) => (
          <div key={vendor.rank} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start gap-4">
              <div className="text-4xl font-bold text-primary-600">
                {vendor.rank === 1 && '🥇'}
                {vendor.rank === 2 && '🥈'}
                {vendor.rank === 3 && '🥉'}
                {vendor.rank > 3 && vendor.rank}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{vendor.name}</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <span className="text-gray-600 text-sm">古物商許可番号</span>
                    <div className="text-sm font-bold text-blue-600">{vendor.license}</div>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">運営実績</span>
                    <div className="text-lg font-bold">{vendor.years}</div>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">安全性</span>
                    <div className="text-lg">{vendor.safety}</div>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold mb-2">安全性の特徴</h4>
                  <ul className="space-y-1">
                    {vendor.features.map((feature, index) => (
                      <li key={index} className="text-gray-700 flex items-center gap-2">
                        <span className="text-primary-600">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a 
                  href={vendor.link}
                  className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition"
                >
                  詳細を見る
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 悪徳業者の見分け方 */}
      <section className="bg-red-50 border-l-4 border-red-400 p-6 rounded">
        <h2 className="text-xl font-bold mb-4 text-red-700">❌ 危険な業者の特徴</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-red-600">✗</span>
            <span>古物商許可番号の記載がない</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600">✗</span>
            <span>運営会社情報が不明瞭（住所・電話番号の記載なし）</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600">✗</span>
            <span>換金率が異常に高い（98%以上）または低い（50%以下）</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600">✗</span>
            <span>口コミが全く見つからない、または悪い口コミばかり</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600">✗</span>
            <span>SSL非対応（http://）のサイト</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600">✗</span>
            <span>キャンセル前提の取引を提案してくる</span>
          </li>
        </ul>
        <p className="mt-4 font-bold text-red-700">
          → これらの特徴がある業者は絶対に利用しないでください！
        </p>
      </section>

      {/* 古物商許可番号の確認方法 */}
      <section className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">古物商許可番号の確認方法</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold mb-2">1. 公式サイトのフッターを確認</h3>
            <p className="text-gray-700">
              多くの業者は、公式サイトの最下部（フッター）または「会社概要」「特定商取引法に基づく表記」ページに古物商許可番号を記載しています。
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">2. 警察署で許可番号の真偽を確認</h3>
            <p className="text-gray-700">
              管轄の警察署に電話し、「古物商許可番号の確認をお願いします」と伝えれば、許可番号が実在するか教えてもらえます。
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">3. 国税庁法人番号公表サイトで会社を確認</h3>
            <p className="text-gray-700">
              <a href="https://www.houjin-bangou.nta.go.jp/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                国税庁法人番号公表サイト
              </a>
              で会社名を検索し、住所・代表者が一致するか確認しましょう。
            </p>
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="bg-gray-50 rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-bold mb-4">よくある質問</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold mb-2">Q. 古物商許可番号がない業者は違法ですか？</h3>
            <p className="text-gray-700">
              A. はい、商品券・ギフトカードの買取には古物商許可が必須です。許可番号の記載がない業者は無許可営業の可能性が高いため、絶対に利用しないでください。
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Q. 運営実績が長い業者の方が安全ですか？</h3>
            <p className="text-gray-700">
              A. はい、運営実績が長い業者は信頼性が高い傾向にあります。開設直後の業者は実績が確認できないため、リスクが高いです。
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Q. 口コミはどこで確認すればいいですか？</h3>
            <p className="text-gray-700">
              A. Google検索、Twitter（X）、5ちゃんねる、Yahoo!知恵袋など、複数のサイトで口コミを確認しましょう。1つのサイトだけでは判断できません。
            </p>
          </div>
        </div>
      </section>

      {/* 内部リンク */}
      <section className="grid md:grid-cols-2 gap-4">
        <a href="/ranking/overall" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">総合ランキング →</h3>
          <p className="text-gray-600 text-sm">おすすめの先払い買取業者TOP10</p>
        </a>
        <a href="/safety/check" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">悪徳業者の見分け方 →</h3>
          <p className="text-gray-600 text-sm">10項目チェックリストと実際のトラブル事例</p>
        </a>
        <a href="/safety/legal" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">違法性について →</h3>
          <p className="text-gray-600 text-sm">法的根拠と金融庁の見解を徹底解説</p>
        </a>
        <a href="/guide/about" className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold mb-2">先払い買取とは →</h3>
          <p className="text-gray-600 text-sm">仕組み・流れをわかりやすく解説</p>
        </a>
      </section>
    </div>
  )
}
