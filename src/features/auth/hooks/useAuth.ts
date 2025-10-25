"use client"

import { useState } from "react"
import { authApi } from "../../../api/auth.api"

export function useAuth() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const login = async (email: string, password: string) => {
    setLoading(true)
    setError(null)
    try {
      const response = await authApi.login(email, password)
      const { token, user } = response.data
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      return { success: true, user }
    } catch (err: any) {
      const message = err.response?.data?.message || "Đăng nhập thất bại"
      setError(message)
      return { success: false, error: message }
    } finally {
      setLoading(false)
    }
  }

  const register = async (email: string, password: string, fullName: string) => {
    setLoading(true)
    setError(null)
    try {
      const response = await authApi.register(email, password, fullName)
      const { token, user } = response.data
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      return { success: true, user }
    } catch (err: any) {
      const message = err.response?.data?.message || "Đăng ký thất bại"
      setError(message)
      return { success: false, error: message }
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
  }

  return { login, register, logout, loading, error }
}
