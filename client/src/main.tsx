import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './routes/Home';
import Error from './routes/Error';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Provider } from 'react-redux'
import { store } from './components/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navigation />
    <Provider store={store}>
      <div className="main">
        <RouterProvider router={router} />
      </div>
    </Provider>
    <Footer />
  </React.StrictMode>
)
