import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

export function changeColor(button) {
  console.log('button', button)
  button.classList.add('clicked');
  setTimeout(function() {
    button.classList.remove('clicked');
  }, 1000);
}
