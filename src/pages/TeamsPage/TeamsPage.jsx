import { useNavigate } from "react-router-dom";
import { BackButton, Buttons, Inputs } from "../../components";
import { InputContext, useAuthContext } from "../../InputContext/InputContext";
import './TeamsPage.css'

export function TeamsPage() {

    const navigate = useNavigate()

    const { teamNames, handleSetTeamNames } = useAuthContext()

    const handleOnClick = () => {
        navigate('/next-team-page')
        console.log(teamNames);
    }

    return (
        <>
            <InputContext>
                <body className="teams-body">
                    <header className="teams-header">
                        <BackButton className="icon-button" onClick={() => navigate('/instructions-page')} />
                        <h1 className="teams-title">Definir jugadores</h1>
                        <div className="transparent"></div>
                    </header>
                    <div className="teams-container">
                        <div className="group-container">
                            <h1 className="group-numb-text h1-text g1">J1</h1>
                            <Inputs onChange={(event) => handleSetTeamNames(1, 0, event.target.value)} value={teamNames[1][0]} placeholder='Nickname 1' />
                        </div>
                        <div className="group-container">
                            <h1 className="group-numb-text h1-text g2">J2</h1>
                            <Inputs onChange={(event) => handleSetTeamNames(2, 0, event.target.value)} value={teamNames[2][0]} placeholder='Nickname 2' />
                        </div>
                        <div className="group-container">
                            <h1 className="group-numb-text h1-text g3">J3</h1>
                            <Inputs onChange={(event) => handleSetTeamNames(3, 0, event.target.value)} value={teamNames[3][0]} placeholder='Nickname 3' />
                        </div>
                        <div className="group-container">
                            <h1 className="group-numb-text h1-text g4">J4</h1>
                            <Inputs onChange={(event) => handleSetTeamNames(4, 0, event.target.value)} value={teamNames[4][0]} placeholder='Nickname 4' />
                        </div>
                    </div>
                    <Buttons className='teams-button main-button' onClick={handleOnClick} placeholder='Siguiente' />
                </body>
            </InputContext>
        </>
    )
}