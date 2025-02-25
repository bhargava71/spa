import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header1 from "./Header1";

const Layout = () => {
   
    return (
        <div className="flex flex-col h-screen">

            <Header1 />

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
