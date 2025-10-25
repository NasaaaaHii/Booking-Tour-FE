"use client"

import { useState, useEffect } from "react"
import { useNotification } from "../../features/notification/hooks/useNotification"
import NotificationItem from "../../features/notification/components/NotificationItem"
import Modal from "../common/Modal"
import "./NotificationCenter.scss"

export default function NotificationCenter() {
  const { notifications, unreadCount, fetchNotifications, markAsRead, deleteNotification } = useNotification()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    fetchNotifications()
    const interval = setInterval(fetchNotifications, 30000) // Refresh every 30 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <button className="notification-bell" onClick={() => setIsOpen(true)}>
        🔔{unreadCount > 0 && <span className="badge">{unreadCount}</span>}
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Thông Báo">
        <div className="notification-center">
          {notifications.length === 0 ? (
            <div className="empty-notifications">
              <p>Không có thông báo nào</p>
            </div>
          ) : (
            <div className="notifications-list">
              {notifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  {...notification}
                  onMarkAsRead={markAsRead}
                  onDelete={deleteNotification}
                />
              ))}
            </div>
          )}
        </div>
      </Modal>
    </>
  )
}
