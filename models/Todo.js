// DB の代わりにデータの保存先として配列を用意
// ここに Todoデータを追加していく
const todos = []

// Todo の ID値として利用
// Todo を作成するたびにインクリメントとして、値が重複しないようにする
let nextId = 1

// DB（今回は配列） に保存するデータの構造を統一するために class を利用
// ダミーDB に格納する 1件ごとのデータ構造
class Todo {
  constructor({ title, body }) {
    this.id = nextId ++
    this.title = title
    this.body = body
    this.createdAt = new Date()
    this.updateAt = new Date()
  }
}

// データを事前に 5件ほどダミーの DB に追加しておく
for (let i = 0; i < 5; i++) {
  const todo = new Todo({
    title: 'タイトル' + i,
    body: '詳細文' + i
  })
  todos.push(todo)
}
// 配列の出力
// console.log(todos);

// ここより上は、プライベート空間。 つまり、外部ファイルから直接アクセスできない

// ここに CRUD機能をつける
// Create(作成), Read(取得), Update(更新), Delete(削除)
module.exports = {
  findAll: () => {
    return todos
  }
}
