import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './main.css';
import { BrowserRouter } from 'react-router-dom';
import RegisterContextProvider from './context/registerContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <RegisterContextProvider>
        <App />
      </RegisterContextProvider>
    </StrictMode>
  </BrowserRouter>
)
