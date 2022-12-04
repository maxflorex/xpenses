import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './routes/Home';
import Error from './routes/Error';
import { Provider } from 'react-redux'
import { store } from './components/store';
import { ApolloProvider } from '@apollo/client';
import { client } from './api/api'


// ROUTES

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  }
])


// MAIN COMPONENT

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <div className="main">
          <RouterProvider router={router} />
        </div>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
)
