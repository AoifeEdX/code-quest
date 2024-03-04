import { UserProvider } from './context/userContext.jsx';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap'
// import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router >
      <UserProvider>
      <App />
      </UserProvider>
    </Router>
  </React.StrictMode>,
)