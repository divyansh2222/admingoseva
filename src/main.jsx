import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DashboardProvder from './context/DashboardProvider.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DashboardProvder>
    <App />
    </DashboardProvder>
  </StrictMode>,
)
