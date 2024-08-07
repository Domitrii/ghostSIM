import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { persist, store } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <HelmetProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </HelmetProvider>
      </PersistGate>
    </Provider>
</React.StrictMode>,
)
