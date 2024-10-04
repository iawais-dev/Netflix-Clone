import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import SignInPage from './Pages/SignIn.jsx'
import SignUpPage from './Pages/SignUp.jsx'
import BrowsePage from './Pages/BrowsePage.jsx'
import { Provider } from 'react-redux'
import Store from './Redux/Store.js'
// import { Pri } from './layout/PrivateLayout.jsx'
import PrivateRoute from './layout/PrivateLayout.jsx'
import Player from './Components/Player.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <Home />,
        path: '/'
      },
      {
        path: '/signup',
        element: <SignUpPage />
      },
      {
        path: '/signin',
        element: <SignInPage />
      },
      {
        element: <PrivateRoute />, // Protecting the routes
        children: [
            {
                path: '/browse',
                element: <BrowsePage />
            },
         
        ]
    }
    ]
  }  ,
   {
               path: '/player/:id',
               element:<Player/>
            }
])
createRoot(document.getElementById('root')).render(

  <StrictMode>
      <Provider store={Store}>
   
    <RouterProvider router={router}> 

    </RouterProvider>
    </Provider>

  </StrictMode>


)
