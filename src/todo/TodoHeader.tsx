import styled from 'styled-components';
import { Button } from './Button';

function TodoHeader() {

  function handleClick(): void {
    // let tasks: any = [];
    console.log('hhh');
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
    
    @media(max-width: 375px) {
      font-size: 20px;
    }
  `

  const ButtonAdd = styled(Button) `
    background-color: #000;
    color: #fff;
    padding: 0px 10px;
    border: none;
    font-size: 25px;
    width: 10%;
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
        <Form>
          <Input placeholder='Дело'></Input>
          <ButtonAdd type='submit' onClick={handleClick}>+</ButtonAdd>
        </Form>
        <Error>введите название своего дела</Error>
      </Header> 
    </>
  )  
}

export default TodoHeader