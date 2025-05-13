import './App.css'
import {Outlet, useLocation} from 'react-router-dom';
import {useEffect} from "react";


function App() {
    const location = useLocation();

    useEffect(() => {
        // If on the homepage, hide scroll
        if (location.pathname === "/") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [location.pathname]);

    return (
        <>
            <Outlet/>
        </>
    )
}

export default App
