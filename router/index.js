const express = require('express')
// ルーティング用のオブジェクトを express.Router() で作成して変数に router に代入する
const router = express.Router()

// GET/, GET/about にリクエストがあった場合の処理を router に実装する
router
  .get('/', (req, res) => {
    res.send('トップページ！')
  })
  .get('/about', (req, res) => {
    res.send('アバウトページ！')
  })

// ルーティング処理の実装を行ったルーティングオブジェクトを外部に公開する
module.exports = router
