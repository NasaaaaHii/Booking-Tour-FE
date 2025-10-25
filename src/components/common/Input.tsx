import type React from "react"
import "./Input.scss"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export default function Input({ label, error, helperText, ...props }: InputProps) {
  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}
      <input className={`input ${error ? "error" : ""}`} {...props} />
      {error && <span className="error-text">{error}</span>}
      {helperText && <span className="helper-text">{helperText}</span>}
    </div>
  )
}
