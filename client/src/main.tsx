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
import ResetPassword from './routes/ResetPassword';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Footer from './components/Footer';

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

// MAIN COMPONENT

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <RouterProvider router={router} />
          <Footer />
        </ApolloProvider>
      </Provider>
    </PersistGate>
  </React.StrictMode>
)
