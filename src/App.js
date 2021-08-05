import './App.css';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';

// Imagens
import logoWildbeast from './img/wildbeast.svg';

// Imagens - Sidenav
// No react importamos cada imagem como um componente, a gente não passa o src com path direto, igual fazemos em html.
import sidenavCervo from './img/icones/cervo.svg'
import sidenavLeao from './img/icones/leao.svg'
import sidenavAbelha from './img/icones/abelha.svg'
import sidenavGato from './img/icones/gato.svg'
import sidenavOvelha from './img/icones/ovelha.svg'
import sidenavVaca from './img/icones/vaca.svg'


function App() {
  return (
    <div className="App">
      <Helmet> {/* Permite alterar o <head> do nosso react app */}
        <title>Wildbeast</title> {/* Título do Site que aparece no topo do navegador */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /> {/* Faz o responsivo funcionar, só copiar e colar. No react, a tag meta é <meta /> */}
      </Helmet>
      <div className="estrutura">
        <header className="header">
          <Link to="/"> { /* Alternativa ao <a>, evita que a pagina fique toda branca, e depois carregue. */}
            <img src={logoWildbeast} alt="Wildbeast"/> {/* As imagens são importadas como libraries, e depois, a gente chama elas pelo nome da variável que a gente deu, a prop alt é igual no html e react */}
          </Link>

          <nav>
            <ul>
              <li><Link to="#">sobre</Link></li>
              <li><Link to="#">animais</Link></li>
              <li><Link to="#">contato</Link></li>
            </ul>
          </nav>
        </header>

        <nav className="sidenav">
          <ul>
            <li><Link to="#"><img src={sidenavCervo} alt="Cervo"/></Link></li>
            <li><Link to="#"><img src={sidenavLeao} alt="Leão"/></Link></li>
            <li><Link to="#"><img src={sidenavGato} alt="Gato"/></Link></li>
            <li><Link to="#"><img src={sidenavVaca} alt="Vaca"/></Link></li>
            <li><Link to="#"><img src={sidenavOvelha} alt="Ovelha"/></Link></li>
            <li><Link to="#"><img src={sidenavAbelha} alt="Abelha"/></Link></li>
          </ul>
        </nav>

        <main className="content">

        </main>
      </div>
    </div>
  );
}

export default App;
