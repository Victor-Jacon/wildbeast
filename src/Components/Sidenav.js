import React from 'react'

// Libs
import { Link } from 'react-router-dom';

// Imagens - Sidenav
// No react importamos cada imagem como um componente, a gente não passa o src com path direto, igual fazemos em html.
import sidenavCervo from '../img/icones/cervo.svg'
import sidenavLeao from '../img/icones/leao.svg'
import sidenavAbelha from '../img/icones/abelha.svg'
import sidenavGato from '../img/icones/gato.svg'
import sidenavOvelha from '../img/icones/ovelha.svg'
import sidenavVaca from '../img/icones/vaca.svg'


const Sidenav = () => {
    return (
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
    )
}

export default Sidenav
