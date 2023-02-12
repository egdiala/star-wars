import React from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Sidebar />
            <main className="flex-1 overflow-hidden relative">
                <Navbar />
                <div className="pt-28 px-10 overflow-auto flex flex-col justify-between h-80 min-h-full mx-auto">
                    {children}
                </div>
            </main>
        </>
    )
}

export default DashboardLayout;