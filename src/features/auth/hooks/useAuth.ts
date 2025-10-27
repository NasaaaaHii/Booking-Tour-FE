"use client";

import { useState } from "react";
import { authApi } from "../../../api/auth.api";
import { useAuthContext } from "../../../context/AuthContext";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login: setAuth, logout: clearAuth } = useAuthContext();

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await authApi.login(email, password);
      const { accessToken, refreshToken} = response.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      const currentUser = await authApi.getCurrentUser();
      const user = currentUser.data

      setAuth(user, accessToken);
      return { success: true, user };
    } catch (err: any) {
      const message = err.response?.data?.message || "Đăng nhập thất bại";
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  const register = async (
    email: string,
    password: string,
    fullName: string
  ) => {
    setLoading(true);
    setError(null);
    try {
      const response = await authApi.register(email, password, fullName);
      const { accessToken, refreshToken} = response.data;

      localStorage.setItem("accessToken",accessToken)
      localStorage.setItem("refreshToken", refreshToken)

      const currentUser = await authApi.getCurrentUser();
      const user = currentUser.data

      setAuth(user, accessToken);
      return { success: true };
    } catch (err: any) {
      const message = err.response?.data?.message || "Đăng ký thất bại";
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    clearAuth();
  };

  return { login, register, logout, loading, error };
}
