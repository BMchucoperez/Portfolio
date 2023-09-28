import { Routes, Route } from "react-router";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

function App(){
    const location = useLocation()
    const [navbarVisible, setNavbarVisible] = useState(true);

    useEffect(() => {
        if(location.pathname==='*'){
        setNavbarVisible(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navbarVisible]);

    return(
        <>
            {navbarVisible && <Navbar />}
            <Routes>
                <Route path="/" element = {<Landing/>}/>
            </Routes>
        </>
    );
}

export default App;