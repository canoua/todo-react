import './scss/buttons.scss'
import './scss/list.scss'
import './Todo.scss'

import TodoHeader from './todo-header/TodoHeader'
import TodoOutput from './todo-output/TodoOutput'
import styled from 'styled-components'

function Todo() {
  const Wrapper = styled.div `
    padding-top: 30px;
    display: flex;
    justify-content: center;
  `

  const Todo = styled.div `
    width: 40%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `

  return (
    <>
      <Wrapper>
        <Todo>
          <TodoHeader/>
          <TodoOutput/>
        </Todo>
      </Wrapper>
    </>
  )
}

export default Todo
