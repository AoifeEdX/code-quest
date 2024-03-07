import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap'
// import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router >
      <App />
    </Router>
  </React.StrictMode>,
)