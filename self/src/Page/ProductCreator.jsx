import React from "react";
import '../../src/App.scss';
import Button from "../Components/Button";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

function ProductCreator() {
    return (
        <>
            <Navbar />
            <div className="btn_place">
                <Link to='/product_Creator/self'>
                    <Button type="self size pill" text="Self" />
                </Link>
                <Button type="joy size pill" text="Joy" />
                <Button type="move size pill" text="Move" />
            </div>
        </>
    );
}
export default ProductCreator;