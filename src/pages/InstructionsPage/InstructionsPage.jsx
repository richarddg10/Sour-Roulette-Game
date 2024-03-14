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
                        <li>Cada equipo empieza con $ 100 dólares.</li>
                        <li>El ganador es el equipo que termine con más dinero.</li>
                        <li>El juego termina cuando completan todas las casillas o cuando uno de los equipos quede sin dólares.</li>
                        <li>Cada vez que un equipo pierda en la adivinanza uno de los integrantes debe tomar medio shot.</li>
                        <li>Los equipos solo pueden tirar la canica una vez por ronda.</li>
                        <li>Los dólares que pierden los equipos se guardan en el casino.</li>
                        <li>Los equipos tendrán 1min máximo para cumplir los retos y adivinanzas.</li>
                    </ol>
                </div>
                <Buttons className='instructions-button main-button' onClick={() => navigate('/teams-page')} placeholder='Siguiente' />
            </body>
        </>
    )
}