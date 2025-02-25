import './TodoOutput.scss'
import cat from './../../assets/cat.jpg'

function TodoOutput() {
  return(
    <>
      <div className="todo__output">
        <h2 className="title-2">Мои дела</h2>
        <article className="todo__output-content">
          <div className="stub" id="stub">
            <img className="list-done__stub-img" src={cat} alt="cat" />
          </div>  
          <ul className="list" id="list"></ul>
        </article>
      </div>
    </>
  )
}

export default TodoOutput