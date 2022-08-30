import Todo from '../../todo-component/Todo';
import { Wrapper, Heading} from './TodoInProgress.styles';

function TodosInProgress({todos}){
    return(
        <Wrapper>
            <Heading>In Progress</Heading>
            {
                todos.map(x => <Todo key={x.id} id={x.id} label={x.label} description={x.description} status={x.status} buttonText={"Set Complete"} />)
            }
        </Wrapper>
    )
}

export default TodosInProgress;