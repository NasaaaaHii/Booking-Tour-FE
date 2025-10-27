import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

interface AdminRoutePage {
    children: React.ReactNode;
}

const AdminRoute = ({children}: AdminRoutePage) => {
    const {user} = useAuthContext();

    if (!user) return <Navigate to={"/login"} />

    if(!user.roles?.includes("ADMIN")) return <Navigate to={"/"} />

    return <>{children}</>
}

export default AdminRoute;