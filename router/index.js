const express = require('express')
// ルーティング用のオブジェクトを express.Router() で作成して変数に router に代入する
const router = express.Router()

// GET/, GET/about にリクエストがあった場合の処理を router に実装する
router
  .get('/', (req, res) => {
    // テンプレートエンジンを用いる際は、res.send ではなく res.render を使う
    res.render('index', {
      data: 'トップページで使うデータ',
      siteInfo: {
        name: 'Web白熱教室',
        owner: 'つよぽん'
      },
      items: [
        {name: 'アイテム1'},
        {name: 'アイテム2'},
        {name: 'アイテム3'},
      ],
      title: 'トップページのタイトル'
    })
  })
  .get('/about', (req, res) => {
    res.render('about')
  })

// ルーティング処理の実装を行ったルーティングオブジェクトを外部に公開する
module.exports = router
