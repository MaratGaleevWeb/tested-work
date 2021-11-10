import { useState, useEffect, useRef } from 'react'

import { useAppDispatch } from '../../redux/hooks'
import { ITodo, updateTodo, toggleTodo, deleteTodo } from '../../redux/todoSlice'

import classes from './TodoItem.module.scss'

const TodoItem: React.FC<ITodo> = ({ id, message, status, createdAt }) => {
  const dispatch = useAppDispatch()

  const [isChanging, setIsChanging] = useState(true)
  const [updatedMessage, setUpdatedMessage] = useState<string | undefined>(undefined)
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!isChanging) ref.current?.focus()
  }, [isChanging])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (updatedMessage) dispatch(updateTodo({ id, message: updatedMessage }))
    setIsChanging(true)
  }

  return isChanging ? (
    <li className={`${classes.listItem} ${status && classes.listItemSuccess}`}>
      <div className={classes.flexContainer}>
        <div>
          <input type='checkbox' checked={status} onChange={() => dispatch(toggleTodo(id))}></input>
          <span className={classes.info}>{message}</span>
          <span className={classes.alter} onClick={() => setIsChanging(false)}>
            Изменить
          </span>
        </div>

        <div>
          <span className={classes.info}>Создан: {createdAt}</span>
          <button onClick={() => dispatch(deleteTodo(id))} className={classes.btn}>
            Удалить
          </button>
        </div>
      </div>
    </li>
  ) : (
    <form onSubmit={handleSubmit}>
      <input
        className={classes.input}
        ref={ref}
        type='text'
        value={updatedMessage ?? message}
        onChange={(e) => setUpdatedMessage(e.target.value)}
      />
    </form>
  )
}

export default TodoItem
