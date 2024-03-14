import { Routes, Route } from 'react-router-dom'
import { InicialPage, InstructionsPage, TeamsPage, NextTeamPage, CardsPage, QuestionPage, AnswerPage, WinPage, LosePage } from '../pages'

export function GameRouters() {
    return (
        <>
            <Routes>
                <Route
                    path='/'
                    element={<InicialPage />}
                />
                <Route
                    path='/instructions-page'
                    element={<InstructionsPage />}
                />
                <Route
                    path='/teams-page'
                    element={<TeamsPage />}
                />
                <Route
                    path='/next-team-page'
                    element={<NextTeamPage />}
                />
                <Route
                    path='/cards-page'
                    element={<CardsPage />}
                />
                <Route
                    path='/question-page/:questionId'
                    element={<QuestionPage />}
                />
                <Route
                    path='/answer-page/:questionId'
                    element={<AnswerPage />}
                />
                <Route
                    path='/win-page/:questionId'
                    element={<WinPage />}
                />
                <Route
                    path='/lose-page/:questionId'
                    element={<LosePage />}
                />
            </Routes>
        </>
    )
}