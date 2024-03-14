import { useNavigate } from "react-router-dom";
import { Buttons } from "../../components";
import { useAuthContext } from "../../InputContext/InputContext";
import './NextTeamPage.css'

export function NextTeamPage() {

    const navigate = useNavigate()

    const { teamNames, actualGroup } = useAuthContext()

    const numberOfTeams = Object.keys(teamNames).length

    return (
        <>
            <body className="next-team-body">
                <h1 className="next-team-title">Turno de...</h1>
                <div className="group-container">
                    <h1 className="next-team-number">J {actualGroup}</h1>
                    {teamNames && (
                        <>
                            <div className="name-container">
                                <h2 className="player-name">{teamNames[actualGroup][0]}</h2>
                            </div>
                        </>
                    )}
                </div>
                <Buttons className='next-team-button main-button' onClick={() => navigate('/cards-page')} placeholder='Siguiente' />
            </body>
        </>
    )
}