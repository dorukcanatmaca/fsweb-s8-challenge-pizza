import { Link } from "react-router-dom";
import './Anasayfa.css';
import logo from "../images/iteration-1-images/logo.svg";
import styled from 'styled-components';

const Txt = styled.h1`
    color: #FAF7F2;
    font-size: 4.7em;
    font-family: MainFont;
    font-weight: 275;
    text-align: center;
`;

const Buton = styled.button`
    background-color: #FDC913;
    border-radius: 27px;
    border: 1px solid transparent;
    width: 170px;
    height: 50px;
    font-weight: 500;
`;

const DivWrapper = styled.div`
    background-image: url("../images/iteration-1-images/home-banner.png");
    background-size: cover;
    margin: 0;
    block-size: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: MainFont;
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

export default function Anasayfa() {
    return (
        <DivWrapper>
            <DivSub>
                <img src={logo} alt="logo" />
            </DivSub>
            <div>
                <Txt>KOD ACIKTIRIR<br></br>PİZZA, DOYURUR</Txt>
            </div>
            <div>
                <Link to="/order">
                    <Buton>
                        ACIKTIM
                    </Buton>
                </Link>
            </div>
        </DivWrapper>
    );
}