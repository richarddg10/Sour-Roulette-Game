import { useNavigate, useParams } from "react-router-dom"
import { Buttons } from "../../components"
import { useAuthContext } from "../../InputContext/InputContext"
import questions from "../../Questions/Questions"

import './LosePage.css'

export function LosePage() {
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
            <body className='lose-body'>
                <h1 className='lose-title'>Pierde</h1>
                <p className='lose-text'>{selectedQuestion.losePoints}</p>
                <Buttons className='main-button' onClick={handleOnClick} placeholder='Continuar' />
            </body>
        </>
    )
}