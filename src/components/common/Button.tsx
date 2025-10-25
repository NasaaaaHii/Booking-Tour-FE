import type React from "react"
import "./Button.scss"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "outline"
  size?: "sm" | "md" | "lg"
  loading?: boolean
  children: React.ReactNode
}

export default function Button({
  variant = "primary",
  size = "md",
  loading = false,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button className={`btn btn-${variant} btn-${size}`} disabled={disabled || loading} {...props}>
      {loading ? "⏳ Đang xử lý..." : children}
    </button>
  )
}
