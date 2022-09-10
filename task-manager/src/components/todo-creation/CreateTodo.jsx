import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import {createTodo} from '../../redux-store/actions/TodoActions';
import {Form, InputWrapper, Input, TextArea, Dropdown, SubmitBtn} from './CreateTodo.styles';
 
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
        <Form>
            <InputWrapper style={{gridRow: '1 / span 1', gridColumn: '1 / span 6'}}>
                <label htmlFor='label'>Label:</label>
                <Input type='text' name='label' onChange={handleInputChange} value={formInfo.label} required/>
            </InputWrapper>
            <InputWrapper style={{gridRow: '2 / span 3', gridColumn: '1 / span 6'}}>
                <label htmlFor='description'>Description:</label>
                <TextArea type='text' name='description' onChange={handleInputChange} value={formInfo.description} required/>
            </InputWrapper>
            <InputWrapper style={{gridRow: '5 / span 1', gridColumn: '1 / span 6'}}>
                <label htmlFor='status'>Status:</label>
                <Dropdown name='status' onChange={handleInputChange}>
                    <option value='no status'>No status</option>
                    <option value='to do'>To do</option>
                </Dropdown>
            </InputWrapper>
            <SubmitBtn type="submit" style={{gridRow: '6 / span 1', gridColumn: '1 / span 6'}} onClick={handleSubmit}/>
        </Form>
    )
}

export default CreateTodo;