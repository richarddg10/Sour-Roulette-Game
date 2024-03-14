import { Routes, Route } from 'react-router-dom'
import { GameRouters } from './routers/GameRouters'

export function AppRouters () {
    return (
      <>
        <main>
            <Routes>
                <Route
                  path='/*'
                  element={<GameRouters />}
                />
            </Routes>
        </main>
      </>
    )
  }
  