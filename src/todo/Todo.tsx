import './scss/buttons.scss'
import './scss/list.scss'
import './Todo.scss'

import TodoHeader from './TodoHeader'
import TodoOutput from './TodoOutput'
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
    @media(max-width: 991px) {
      width: 60%;
    }
    @media(max-width: 767px) {
      width: 75%;
    }
    @media(max-width: 575px) {
      width: 100%;
      margin-bottom: 30px;
      justify-content: flex-start;
      min-height: auto;
    }
    @media(max-width: 375px) {
      padding-top: 10px;
    }
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
