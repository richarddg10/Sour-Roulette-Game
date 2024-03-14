import { useNavigate, useParams } from "react-router-dom"
import { Buttons } from "../../components"
import { useAuthContext } from "../../InputContext/InputContext"
import questions from "../../Questions/Questions"

import './WinPage.css'

export function WinPage() {
    const navigate = useNavigate()

    const { questionId } = useParams()
    const selectedQuestion = questions.find((question) => question.id === parseInt(questionId, 10)) || null

    const { handleNextGroup } = useAuthContext()

    const handleOnClick = () => {
        handleNextGroup()
        navigate('/next-team-page')
    }

    return (
        <>
            <body className='win-body'>
                <h1 className='win-title'>Gana</h1>
                <p className='win-text'>{selectedQuestion.winPoints}</p>
                <Buttons className='main-button' onClick={handleOnClick} placeholder='Continuar' />
            </body>
        </>
    )
}