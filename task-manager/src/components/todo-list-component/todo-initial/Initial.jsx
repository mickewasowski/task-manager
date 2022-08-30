import Todo from '../../todo-component/Todo';

function Initial({todos}){
    return(
        <div>
            <h2>To Do</h2>
            {
                todos.map(x => <Todo key={x.id} id={x.id} label={x.label} description={x.description} status={x.status} buttonText={"Set In Progress"} />)
            }
        </div>
    )
}

export default Initial;