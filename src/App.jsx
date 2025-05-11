import './App.css'
import {Outlet} from 'react-router-dom';
import {Header} from "./components/Header/Header.jsx";


function App() {
    return (
        <>
            <Outlet/>
        </>
    )
}

export default App
