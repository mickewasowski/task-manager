import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: white;
    margin: .7rem .7rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    grid-column: 3 / span 1;
    grid-row: 1 / span 12;

    @media (min-width: 375px) {
        grid-column: 1 / span 3;
        grid-row: 7 / span 3;
        ${'' /* grid-row: auto; */}
        overflow-y: auto;
    }
`

export const Heading = styled.h2`
    text-align: center;
    height: 5%;
    background-color: #2FBC23;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: white;

    @media (min-width: 375px) {
        height: 2.5rem;
        position: sticky;
        top: 0;
    }
`