import styled from 'styled-components';

export const Form = styled.form`
    background-color: #E6E6E6;
    border-radius: 10px;
    padding: 1rem;
    
    grid-column: 1 / span 2;
    grid-row: 5 / span 4;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(6, 1fr);

    @media (min-width: 375px) AND (max-width: 1024px) {
        grid-column: 1 / span 3;
        grid-row: 1 / span 4;
    }
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 1.1rem;
`

export const Input = styled.input`
    border: none;
    border-radius: 5px;

    &:focus{
        outline: none;
    }
`

export const TextArea = styled.textarea`
    border: none;
    border-radius: 5px;
    resize: none;
    height: 80%;

    &:focus{
        outline: none;
    }
`

export const Dropdown = styled.select`
    border: none;
    border-radius: 5px;

    &:focus{
        outline: none;
    }
`

export const SubmitBtn = styled.input`
    display: inline;
    width: 40%;
    height: 1.5rem;
    align-self: center;
    border: none;
    border-radius: 5px;
    background-color: #93A027;
    color: white;
    font-weight: bold;
    margin: auto;

    &:hover{
        background-color: #B7BF6F;
        cursor: pointer;
    }
`