"use client"

import type React from "react"

import  Sidebar  from "./SideBar"

interface AdminLayoutProps {
    children: React.ReactNode;
}


export default function AdminLayout({children}: AdminLayoutProps) {
    return (
        <div className="min-h-screen bg-background">
            <Sidebar />
            <main>
                <div className="p-6">{children}</div>
            </main>
        </div>
    )
}