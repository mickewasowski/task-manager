import CreateTodo from "./components/todo-creation/CreateTodo"
import TodoList from "./components/todo-list-component/TodoList"
import {AppContainer} from './App.styles';

function App() {

  return (
    <AppContainer>
      <CreateTodo />
      <TodoList />
    </AppContainer>
  )
}

export default App
