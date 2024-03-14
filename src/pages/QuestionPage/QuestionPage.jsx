import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BackButton, Buttons } from '../../components'
import { useAuthContext } from '../../InputContext/InputContext'
import questions from '../../Questions/Questions'
import './QuestionPage.css'

export function QuestionPage() {
    const navigate = useNavigate()
    const { questionId } = useParams()
    const selectedQuestion = questions.find((question) => question.id === parseInt(questionId, 10)) || null

    const { handleNextGroup } = useAuthContext()

    const handleAnswerOnClick = () => {
        navigate(`/answer-page/${selectedQuestion.id}`)
        if (selectedQuestion && selectedQuestion.answer) {
            console.log('es una adivinanza');
        } else {
            console.log('no es una adivinanza');
        }
    }


    const handleOnClick = () => {
        handleNextGroup()
        navigate('/next-team-page')
    }

    return (
        <>
            <body className='question-page-body'>
                <header className="question-header">
                    <BackButton onClick={() => navigate('/cards-page')} />
                    <h1 className='question-page-title'>Casilla</h1>
                    <div className="transparent"></div>
                </header>
                <img className='question-img' src={selectedQuestion.imgIcon || selectedQuestion.icon || selectedQuestion.iconStar} />
                <p className='question-text'>{selectedQuestion.text}</p>

                {selectedQuestion && !selectedQuestion.answer && !selectedQuestion.icon && (
                    <>
                        <div className='win-lose-buttons'>
                            <Buttons className='main-button' onClick={() => navigate(`/lose-page/${selectedQuestion.id}`)} placeholder='Perdió' />
                            <Buttons className='main-button' onClick={() => navigate(`/win-page/${selectedQuestion.id}`)} placeholder='Ganó' />
                        </div>
                    </>
                )}

                {selectedQuestion && selectedQuestion.answer && (
                    <Buttons className='main-button' onClick={handleAnswerOnClick} placeholder='Respuesta' />
                )}

                {selectedQuestion && selectedQuestion.icon && (
                    <Buttons className='main-button' onClick={handleOnClick} placeholder='Continuar' />
                )}
            </body>
        </>
    )
}