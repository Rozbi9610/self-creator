import React from "react";
import { Header } from '../Components/Header';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <Header />
            <div className="container text-center">
                <Link to='/self'>
                    <h4>Self Creator</h4>
                </Link>
                <Link to='/joym'  >
                    <h4>JOY M Creator</h4>
                </Link>
            </div>

        </div>
    );
}
export default Home;