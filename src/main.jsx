import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Make sure this file exists for Tailwind
import App from './App.jsx' // Double check if your file is App.js or App.jsx

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)