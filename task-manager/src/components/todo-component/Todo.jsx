import { useDispatch } from 'react-redux';
import {setComplete, setInProgress} from '../../redux-store/actions/TodoActions';
import {Wrapper, Button} from './Todo.styles';

function Todo({id, label, description, status, buttonText}){
    const dispatch = useDispatch();

    const todoBackgroundColor = (status === 'no status' || status === 'to do') ? {backgroundColor: '#D5ECFD'} : (status === 'in progress') ? {backgroundColor: '#F9E7A8'} : {backgroundColor: '#A8F7AA'}

    const buttonBg = (status === 'no status' || status === 'to do') ? {backgroundColor: '#F07113'} : (status === 'in progress') ? {backgroundColor: '#2FBC23'} : {backgroundColor: ''}

    const handleSetComplete = () => {
        dispatch(setComplete(id));
    }

    const handleSetInProgress = () => {
        dispatch(setInProgress(id));
    }

    const handleClick = () => {
        if (status === 'no status' || status === 'to do') {
            return handleSetInProgress();
        }else if(status === 'in progress'){
            return handleSetComplete();
        }
    }

    return(
        <Wrapper id={id} style={todoBackgroundColor}>
            <div>
                <h3>{label}</h3>
            </div>
            <div>
                <p>{description}</p>
            </div>
            {
                buttonText === ''
                ? ''
                : <Button style={buttonBg} onClick={handleClick}>{buttonText}</Button>
            }
        </Wrapper>
    )
}

export default Todo;