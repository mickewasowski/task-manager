import { useSelector } from "react-redux";
import Initial from "./todo-initial/Initial";
import TodosInProgress from "./todo-in-progress/TodosInProgress";
import TodosComplete from "./todo-complete/TodosComplete";
import {useEffect} from 'react';

function TodoList(){
    let allTodos = useSelector(state => state.todo);
    let initial = allTodos.filter(x => x.status === 'to do' || x.status === 'no status');
    let inProgress = allTodos.filter(x => x.status === 'in progress');
    let done = allTodos.filter(x => x.status === 'done');
    
    return(
        <div>
            <Initial todos={initial}/>
            <TodosInProgress todos={inProgress}/>
            <TodosComplete todos={done}/>
        </div>
    )
}

export default TodoList;