import './App.css';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';

// Imagem Header
import logoWildbeast from './img/wildbeast.svg';

// Imagens - Sidenav
// No react importamos cada imagem como um componente, a gente não passa o src com path direto, igual fazemos em html.
import sidenavCervo from './img/icones/cervo.svg'
import sidenavLeao from './img/icones/leao.svg'
import sidenavAbelha from './img/icones/abelha.svg'
import sidenavGato from './img/icones/gato.svg'
import sidenavOvelha from './img/icones/ovelha.svg'
import sidenavVaca from './img/icones/vaca.svg'

// Imagens - Conteúdo
import wolf1 from './img/wolf1.jpg'
import wolf2 from './img/wolf2.jpg'
import wolf3 from './img/wolf3.jpg'

// Imagens - Aside/Anúncios
import anuncio1 from './img/anuncio-1.jpg'
import anuncio2 from './img/anuncio-2.jpg'

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
          <div className="titulo">
            <h1>Lobo Cinza</h1>
            <span>da família canis lupus</span>
          </div>

          <div className="caracteristicas">
            <div>
              <span className="numero">72</span>
              <span className="rotulo">kg</span>
            </div>
            <div>
              <span className="numero">13</span>
              <span className="rotulo">age</span>
            </div>
          </div>

            <p>É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior, cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos genéticos reafirmam que o lobo cinzento é ancestral do cão doméstico</p>
          
            <img src={wolf1} alt="Wolf 1" />

            <p>É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior, cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos.</p>
         
            <img src={wolf2} alt="Wolf 2" />

            <p>O peso e tamanho dos lobos variam muito em todo o mundo, tendendo a aumentar proporcionalmente com a latitude, como previsto pela teoria de Christian Bergmann. Em geral, a altura, medida a partir dos ombros, varia de 60 a 95 centímetros.</p>
          
            <p>O peso varia geograficamente. Em média, os lobos europeus pesam 38,5 kg; os lobos da América do Norte, 36 kg; os lobos indianos e árabes, 25 kg.[7] Embora raros, lobos com mais de 77 kg foram encontrados no Alasca, Canadá,[8] e na antiga União Soviética.</p>
          
            <blockquote className="citacao">
              <p>“Há algo no uivar do lobo que tira um homem do aqui e agora e o transporta para uma floresta da mente.”</p>
            </blockquote>

            <ul className="atributos">
              <li>Surgiu: 12.000 anos</li>
              <li>Tipo: Mamífero</li>
              <li>Idade Média: 13 anos</li>
              <li>Macho adulto: 80kg</li>
              <li>Fêmea adulta: 55kg</li>
              <li>Família: Lupus</li>
            </ul>

            <div className="informacoes">
              <p>É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior, cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos genéticos reafirmam que o lobo cinzento é ancestral do cão doméstico.</p>
              <p>É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior, cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos genéticos reafirmam que o lobo cinzento é ancestral do cão doméstico.</p>
            </div>

            <img src={wolf3} alt="Wolf 3" />

        </main> {/* Fecha Conteúdo */}

        <aside className="anuncios">
          <div className="anuncio-item">
            <img src={anuncio1} alt="Anuncio 1" />
          </div>

          <div className="anuncio-item">
            <img src={anuncio2} alt="Anuncio 2" />
          </div>
        </aside>

        <footer className="footer">
          <p>Origamid © 2021. Alguns direitos reservados.</p>
        </footer>

      </div> {/* Fecha React app */}

    </div>
  );
}

export default App;
