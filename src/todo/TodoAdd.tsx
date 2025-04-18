import { useState , useRef, useEffect } from "react";
// import { Button } from './Button';
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import { Error } from "./components/Error";
import { ButtonAdd } from "./components/ButtonAdd";
import styled from "styled-components";

function TodoAdd() { 
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