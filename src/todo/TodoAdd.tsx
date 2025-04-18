import { useState , useRef, useEffect } from "react";
import { Button } from './Button';
import styled from "styled-components";

function TodoAdd() {
  const Form = styled.form `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  const [task, setTodo] = useState();
  // для дебага - пропадает фокус при записи состояния
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); 
    }
  }, [task]); 

  function validation(e) {
    e.preventDefault();
    return task == undefined || task.length == 0 ? alert('error') : alert(task);
  }

  return(
    <Form>
      <Input ref={inputRef} value={task} onChange={(e) => setTodo(e.target.value)} placeholder='Дело'/>
      <ButtonAdd type='submit' onClick={validation}>+</ButtonAdd>
    </Form> 
  )
}

export default TodoAdd