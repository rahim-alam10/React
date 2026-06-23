import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from './components/Card.js'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
