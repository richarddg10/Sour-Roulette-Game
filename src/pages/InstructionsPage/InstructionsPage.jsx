import { useNavigate } from "react-router-dom";
import { Buttons } from "../../components";
import './InstructionsPage.css'

export function InstructionsPage() {

    const navigate = useNavigate()

    return (
        <>
            <body className="instructions-body">
                <h1 className="instructions-title">Instrucciones</h1>
                <div>
                    <ol className="instructions-list">
                        <li>Mínimo 2 jugadores - máximo 4 jugadores.</li>
                        <li>Cada jugador empieza con $ 100 dólares.</li>
                        <li>El ganador es el jugador que termine con más dinero.</li>
                        <li>El juego termina cuando uno delos jugadores llegue a $500 dólares o alguno se quede sin dinero.</li>
                        <li>La casilla azul significa que pasa el turno sin penitencia</li>
                        <li>Los jugadores solo pueden tirar la canica una vez por ronda.</li>
                        <li>Los dólares que pierden los jugadores se guardan en el casino.</li>
                        <li>Los jugadores tendrán 1min máximo para cumplir los retos y adivinanzas.</li>
                    </ol>
                </div>
                <Buttons className='instructions-button main-button' onClick={() => navigate('/teams-page')} placeholder='Siguiente' />
            </body>
        </>
    )
}
