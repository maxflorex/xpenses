import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './routes/Home';
import Error from './routes/Error';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Provider } from 'react-redux'
import { store } from './components/store';
import { ApolloProvider } from '@apollo/client';
import { client } from './api/api'
import EditExpense from './routes/EditExpense'


// ROUTES

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/:id',
    element: <EditExpense />,
  },
])


// MAIN COMPONENT

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <div className="main">
          <Navigation />
          <RouterProvider router={router} />
          <Footer />
        </div>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
)
