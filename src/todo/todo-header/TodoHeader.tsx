import './TodoHeader.scss'

function TodoHeader() {

  function handleClick(): void {
    const form: HTMLElement | null = document.getElementById('form');
    // const input: HTMLElement | null = document.getElementById('input');
    // const stub: HTMLElement | null = document.getElementById('stub');
    // const list: HTMLElement | null = document.getElementById('list');

    // let tasks: any = [];
    console.log(form);
    
  }

  return(
    <>
      <div className="todo__header">
        <h1 className="title">Что хотите сделать?</h1>
        <form action="#" className="todo__form" id="form">
          <input type="text" placeholder="Дело" className="todo__input" id="input" autoComplete="on" />
          <button className="add-btn btn" id="add-btn" type="submit" onClick={handleClick}>+</button>
        </form>
        <div className="error" id="error">введите название своего дела</div>
      </div>
    </>
  )  
}

export default TodoHeader