import './App.css'
import {Outlet} from 'react-router-dom';
import {useEffect} from "react";


function App() {

    useEffect(() => {
        // If on the homepage, hide scroll
        if (location.pathname === "https://lukytyna.vercel.app/") {
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
