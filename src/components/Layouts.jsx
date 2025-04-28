import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
   
    return (
        <div className="flex flex-col h-screen">

            <Header />

            <div className="flex flex-1">

                    <Outlet />
                </div>


            

            <Footer />
        </div>
    );
};

export default Layout;
