import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../components/Home/Home';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home/>
            }
        ]
    },
    // {
    //     path: '/',
    //     element: 
    // }
])

export default Router;