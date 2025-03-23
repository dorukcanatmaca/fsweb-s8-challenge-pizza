import { Link } from "react-router-dom";
import './Anasayfa.css';
import logo from "../images/iteration-1-images/logo.svg";
export default function Anasayfa() {
    return (
        <>
            <body>
                <div className="wrapper">
                    <div className="logo-container">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="text-container">
                        <h1>KOD ACIKTIRIR</h1>
                        <h1>PİZZA, DOYURUR</h1>
                    </div>
                    <div className="button-container">
                        <Link to="/order">
                            <button>
                                ACIKTIM
                            </button>
                        </Link>
                    </div>
                </div>
            </body>
        </>
    );
}