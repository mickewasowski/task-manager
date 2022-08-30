import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 90%;
    min-height: 13%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-self: center;
    margin: .5rem 0;
    border-radius: 10px;
    color: #56606D;
    text-transform: uppercase;
`

export const Button = styled.button`
    border: none;
    padding: .2rem;
    border-radius: 5px;
    color: white;
    font-weight: bold;

    &:hover{
        cursor: pointer;
    }
`

