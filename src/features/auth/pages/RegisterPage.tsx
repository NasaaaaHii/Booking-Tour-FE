"use client"

import type React from "react"

import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import Button from "../../../components/common/Button"
import Input from "../../../components/common/Input"
import { useAuth } from "../hooks/useAuth"
import "./AuthPages.scss"

export default function RegisterPage() {
  const navigate = useNavigate()
  const { register, loading, error } = useAuth()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [formError, setFormError] = useState<Record<string, string>>({})

  const validateForm = () => {
    const errors: Record<string, string> = {}
    if (!formData.fullName) errors.fullName = "Tên đầy đủ là bắt buộc"
    if (!formData.email) errors.email = "Email là bắt buộc"
    if (!formData.password) errors.password = "Mật khẩu là bắt buộc"
    if (!formData.confirmPassword) errors.confirmPassword = "Xác nhận mật khẩu là bắt buộc"
    if (formData.email && !formData.email.includes("@")) {
      errors.email = "Email không hợp lệ"
    }
    if (formData.password && formData.password.length < 6) {
      errors.password = "Mật khẩu phải có ít nhất 6 ký tự"
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Mật khẩu không khớp"
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

    const result = await register(formData.email, formData.password, formData.fullName)
    if (result.success) {
      navigate("/tours")
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Đăng Ký</h1>
          <p>Tạo tài khoản TourBook của bạn</p>
        </div>

        {error && <div className="alert alert-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <Input
            label="Tên đầy đủ"
            placeholder="Nhập tên của bạn"
            value={formData.fullName}
            onChange={(e) => {
              setFormData({ ...formData, fullName: e.target.value })
              setFormError({ ...formError, fullName: "" })
            }}
            error={formError.fullName}
          />

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
            helperText="Ít nhất 6 ký tự"
          />

          <Input
            label="Xác nhận mật khẩu"
            type="password"
            placeholder="Nhập lại mật khẩu"
            value={formData.confirmPassword}
            onChange={(e) => {
              setFormData({ ...formData, confirmPassword: e.target.value })
              setFormError({ ...formError, confirmPassword: "" })
            }}
            error={formError.confirmPassword}
          />

          <Button type="submit" size="lg" loading={loading} style={{ width: "100%" }}>
            Đăng Ký
          </Button>
        </form>

        <div className="auth-footer">
          <p>
            Đã có tài khoản?{" "}
            <Link to="/login" className="auth-link">
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
