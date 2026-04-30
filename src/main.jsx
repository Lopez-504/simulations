import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import SimulationResults from './components/IlluminaResults.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SimulationResults/>
  </StrictMode>,
)
