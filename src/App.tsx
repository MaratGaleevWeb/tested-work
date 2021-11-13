import styled from 'styled-components/native'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TotalCompleteItems from './components/TotalCompleteItems'

const Wrapper = styled.View`
  padding-top: 20px
  align-items: center;
  width: 90%;
  margin: 0 auto;

`
const Title = styled.Text`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`

export default function App() {
  return (
    <Wrapper>
      <Title>React Native Todo App</Title>
      <TodoForm />
      <TodoList />
      <TotalCompleteItems />
    </Wrapper>
  )
}
