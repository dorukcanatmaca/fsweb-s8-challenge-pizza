import { Link } from "react-router-dom";
import './Anasayfa.css';
import logo from "../images/iteration-1-images/logo.svg";
import styled from 'styled-components';

const StlMainh1 = styled.h1`
    color: #FAF7F2;
    font-size: 4.7em;
    font-family: MyFont;
    font-weight: 275;
    text-align: center;
`;

const StlMainbtn = styled.button`
    background-color: #FDC913;
    border-radius: 27px;
    border: 1px solid transparent;
    width: 170px;
    height: 50px;
    font-weight: 500;
`;

const StlMaindivgeneralwrapper = styled.div`
    background-image: url("../images/iteration-1-images/home-banner.png");
    background-size: cover;
    margin: 0;
    block-size: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: MyFont;
`;

const StlMaindivlogocontainer = styled.div`
    img {
    display: block;
    margin-top: 10vh;
    margin-left: auto;
    margin-right: auto;
    max-width:85%;
    height:auto;
    }
`;

export default function Anasayfa() {
    return (
        <StlMaindivgeneralwrapper className="general-wrapper">
            <StlMaindivlogocontainer className="logo-container">
                <img src={logo} alt="logo" />
            </StlMaindivlogocontainer>
            <div className="text-container">
                <StlMainh1>KOD ACIKTIRIR<br></br>PİZZA, DOYURUR</StlMainh1>
            </div>
            <div className="button-container">
                <Link to="/order">
                    <StlMainbtn>
                        ACIKTIM
                    </StlMainbtn>
                </Link>
            </div>
        </StlMaindivgeneralwrapper>
    );
}