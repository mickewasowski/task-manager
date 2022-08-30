import CreateTodo from "./components/todo-creation/CreateTodo"
import TodoList from "./components/todo-list-component/TodoList"

function App() {

  return (
    <div style={{width: '100%', height: '100vh',display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
      <CreateTodo />
      <TodoList />
    </div>
  )
}

export default App
