import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import NotesContextProvider from './Context/NotesContext.jsx'
import './main.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <NotesContextProvider>
        <App />
      </NotesContextProvider>
  </BrowserRouter>
)
