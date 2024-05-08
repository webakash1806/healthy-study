import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import store from './Redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
<div className='relative z-[100000000000000000]'>
  <ToastContainer/>
</div>
    </BrowserRouter>
  </Provider>
)