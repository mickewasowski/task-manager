import Todo from '../../todo-component/Todo';

function TodosInProgress({todos}){
    return(
        <div>
            <h2>In Progress</h2>
            {
                todos.map(x => <Todo key={x.id} id={x.id} label={x.label} description={x.description} status={x.status} buttonText={"Set Complete"} />)
            }
        </div>
    )
}

export default TodosInProgress;