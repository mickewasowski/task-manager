import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #D1D5DB;
    border-radius: 10px;

    grid-column: 4 / span 8;
    grid-row: 2 / span 10;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(12, 1fr);

    @media (min-width: 375px) AND (max-width: 1024px) {
        grid-column: 1 / span 3;
        grid-row: auto;
        ${'' /* 5 / span 8 */}
    }
`