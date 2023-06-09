import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ProfileProvider } from './context/profile'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProfileProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProfileProvider>
  </React.StrictMode>,
)
