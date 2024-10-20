import React from "react";
import { Link } from "react-router-dom";

function Navbar({ page, text }) {
    return <nav className="nav">
        <Link to='/'>
            <a className="site-title">Chaos</a>
        </Link>
        <ul>
            <li>
                <Link to='/product_Creator'>
                    <a className="page">Product Generator</a>
                </Link>
            </li>
            <li>
                <a>{page}{text}</a>
            </li>
        </ul>
    </nav >
}
export default Navbar;