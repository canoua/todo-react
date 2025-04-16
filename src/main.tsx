import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Todo from './todo/Todo.tsx'
import GlobalStyles from './global'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Todo/>
    <GlobalStyles/>
  </StrictMode>,
)
