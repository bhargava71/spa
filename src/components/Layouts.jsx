import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false); // Move state to Layout

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
