import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './styles.css'

import { App } from './src/App'

const rootElement = document.getElementById('app')
const root = createRoot(rootElement)
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)