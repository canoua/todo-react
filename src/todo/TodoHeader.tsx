import styled from 'styled-components';
import TodoAdd from './TodoAdd';
// import { Button } from './Button';
// import handleClick from './TodoAdd';

function TodoHeader() {
  const Header = styled.header `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;


  const Title = styled.h1 `
    margin-bottom: 10px;
    font-size: 30px;
    line-height: 120%;
    text-align: center;
  `
  
  const Error = styled.div `
    color: red;
    opacity: 0;
    height: 0;
    transition: all .3s;
  `

  return(
    <>
      <Header> 
        <Title>Что хотите сделать?</Title>
        <TodoAdd/>
        {/* <Form>
          <Input placeholder='Дело'></Input>
          <ButtonAdd type='submit' onClick={handleClick}>+</ButtonAdd>
        </Form> */}
        <Error>введите название своего дела</Error>
      </Header> 
    </>
  )  
}

export default TodoHeader