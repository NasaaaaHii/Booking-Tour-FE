"use client"

import { Link } from "react-router-dom"
import { useState } from "react"
import "./Header.scss"
import NotificationCenter from "./NotificationCenter"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isAuthenticated = !!localStorage.getItem("token")

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">✈️</span>
          <span className="logo-text">TourBook</span>
        </Link>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>

        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" className="nav-link">
            Trang chủ
          </Link>
          <Link to="/tours" className="nav-link">
            Tours
          </Link>
          <Link to="/about" className="nav-link">
            Về chúng tôi
          </Link>
          <Link to="/contact" className="nav-link">
            Liên hệ
          </Link>

          <div className="nav-auth">
            {isAuthenticated ? (
              <>
                <NotificationCenter />
                <Link to="/bookings" className="nav-link">
                  Đặt chỗ của tôi
                </Link>
                <button
                  className="btn-logout"
                  onClick={() => {
                    localStorage.removeItem("token")
                    window.location.href = "/"
                  }}
                >
                  Đăng xuất
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-secondary">
                  Đăng nhập
                </Link>
                <Link to="/register" className="btn btn-primary">
                  Đăng ký
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
