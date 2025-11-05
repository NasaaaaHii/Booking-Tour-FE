"use client"

import type React from "react"

import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import Button from "../../../components/common/Button"
import Input from "../../../components/common/Input"
import { useAuth } from "../hooks/useAuth"
import "./AuthPages.scss"

export default function LoginPage() {
  const navigate = useNavigate()
  const { login, loading, error } = useAuth()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [formError, setFormError] = useState<Record<string, string>>({})

  const validateForm = () => {
    const errors: Record<string, string> = {}
    if (!formData.email) errors.email = "Email là bắt buộc"
    if (!formData.password) errors.password = "Mật khẩu là bắt buộc"
    if (formData.email && !formData.email.includes("@")) {
      errors.email = "Email không hợp lệ"
    }
    return errors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormError(errors)
      return
    }

    const result = await login(formData.email, formData.password)
    if (result.success) {
      console.log("Login successful user: ", result.user)
      if(result.user.roles[0] === "ADMIN") {
        console.log("Redicecting to admin dashboard...");
        navigate("/admin/overview", {replace: true})
      } else {
        console.log("Redirecting to home...")
        navigate("/", {replace: true})
      }
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Đăng Nhập</h1>
          <p>Chào mừng quay lại TourBook</p>
        </div>

        {error && <div className="alert alert-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <Input
            label="Email"
            type="email"
            placeholder="Nhập email của bạn"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value })
              setFormError({ ...formError, email: "" })
            }}
            error={formError.email}
          />

          <Input
            label="Mật khẩu"
            type="password"
            placeholder="Nhập mật khẩu của bạn"
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value })
              setFormError({ ...formError, password: "" })
            }}
            error={formError.password}
          />

          <Button type="submit" size="lg" loading={loading} style={{ width: "100%" }}>
            Đăng Nhập
          </Button>
        </form>

        <div className="auth-footer">
          <p>
            Chưa có tài khoản?{" "}
            <Link to="/register" className="auth-link">
              Đăng ký ngay
            </Link>
          </p>
          <a href="#forgot" className="auth-link">
            Quên mật khẩu?
          </a>
        </div>
      </div>
    </div>
  )
}
