import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'
import TotalCompleteItems from '../TotalCompleteItems/TotalCompleteItems'
import classes from './App.module.scss'

const App: React.FC = () => (
  <div className={classes.app}>
    <h1 className={classes.title}>React Todo App</h1>
    <hr />
    <TodoForm />
    <TodoList />
    <TotalCompleteItems />
  </div>
)

export default App
