import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.bundle.min.js'
import './App.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
