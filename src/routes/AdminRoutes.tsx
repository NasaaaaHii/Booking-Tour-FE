import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

interface AdminRoutePage {
  children: React.ReactNode;
}

const AdminRoute = ({ children }: AdminRoutePage) => {
  const { user, loading } = useAuthContext();

  // Khi context đang load dữ liệu từ localStorage
  if (loading) {
    return <div className="text-center text-gray-400 mt-10">Đang tải...</div>;
  }

  // Sau khi load xong mà vẫn chưa có user → redirect login
  if (!user) return <Navigate to="/login" replace />;

  // Nếu user không phải admin
  if (!user.roles?.includes("ADMIN")) return <Navigate to="/" replace />;

  return <>{children}</>;
};

export default AdminRoute;
