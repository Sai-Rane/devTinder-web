import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Body = () => {
    return (
        <>
            <Navbar />
            {/* Any children routes of my Body component will be rendered in the Outlet */}
            <Outlet />
            <Footer />
        </>
    );
};

export default Body;
