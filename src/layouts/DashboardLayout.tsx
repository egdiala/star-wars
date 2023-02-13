import React from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <>
            <Sidebar />
            <main className="flex-1 overflow-hidden relative">
                <Navbar />
                <div className="pt-28 px-10 overflow-auto flex flex-col justify-between h-80 min-h-full mx-auto">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default DashboardLayout;