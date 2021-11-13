import styled from 'styled-components/native'

import { useAppSelector } from '../redux/hooks'
import TodoItem from './TodoItem'

const StyledList = styled.FlatList`
  margin-top: 20px;
  width: 100%;
`

const NoTodos = styled.Text`
  font-size: 20px;
  margin: 20px;
`

const TodoList: React.FC = () => {
  const { todos } = useAppSelector(({ todos }) => todos)

  return todos.length ? (
    <StyledList data={todos} renderItem={({ item }: any) => <TodoItem {...item} />} />
  ) : (
    <NoTodos>Пока что дел нет</NoTodos>
  )
}

export default TodoList
