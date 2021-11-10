import { useAppSelector } from '../../redux/hooks'

import TodoItem from '../TodoItem/TodoItem'
import classes from './TodoList.module.scss'

const TodoList = () => {
  const { todos } = useAppSelector(({ todos }) => todos)
  return (
    <ul className={classes.todoList}>
      {todos.length > 0 ? (
        todos.map((todo) => <TodoItem key={todo.id} {...todo} />)
      ) : (
        <p>Пока что дел нет</p>
      )}
    </ul>
  )
}

export default TodoList
