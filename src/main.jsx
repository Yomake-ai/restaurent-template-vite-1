import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// Import styles
import "@styles/css/plugins/bootstrap.min.css"
import "@styles/css/plugins/swiper.min.css"
import "@styles/css/plugins/font-awesome.min.css"
import '@styles/scss/style.scss'
import "./app/globals.css"

// Register Swiper custom elements
import { register } from "swiper/element/bundle"
register()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
