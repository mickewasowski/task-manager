import Todo from '../../todo-component/Todo';

function TodosComplete({todos}){

    return(
        <div>
            <h2>Done</h2>
            {
                todos.map(x => <Todo key={x.id} id={x.id} label={x.label} description={x.description} buttonText={""}/>)
            }
        </div>
    )
}

export default TodosComplete;