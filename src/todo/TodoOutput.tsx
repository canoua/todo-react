import cat from './../assets/cat.jpg'
import styled from 'styled-components'

function TodoOutput() {
  const TodoOutput = styled.div `
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    transition: .3s;
  `
  const TodoOutputContent = styled.article `
    border: 1px solid #000;
    padding: 10px;
    border-radius: 10px;
    height: 100%;
    width: 100%;
    transition: .3s;
    
    @media(max-width: 575px) {
      padding: 5px;
    }
  `

  
  return(
    <>
      <TodoOutput>
        <h2 className="title-2">Мои дела</h2>
        <TodoOutputContent>
          <div className="stub" id="stub">
            <img className="list-done__stub-img" src={cat} alt="cat" />
          </div>  
          {/* <List></List> */}
          <ul className="list" id="list"></ul>
        </TodoOutputContent>
      </TodoOutput>
    </>
  )
}

export default TodoOutput