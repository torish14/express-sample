// express の使用宣言
const express = require('express')
// ルーティング実装オブジェクトを読み込む
const router = require('./router/index')

// express() でexpressが提供している機能を利用できるオブジェクトを取得する
const app = express()
const PORT = 3000

// router を使うときは app.get の代わりに app.use を使う
// 第一引数にはパス、第二引数にはルーティング処理を実装したオブジェクト
app.use('/', router)

// app.get('/', コールバック関数)で、ルートに HTTP メソッドの GET を使ってリクエストが来たときの処理を実装する
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(ポート番号、 コールバック関数)で、指定したポート番号でWebサーバを起動する
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})
