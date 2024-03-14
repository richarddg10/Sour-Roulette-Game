import { useNavigate } from 'react-router-dom';
import { Buttons } from '../../components';
import './InicialPage.css'

export function InicialPage() {

    const navigate = useNavigate()

    return (
        <>
            <body className="intro-body">
                <img className='render-image' src="/portada.png" />
                <div className='play-container'>
                    <p className='init-page-title'>¡Bienvenido a <span>Sour Roulette!</span></p>
                    <p className='init-page-text'>Por favor presiona el boton “jugar” y que gane el mejor jugador.</p>
                    <Buttons className='jugar-button main-button' onClick={() => navigate('/instructions-page')} placeholder='Jugar' />
                </div>
            </body>
        </>
    )
}
