"use client"

import { formatDateTime } from "../../../utils/formatDate"
import "./NotificationItem.scss"

interface NotificationItemProps {
  id: string
  title: string
  message: string
  type: "info" | "success" | "warning" | "error"
  read: boolean
  createdAt: string
  onMarkAsRead: (id: string) => void
  onDelete: (id: string) => void
}

export default function NotificationItem({
  id,
  title,
  message,
  type,
  read,
  createdAt,
  onMarkAsRead,
  onDelete,
}: NotificationItemProps) {
  const getIcon = () => {
    switch (type) {
      case "success":
        return "✓"
      case "error":
        return "✕"
      case "warning":
        return "!"
      default:
        return "ℹ"
    }
  }

  return (
    <div className={`notification-item notification-${type} ${!read ? "unread" : ""}`}>
      <div className="notification-icon">{getIcon()}</div>

      <div className="notification-content">
        <h4>{title}</h4>
        <p>{message}</p>
        <span className="notification-time">{formatDateTime(createdAt)}</span>
      </div>

      <div className="notification-actions">
        {!read && (
          <button className="action-btn" onClick={() => onMarkAsRead(id)} title="Mark as read">
            ✓
          </button>
        )}
        <button className="action-btn delete" onClick={() => onDelete(id)} title="Delete">
          ✕
        </button>
      </div>
    </div>
  )
}
