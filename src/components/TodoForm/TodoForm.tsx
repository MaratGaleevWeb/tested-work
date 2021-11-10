import { useState } from 'react'

import { useAppDispatch } from '../../redux/hooks'
import { addTodo } from '../../redux/todoSlice'
import classes from './TodoForm.module.scss'

const TodoForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const [message, setMessage] = useState('')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (message) dispatch(addTodo(message))
    setMessage('')
  }

  return (
    <form onSubmit={onSubmit} className={classes.todoform}>
      <input
        type='text'
        className={classes.input}
        placeholder='Введите Todo'
        value={message}
        onChange={({ target }) => setMessage(target.value)}
      ></input>

      <button type='submit' className={classes.btn}>
        Создать
      </button>
    </form>
  )
}

export default TodoForm
