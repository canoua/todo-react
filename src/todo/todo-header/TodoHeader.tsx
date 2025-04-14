import './TodoHeader.scss'
import styled from 'styled-components';

function TodoHeader() {

  function handleClick(): void {
    // const form: HTMLElement | null = document.getElementById('form');
    // const input: HTMLElement | null = document.getElementById('input');
    // const stub: HTMLElement | null = document.getElementById('stub');
    // const list: HTMLElement | null = document.getElementById('list');

    // let tasks: any = [];
  }

  const Header = styled.header `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  const Form = styled.form `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `

  const Title = styled.h1 `
    width: 100%;
    margin-bottom: 10px;
    font-size: 30px;
    line-height: 120%;
    text-align: center;
  `

  const Input = styled.input `
    padding: 5px;
    margin-right: 10px;
    border: none;
    outline: none;
    border-bottom: 1px solid #000;
    font-size: 25px;
    width: 90%; 
  `
  // Input.

  return(
    <>
      <Header> 
        <Title>Что хотите сделать?</Title>
        <Form>
          <Input placeholder='Дело'></Input>
          {/* <input type="text" placeholder="Дело" className="todo__input" id="input" autoComplete="on" /> */}
          <button className="add-btn btn" id="add-btn" type="submit" onClick={handleClick}>+</button>
        </Form>
        <div className="error" id="error">введите название своего дела</div>
      </Header> 
    </>
  )  
}

export default TodoHeader