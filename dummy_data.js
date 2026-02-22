/**
 * DUMMY_DATA - 美容室SaaSデモ用データ
 * このファイルは app.html より先に読み込んで window.DUMMY_DATA を注入してください。
 *
 * 使用例:
 *   <script src="dummy_data.js"></script>
 *   <script src="app.html"> ← または app.html の <script> タグ内に JSを組み込む
 */

(() => {
  // 今日の日付を基準に相対的な日付を生成するヘルパー
  function daysAgo(n) {
    const d = new Date();
    d.setDate(d.getDate() - n);
    return d.toISOString().split('T')[0];
  }
  function daysLater(n) {
    const d = new Date();
    d.setDate(d.getDate() + n);
    return d.toISOString().split('T')[0];
  }

  window.DUMMY_DATA = {
    /** 前月売上（前月比計算に使用） */
    previousMonthRevenue: 385000,

    /** 今月のLINE送信数 */
    lineSentCount: 12,

    /** ===================== 顧客データ ===================== */
    customers: [
      {
        id: 'c001',
        name: '田中 さくら',
        phone: '090-1234-5678',
        email: 'sakura.tanaka@example.com',
        registeredAt: daysAgo(365),
        memo: '細毛・ダメージ毛。熱処理は140℃以下で。カラーはアッシュ系を好む。',
        tags: ['カラー常連', 'VIP'],
        visits: [
          { date: daysAgo(10),  menu: 'カット + アッシュカラー',    price: 15000, stylist: '山田',  note: '毛先の乾燥が気になるとのこと。トリートメント追加。' },
          { date: daysAgo(75),  menu: 'カラー + トリートメント',    price: 12000, stylist: '山田',  note: '' },
          { date: daysAgo(140), menu: 'カット + カラー',            price: 14000, stylist: '山田',  note: 'ハイライト追加' },
          { date: daysAgo(210), menu: 'カット',                    price:  5500, stylist: '鈴木',  note: '' },
          { date: daysAgo(280), menu: 'パーマ + カット',            price: 18000, stylist: '山田',  note: 'デジタルパーマ。仕上がりに大満足。' },
        ]
      },
      {
        id: 'c002',
        name: '鈴木 美咲',
        phone: '080-9876-5432',
        email: 'misaki.suzuki@example.com',
        registeredAt: daysAgo(200),
        memo: '縮毛矯正を定期的にかけている。前回から明るめのカラーに挑戦中。',
        tags: ['縮毛', 'カラー'],
        visits: [
          { date: daysAgo(100), menu: '縮毛矯正 + カット',          price: 22000, stylist: '佐藤',  note: '' },
          { date: daysAgo(190), menu: 'カット + カラー',            price: 13000, stylist: '佐藤',  note: 'ピンクベージュ。予想以上の仕上がり。' },
        ]
      },
      {
        id: 'c003',
        name: '佐藤 ゆい',
        phone: '070-1111-2222',
        email: 'yui.sato@example.com',
        registeredAt: daysAgo(500),
        memo: 'パーマが得意でないため、毎回カット + トリートメントのみ。',
        tags: ['カット', 'トリートメント'],
        visits: [
          { date: daysAgo(95),  menu: 'カット + トリートメント',    price:  9000, stylist: '山田',  note: '' },
          { date: daysAgo(155), menu: 'トリートメント',             price:  4500, stylist: '鈴木',  note: '' },
          { date: daysAgo(240), menu: 'カット',                    price:  5500, stylist: '山田',  note: '' },
          { date: daysAgo(310), menu: 'カット + トリートメント',    price:  9000, stylist: '山田',  note: '' },
        ]
      },
      {
        id: 'c004',
        name: '伊藤 はな',
        phone: '090-3333-4444',
        email: 'hana.ito@example.com',
        registeredAt: daysAgo(30),
        memo: '初来店。インスタグラムを見て来てくれた新規顧客。',
        tags: ['新規', 'SNS経由'],
        visits: [
          { date: daysAgo(30),  menu: 'カット + ヘッドスパ',        price: 10500, stylist: '佐藤',  note: '初来店。丁寧な接客を心がける。次回もお声がけ。' },
        ]
      },
      {
        id: 'c005',
        name: '渡辺 あおい',
        phone: '080-5555-6666',
        email: 'aoi.watanabe@example.com',
        registeredAt: daysAgo(730),
        memo: 'ホワイトブリーチ施術歴あり。ダメージ大。毎回ケアブリーチ使用。',
        tags: ['ブリーチ', 'VIP', 'カラー常連'],
        visits: [
          { date: daysAgo(110), menu: 'ケアブリーチ + カラー',      price: 25000, stylist: '山田',  note: 'ミルクティーベージュに。SNS投稿OK。' },
          { date: daysAgo(180), menu: 'カラー + トリートメント',    price: 14000, stylist: '山田',  note: '' },
          { date: daysAgo(250), menu: 'ブリーチ + カラー',          price: 23000, stylist: '山田',  note: '' },
          { date: daysAgo(320), menu: 'カット + カラー',            price: 13500, stylist: '山田',  note: '' },
          { date: daysAgo(400), menu: 'カット',                    price:  5500, stylist: '鈴木',  note: '' },
          { date: daysAgo(480), menu: 'パーマ + カット',            price: 17000, stylist: '山田',  note: '' },
        ]
      },
      {
        id: 'c006',
        name: '中村 りこ',
        phone: '070-7777-8888',
        email: 'riko.nakamura@example.com',
        registeredAt: daysAgo(180),
        memo: '黒髪希望。カラーはしない。月1回カットに来るリピーター。',
        tags: ['カット'],
        visits: [
          { date: daysAgo(25),  menu: 'カット',                    price:  5500, stylist: '鈴木',  note: '' },
          { date: daysAgo(55),  menu: 'カット',                    price:  5500, stylist: '鈴木',  note: '' },
          { date: daysAgo(88),  menu: 'カット',                    price:  5500, stylist: '鈴木',  note: '' },
          { date: daysAgo(120), menu: 'カット',                    price:  5500, stylist: '鈴木',  note: '' },
          { date: daysAgo(150), menu: 'カット',                    price:  5500, stylist: '鈴木',  note: '' },
        ]
      },
      {
        id: 'c007',
        name: '山本 えり',
        phone: '090-2222-3333',
        email: 'eri.yamamoto@example.com',
        registeredAt: daysAgo(400),
        memo: '3ヶ月以上来店なし。最終施術：縮毛矯正。リピート促進要対応。',
        tags: ['縮毛', '要フォロー'],
        visits: [
          { date: daysAgo(120), menu: '縮毛矯正',                  price: 20000, stylist: '佐藤',  note: 'リーゼント縮毛。かなりのくせ毛。' },
          { date: daysAgo(230), menu: 'カット + 縮毛矯正',         price: 24000, stylist: '佐藤',  note: '' },
          { date: daysAgo(350), menu: 'カット',                    price:  5500, stylist: '山田',  note: '' },
        ]
      },
      {
        id: 'c008',
        name: '小林 つばさ',
        phone: '080-4444-5555',
        email: 'tsubasa.kobayashi@example.com',
        registeredAt: daysAgo(600),
        memo: '長期間来店なし（約6ヶ月）。引っ越し等の可能性あり。',
        tags: ['要フォロー'],
        visits: [
          { date: daysAgo(185), menu: 'カット + カラー',            price: 13000, stylist: '山田',  note: '' },
          { date: daysAgo(320), menu: 'カラー',                    price:  8000, stylist: '鈴木',  note: '' },
          { date: daysAgo(450), menu: 'カット',                    price:  5500, stylist: '山田',  note: '' },
        ]
      },
      {
        id: 'c009',
        name: '加藤 のぞみ',
        phone: '070-6666-7777',
        email: 'nozomi.kato@example.com',
        registeredAt: daysAgo(90),
        memo: '今月新規来店。ハイトーンカラーご希望。ブリーチ未経験。',
        tags: ['新規', 'カラー'],
        visits: [
          { date: daysAgo(5),   menu: 'カット + ヘアカラー相談',   price:  6000, stylist: '山田',  note: 'ブリーチ初挑戦。次回ケアブリーチ予定。' },
        ]
      },
      {
        id: 'c010',
        name: '松本 あやか',
        phone: '090-8888-9999',
        email: 'ayaka.matsumoto@example.com',
        registeredAt: daysAgo(1100),
        memo: 'VIP顧客。来店頻度高く年間売上TOP。毎回上品なスタイルを好む。',
        tags: ['VIP', 'カラー常連', 'ヘッドスパ'],
        visits: [
          { date: daysAgo(20),  menu: 'カット + カラー + ヘッドスパ', price: 28000, stylist: '山田',  note: 'いつも通り丁寧な施術で大変満足いただいた。' },
          { date: daysAgo(50),  menu: 'ヘッドスパ + トリートメント', price: 12000, stylist: '山田',  note: '' },
          { date: daysAgo(80),  menu: 'カット + カラー',            price: 18000, stylist: '山田',  note: '' },
          { date: daysAgo(110), menu: 'トリートメント',             price:  4500, stylist: '鈴木',  note: '' },
          { date: daysAgo(140), menu: 'カット + カラー + ヘッドスパ', price: 27000, stylist: '山田',  note: '' },
          { date: daysAgo(180), menu: 'カラー',                    price:  9000, stylist: '山田',  note: '' },
        ]
      },
    ],

    /** ===================== 予約データ ===================== */
    appointments: [
      // 今日の予約
      { id: 'appt-001', customerId: 'c001', date: daysAgo(0),  time: '10:00', menu: 'カット + アッシュカラー',    stylist: '山田', status: 'confirmed' },
      { id: 'appt-002', customerId: 'c006', date: daysAgo(0),  time: '11:30', menu: 'カット',                    stylist: '鈴木', status: 'confirmed' },
      { id: 'appt-003', customerId: 'c009', date: daysAgo(0),  time: '14:00', menu: 'ケアブリーチ + カラー',      stylist: '山田', status: 'pending'   },
      { id: 'appt-004', customerId: 'c010', date: daysAgo(0),  time: '16:30', menu: 'ヘッドスパ + トリートメント', stylist: '山田', status: 'confirmed' },

      // 昨日
      { id: 'appt-005', customerId: 'c003', date: daysAgo(1),  time: '10:00', menu: 'カット + トリートメント',    stylist: '山田', status: 'completed' },
      { id: 'appt-006', customerId: 'c004', date: daysAgo(1),  time: '13:00', menu: 'ヘッドスパ',               stylist: '佐藤', status: 'completed' },

      // 明日
      { id: 'appt-007', customerId: 'c002', date: daysLater(1), time: '11:00', menu: '縮毛矯正 + カット',        stylist: '佐藤', status: 'confirmed' },
      { id: 'appt-008', customerId: 'c005', date: daysLater(1), time: '14:00', menu: 'ケアブリーチ + カラー',    stylist: '山田', status: 'confirmed' },

      // 2日後
      { id: 'appt-009', customerId: 'c010', date: daysLater(2), time: '10:00', menu: 'カット + カラー',          stylist: '山田', status: 'confirmed' },
      { id: 'appt-010', customerId: 'c006', date: daysLater(2), time: '15:00', menu: 'カット',                  stylist: '鈴木', status: 'confirmed' },

      // 3日後
      { id: 'appt-011', customerId: 'c001', date: daysLater(3), time: '11:00', menu: 'トリートメント',           stylist: '山田', status: 'confirmed' },

      // 4日後
      { id: 'appt-012', customerId: 'c003', date: daysLater(4), time: '10:30', menu: 'カット',                  stylist: '山田', status: 'pending'   },
      { id: 'appt-013', customerId: 'c004', date: daysLater(4), time: '13:30', menu: 'カット + カラー',          stylist: '佐藤', status: 'confirmed' },

      // 5日後
      { id: 'appt-014', customerId: 'c009', date: daysLater(5), time: '12:00', menu: 'ケアブリーチ',             stylist: '山田', status: 'confirmed' },

      // 6日後
      { id: 'appt-015', customerId: 'c002', date: daysLater(6), time: '11:00', menu: 'カラー',                  stylist: '佐藤', status: 'pending'   },
    ]
  };

  console.log('[SalonOS] DUMMY_DATA loaded:', {
    customers: window.DUMMY_DATA.customers.length,
    appointments: window.DUMMY_DATA.appointments.length,
  });
})();
