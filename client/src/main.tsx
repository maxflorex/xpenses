import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './routes/Home';
import Error from './routes/Error';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import { ApolloProvider } from '@apollo/client';
import { client } from './api/api'
import { StytchHeadlessClient } from '@stytch/vanilla-js/headless'
import { StytchProvider } from '@stytch/react'
import ResetPassword from './routes/ResetPassword';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const persistor = persistStore(store)


// ROUTES

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
    errorElement: <Error />
  }
])

const stytchClient = new StytchHeadlessClient(import.meta.env.VITE_TOKEN)


// MAIN COMPONENT

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <StytchProvider stytch={stytchClient}>
          <ApolloProvider client={client}>
            <div className="main">
              <RouterProvider router={router} />
            </div>
          </ApolloProvider>
        </StytchProvider>
      </Provider>
    </PersistGate>
  </React.StrictMode>
)
