"use client";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./UserLayout.scss"

interface UserLayoutProps {
  children: React.ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <>
      <Header />
      <main className="user-layout">
        <div className="user-container">{children}</div>
      </main>
      <Footer />
    </>
  );
}
