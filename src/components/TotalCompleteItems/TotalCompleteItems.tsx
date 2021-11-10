import { useAppSelector } from '../../redux/hooks'

const TotalCompleteItems: React.FC = () => {
  const { todos } = useAppSelector(({ todos }) => todos)
  const completed = todos.filter((todo) => todo.status === true)
  return <h4>Выполненные Todo: {completed.length ?? 0}</h4>
}

export default TotalCompleteItems
