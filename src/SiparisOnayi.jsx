import './SiparisOnayi.css';
import logo from "../images/iteration-1-images/logo.svg";
import styled from 'styled-components';

const DivWrapper = styled.div`
    background-color: #CE2829;
    block-size: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: OnayFont;
`;

const DivSub = styled.div`
    img {
    display: block;
    margin-top: 10vh;
    margin-left: auto;
    margin-right: auto;
    max-width:85%;
    height:auto;
    }
`;

const Title = styled.h1`
    color: #FAF7F2;
    font-size: 4.7em;
    font-family: OnayFont;
    font-weight: 100;
    text-align: center;
    margin-top: 30vh;
`;

export default function SiparisOnayi() {
    return (
        <DivWrapper>
            <DivSub>
                <img src={logo} alt="logo" />
            </DivSub>
            <div>
                <Title>TEBRİKLER!<br></br>SİPARİŞİNİZ ALINDI!</Title>
            </div>
        </DivWrapper>
    )
}