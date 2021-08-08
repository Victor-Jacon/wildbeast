import React from 'react'
import { Link } from 'react-router-dom';

// Imagem Header
import logoWildbeast from '../img/wildbeast.svg';

const Header = () => {
    return (
        <header className="header">  {/* Implementar grid do header - 1 de 2 - Temos o elementos link, e o nav, são 2 elementos, então no nosso grid template columns, precisamos colocar 2 tamanhos*/ }
          <Link to="/" className="logo"> { /* Alternativa ao <a>, evita que a pagina fique toda branca, e depois carregue. */}
            <img src={logoWildbeast} alt="Wildbeast"/> {/* As imagens são importadas como libraries, e depois, a gente chama elas pelo nome da variável que a gente deu, a prop alt é igual no html e react */}
          </Link>

          <nav>
            <ul>
              <li><Link className="link-menu"to="#">sobre</Link></li>
              <li><Link className="link-menu"to="#">animais</Link></li>
              <li><Link className="link-menu"to="#">contato</Link></li>
            </ul>
          </nav>
        </header>
    )
}

export default Header
