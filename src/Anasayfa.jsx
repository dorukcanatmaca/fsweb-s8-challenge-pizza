import { Link } from "react-router-dom";
import './Anasayfa.css';
import logo from "../images/iteration-1-images/logo.svg";
export default function Anasayfa() {
    return (
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
                        SiparisFormu
                    </button>
                </Link>
                <Link to="/formv2">
                    <button>
                        Formv2
                    </button>
                </Link>
                <Link to="/formv3">
                    <button>
                        Formv3
                    </button>
                </Link>
            </div>
        </div>
    );
}