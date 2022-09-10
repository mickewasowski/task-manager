import styled from 'styled-components';

export const AppContainer = styled.div`
    width: 90%;
    height: 100vh;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);

    @media (min-width: 375px) {
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        gap: 1rem;
    }
`