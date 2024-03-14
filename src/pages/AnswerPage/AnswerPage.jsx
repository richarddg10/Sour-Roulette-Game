import { useNavigate, useParams } from "react-router-dom"
import { Buttons } from "../../components"
import questions from "../../Questions/Questions"

import './AnswerPage.css'

export function AnswerPage() {
    const navigate = useNavigate()

    const { questionId } = useParams()
    const selectedQuestion = questions.find((question) => question.id === parseInt(questionId, 10)) || null
    
    return (
        <>
            <body className='answer-body'>
                <h1 className="answer-title">Respuesta</h1>
                <p className="answer-text"><strong>Adivinanza:</strong> {selectedQuestion.answer}</p>
                <div className='win-lose-buttons'>
                    <Buttons className='main-button' onClick={() => navigate(`/lose-page/${selectedQuestion.id}`)} placeholder='Perdió' />
                    <Buttons className='main-button' onClick={() => navigate(`/win-page/${selectedQuestion.id}`)} placeholder='Ganó' />
                </div>
            </body>
        </>
    )
}