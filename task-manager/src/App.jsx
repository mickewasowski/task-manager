import CreateTodo from "./components/todo-creation/CreateTodo"
import TodoList from "./components/todo-list-component/TodoList"

function App() {

  return (
    <div style={{width: '90%', height: '100vh', margin: 'auto', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridTemplateRows: 'repeat(12, 1fr)'}}>
      <CreateTodo />
      <TodoList />
    </div>
  )
}

export default App
