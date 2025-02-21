import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
   
    return (
        <div className="flex flex-col h-screen">

            <Header />

            <div className="flex flex-1">

                <div className="mt-[50px] bg-gray-100">
                    <Outlet />
                </div>


            </div>

            <Footer />
        </div>
    );
};

export default Layout;
