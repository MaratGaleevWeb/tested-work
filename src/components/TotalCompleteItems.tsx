import styled from 'styled-components/native'

import { useAppSelector } from '../redux/hooks'

const StyledTitle = styled.Text`
  font-weight: 700;
  font-size: 24px;
`

const TotalCompleteItems: React.FC = () => {
  const { todos } = useAppSelector(({ todos }) => todos)
  const completed = todos.filter((todo) => todo.status === true)
  return <StyledTitle>Выполненные Todo: {completed.length ?? 0}</StyledTitle>
}

export default TotalCompleteItems
