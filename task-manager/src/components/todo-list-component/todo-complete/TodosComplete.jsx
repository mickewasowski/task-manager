import Todo from '../../todo-component/Todo';
import {Wrapper, Heading} from './TodosComplete.styles';

function TodosComplete({todos}){

    return(
        <Wrapper>
            <Heading>Done</Heading>
            {
                todos.map(x => <Todo key={x.id} id={x.id} label={x.label} description={x.description} buttonText={""}/>)
            }
        </Wrapper>
    )
}

export default TodosComplete;