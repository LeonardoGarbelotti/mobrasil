import { AiOutlineGithub, AiFillHeart } from "react-icons/ai";

import './styles.css';

function Footer() {
    return (
        <div className="footer-container">
            <span className="footer-content">
                Feito com <AiFillHeart size={16} color="red" />.

            <a href="https://github.com/LeonardoGarbelotti/mobrasil/tree/master" target="_blank"> Github do Projeto </a> <AiOutlineGithub size={16} />
            </span>
        </div>

    );
}

export default Footer;