import React from 'react';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';

import Join from '../join';

// import { Container } from './styles';

function Router() {
const router   = createBrowserRouter([
   
    {
        path:'/',
        element:<Join/>
    }
])
return <RouterProvider router={router}/>
}

export default Router;