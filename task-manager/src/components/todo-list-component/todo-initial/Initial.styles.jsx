import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: white;
    margin: .7rem .7rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    grid-column: 1 / span 1;
    grid-row: 1 / span 12;
`

export const Heading = styled.h2`
    text-align: center;
    height: 5%;
    background-color: #0F8EEC;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: white;
`