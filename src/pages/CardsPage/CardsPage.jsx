import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BackButton, QuestionsCards } from '../../components'
import questions from '../../Questions/Questions'
import './CardsPage.css'

export function CardsPage() {
    const navigate = useNavigate()
    const [selectedQuestion, setSelectedQuestion] = useState(null)

    const handleSelectedCard = (question) => {
        setSelectedQuestion((prevQuestion) => {
            console.log('Previous Selected Question:', prevQuestion);
            console.log('New Selected Question:', question);
            return question;
          });
        navigate(`/question-page/${question.id}`)
    }

    return (
        <>
            <body className='cards-page-body'>
                <div className='cards-page-div'>
                    <BackButton onClick={() => navigate('/')} />
                    <div className='cards-container'>
                        {
                            questions.map(({ id, title, icon, iconStar, text, answer }) => {
                                return(
                                    <>
                                        <QuestionsCards onClick={() => handleSelectedCard({ id, title, icon, iconStar, text, answer })} idKey={id} infoTitle={title} infoImgIcon={icon || iconStar} />
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </body>
        </>
    )
}