// power-assert の読み込む
const assert = require('power-assert')
// 今回のテスト対象ファイルを読み込む
const Todo = require('../../../models/Todo')

// Todo.findAll に対するテストコードを実装
describe('Todo.findAll', () => {
  it('Todo.findAll はメソッドである', () => {
    assert.equal(typeof Todo.findAll === 'function', true)
  })

  it('決められたデータ構造でデータが格納されている', () => {
    const todos = Todo.findAll()
    assert.equal(Array.isArray(todos), true)
    assert.equal(todos.length > 0, true)
    todos.forEach(todo => {
      assert.deepEqual(todo, {
        id: todo.id,
        title: todo.title,
        body: todo.body,
        createdAt: todo.createdAt,
        updatedAt: todo.updatedAt
      })
    })
  })
})
