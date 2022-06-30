import styled , { keyframes }from 'styled-components/macro';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 1;
    background-color: black;
    position: absolute;
    opacity: 0.8;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Img = styled.img`
    height: 10vmin;
    pointer-events: none;
    animation: ${rotate} 2s linear infinite;
`;
