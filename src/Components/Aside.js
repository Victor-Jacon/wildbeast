import React from 'react'

// Imagens - Aside/Anúncios
import anuncio1 from '../img/anuncio-1.jpg'
import anuncio2 from '../img/anuncio-2.jpg'

const Aside = () => {
    return (
        <aside className="anuncios">
          <div className="anuncio-item">
            <img src={anuncio1} alt="Anuncio 1" />
          </div>

          <div className="anuncio-item">
            <img src={anuncio2} alt="Anuncio 2" />
          </div>
        </aside>
    )
}

export default Aside
