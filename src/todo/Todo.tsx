import './scss/buttons.scss'
import './scss/list.scss'
import './Todo.scss'

import TodoHeader from './todo-header/TodoHeader'
import TodoOutput from './todo-output/TodoOuptup'

function Todo() {
  return (
    <>
      <div className="wrapper">
        <div className="todo">
          <TodoHeader/>
          <TodoOutput/>
        </div>
      </div>
    </>
  )
}

export default Todo
