"use client"

import { useState } from "react"

import type React from "react"
import "./Pages.scss"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Liên Hệ Chúng Tôi</h1>
        <p>Chúng tôi rất muốn nghe từ bạn</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <span className="icon">📍</span>
            <h3>Địa Chỉ</h3>
            <p>123 Đường Nguyễn Huệ, Quận 1, TP.HCM, Việt Nam</p>
          </div>
          <div className="info-card">
            <span className="icon">📞</span>
            <h3>Điện Thoại</h3>
            <p>+84 (0) 123 456 789</p>
          </div>
          <div className="info-card">
            <span className="icon">📧</span>
            <h3>Email</h3>
            <p>support@tourbook.com</p>
          </div>
          <div className="info-card">
            <span className="icon">🕐</span>
            <h3>Giờ Làm Việc</h3>
            <p>Thứ 2 - Chủ Nhật: 8:00 - 22:00</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          {submitted && <div className="success-message">Cảm ơn bạn! Chúng tôi sẽ liên hệ với bạn sớm.</div>}

          <div className="form-group">
            <label>Tên</label>
            <input
              type="text"
              placeholder="Nhập tên của bạn"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Nhập email của bạn"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Chủ Đề</label>
            <input
              type="text"
              placeholder="Nhập chủ đề"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Tin Nhắn</label>
            <textarea
              placeholder="Nhập tin nhắn của bạn"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Gửi Tin Nhắn
          </button>
        </form>
      </div>
    </div>
  )
}
