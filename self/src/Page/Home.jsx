import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Home() {
    return (
        <>
            <Navbar/>
            <div className="main">
                <h1>Strona główna</h1>
            </div>

        </>
    );
}
export default Home;