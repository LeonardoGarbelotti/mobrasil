import { Link } from 'react-router-dom';
import { IoEarthOutline } from 'react-icons/io5';

import './styles.css';

import connWorld from '../../assets/images/connWorld.svg';
import logoImg from '../../assets/images/logo2.png';
import Footer from '../../components/Footer';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="earth and plane" />
                    <h2>Ferramenta para visualização da Mobilidade Acadêmica realizada por
                        alunos de Instituições de Ensino Superior Brasileiras.</h2>
                </div>

                <img src={connWorld} alt="Ferramenta de Análise" className="hero-image" />

                <div className="button-container">
                    <Link to="/start" className="start">
                        <IoEarthOutline size={42} />
                        Começar
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Landing;