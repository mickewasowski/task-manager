import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import {createTodo} from '../../redux-store/actions/TodoActions';


function CreateTodo(){
    const initialState = {
        id: null,
        label: '',
        description: '',
        status: 'no status'
    }

    const [formInfo, setFormInfo] = useState(initialState);

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        let {name, value} = e.target;

        if (formInfo.id === null) {
            setFormInfo(prevState => { return {...prevState,[name]: value, id: uuid()}});
        }else{
            setFormInfo(prevState => {return {...prevState, [name]: value}});
        }

    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (formInfo.label !== '' && formInfo.description !== '') {
            dispatch(createTodo(formInfo));
        }else{
            alert("Label and Description fields are mandatory")
        }
        setFormInfo(initialState);
    }


    return(
        <form>
            <div>
                <label htmlFor='label'>Label:</label>
                <input type='text' name='label' onChange={handleInputChange} value={formInfo.label} required/>
            </div>
            <div>
                <label htmlFor='description'>Description:</label>
                <textarea type='text' name='description' onChange={handleInputChange} value={formInfo.description} required/>
            </div>
            <div>
                <label htmlFor='status'>Status:</label>
                <select name='status' onChange={handleInputChange}>
                    <option value='no status'>No status</option>
                    <option value='to do'>To do</option>
                </select>
            </div>
            <input type="submit" onClick={handleSubmit}/>
        </form>
    )
}

export default CreateTodo;