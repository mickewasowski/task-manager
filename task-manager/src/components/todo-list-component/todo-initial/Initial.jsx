import Todo from '../../todo-component/Todo';
import {Wrapper, Heading} from './Initial.styles';

function Initial({todos}){
    return(
        <Wrapper>
            <Heading>To Do</Heading>
            {
                todos.map(x => <Todo key={x.id} id={x.id} label={x.label} description={x.description} status={x.status} buttonText={"Set In Progress"} />)
            }
        </Wrapper>
    )
}

export default Initial;