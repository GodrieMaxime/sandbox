import styled from 'styled-components/macro';
import Colors from './Utils/Tokens/Colors';

export const Wrapper = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    background-color: ${Colors.brand.annalisePrimary};
    height: 100vh;
    overflow: scroll;
`;

export const Header = styled.header`
    background-color: ${Colors.brand.annaliseSecondary};;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    img {
        max-height: 5vmin;
    }
`;
export const Container = styled.main`
    padding-bottom: 60px;
    h1,h2,p, label {
        color: #fff;
    }
`;

export const Footer = styled.footer`
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    width: 100%;
    color: #fff;
`;
