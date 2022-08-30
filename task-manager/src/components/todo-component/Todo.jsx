import { useDispatch } from 'react-redux';
import {setComplete, setInProgress} from '../../redux-store/actions/TodoActions';

function Todo({id, label, description, status, buttonText, changeStatus}){
    const dispatch = useDispatch();

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
        <div id={id}>
            <div>
                <h3>{label}</h3>
            </div>
            <div>
                <p>{description}</p>
            </div>
            {
                buttonText === ''
                ? ''
                : <button onClick={handleClick}>{buttonText}</button>
            }
        </div>
    )
}

export default Todo;