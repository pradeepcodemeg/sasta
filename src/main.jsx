import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.min.css'
import './style.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { persistedStore, store } from './store/store.js'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <App />
    </PersistGate>
    </Provider>
    </Router>
  </React.StrictMode>,
)
