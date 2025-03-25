import './SiparisOnayi.css';
import logo from "../images/iteration-1-images/logo.svg";
import styled from 'styled-components';

const StlSucdivgeneralwrapper = styled.div`
    background-color: #CE2829;
    block-size: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: MyFont;
`;

const StlSucdivlogocontainer = styled.div`
    img {
    display: block;
    margin-top: 10vh;
    margin-left: auto;
    margin-right: auto;
    max-width:85%;
    height:auto;
    }
`;

const StlSuch1 = styled.h1`
    color: #FAF7F2;
    font-size: 4.7em;
    font-family: MyFont;
    font-weight: 100;
    text-align: center;
    margin-top: 30vh;
`;

export default function SiparisOnayi() {
    return (
        <StlSucdivgeneralwrapper className="general-wrapper">
            <StlSucdivlogocontainer className="logo-container">
                <img src={logo} alt="logo" />
            </StlSucdivlogocontainer>
            <div className="text-container">
                <StlSuch1>TEBRİKLER!<br></br>SİPARİŞİNİZ ALINDI!</StlSuch1>
            </div>
        </StlSucdivgeneralwrapper>
    )
}