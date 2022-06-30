import styled from 'styled-components/macro';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 20px;
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;