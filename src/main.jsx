import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {HomePage} from "./pages/HomePage/HomePage.jsx";
import {Guidepost} from "./pages/Guidepost/Guidepost.jsx";
import {When} from "./pages/When/When.jsx";
import {Where} from "./pages/Where/Where.jsx";
import {InfoPage} from "./pages/InfoPage/InfoPage.jsx";
import {RSVP} from "./pages/RSVP/RSVP.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/rozcestnik",
                element: <Guidepost/>
            },
            {
                path: "/kdy",
                element: <When/>
            },
            {
                path: "/kde",
                element: <Where/>
            },
            {
                path: "/info",
                element: <InfoPage />
            },
            {
                path:"/RSVP",
                element:<RSVP />
            }
        ]
    }
]);
createRoot(document.querySelector('#root')).render(
    <RouterProvider router={router}/>,
);
