import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: white;
    margin: .7rem .7rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    grid-column: 2 / span 1;
    grid-row: 1 / span 12;

    overflow-y: auto;

    @media (min-width: 375px) AND (max-width: 1024px) {
        grid-column: 1 / span 3;
        grid-row: 4 / span 3;
        ${'' /* grid-row: auto; */}
    }
`

export const Heading = styled.h2`
    text-align: center;
    height: 5%;
    background-color: #F07113;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: white;

    position: sticky;
    top: 0;

    @media (min-width: 375px) AND (max-width: 1024px) {
        height: 2.5rem;
    }
`