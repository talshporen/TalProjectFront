import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Components/App'
import { StrictMode } from 'react'


createRoot(document.getElementById('root')!).render(
    <StrictMode>
    <App />
    </StrictMode>
)
