import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Todo from './todo/Todo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Todo/>
  </StrictMode>,
)
