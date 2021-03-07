import Popup from 'reactjs-popup';

import PageHeader from '../../components/PageHeader';

import './styles.css';

function StartPage() {
    return (
        <div id="start-page" className="container">
            <PageHeader />

            <main>
                <Popup
                    open
                    position="center center"
                    closeOnDocumentClick
                    modal
                    nested
                >
                    <div className="modal">
                        <div className="modal-content">
                            <strong> ATENÇÃO! </strong>
                            <p>
                                Algumas funcionalidades não são suportadas pela ferramenta. Para uma experiência completa, por favor,
                                acesse o relatório a partir do <b>Google Data Studio</b> através do botão no cabeçalho.
                            </p>
                            <h4>Clique fora da caixa para continuar...</h4>
                        </div>
                    </div>

                </Popup>

                    <div className="google-data-studio">
                        <iframe
                            title="Relatórios"
                            width="1366"
                            height="1600"
                            src="https://datastudio.google.com/embed/reporting/2b4501c3-0e90-4e9f-9424-05c010cec442/page/axCjB"
                            frameBorder="0"
                            allowFullScreen
                            aria-label="Neste espaço está contido diversos gráficos e tabelas, com dados e informações sobre a mobilidade brasileira."
                        >
                        </iframe>
                    </div>
            </main>
        </div>
    );
}

export default StartPage;