import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../Component/Home/Home/Home';
import Errorpage from '../Component/ErrorPage/Errorpage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <Errorpage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
])
  

export default router;