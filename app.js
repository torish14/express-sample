// express の使用宣言
const express = require('express')
// ルーティング実装オブジェクトを読み込む
const router = require('./router/index')

// express() でexpressが提供している機能を利用できるオブジェクトを取得する
const app = express()
const PORT = 3000

// app.set で指定する設定値は、全体で使われるので早い段階で設定しておく
app.set('view engine', 'ejs')

// express.static('public) で public ディレクトリを静的ファイル読み読み込みのルートパスに指定する
app.use(express.static('public'))

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
