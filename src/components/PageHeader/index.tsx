import { useHistory } from "react-router-dom";


import logoImg from '../../assets/images/logo2.png';
import { FiArrowLeft } from 'react-icons/fi'
import { HiOutlineDocumentReport } from 'react-icons/hi';

import './styles.css';

function PageHeader() {
  const { goBack } = useHistory();

  return (
    <header className="page-header">
      <div className="top-bar-container">
        <button className="btn-back" type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>

        <button
          className="btn-report"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.open('https://datastudio.google.com/s/issAIUwgfTQ');
          }}
        >
          <HiOutlineDocumentReport size={24} color="#00ac4d" />
        </button>
        <img src={logoImg} alt="logo" />
      </div>

      <div className="header-content">
        <strong>Relatório Interativo</strong>
        <p>
          O relatório é totalmente dinâmico e interativo!
          Faça uma combinação entre diversos dados clicando sobre eles.
        </p>

      </div>
    </header>
  );
}

export default PageHeader;