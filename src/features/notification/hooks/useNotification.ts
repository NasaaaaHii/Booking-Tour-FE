"use client"

import { useState } from "react"
import { notificationApi } from "../../../api/notification.api"

export interface Notification {
  id: string
  title: string
  message: string
  type: "info" | "success" | "warning" | "error"
  read: boolean
  createdAt: string
  actionUrl?: string
}

export function useNotification() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchNotifications = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await notificationApi.getNotifications()
      setNotifications(response.data.data || response.data)
    } catch (err: any) {
      setError(err.message || "Lỗi khi tải notifications")
    } finally {
      setLoading(false)
    }
  }

  const markAsRead = async (id: string) => {
    try {
      await notificationApi.markAsRead(id)
      setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
    } catch (err: any) {
      console.error("Error marking notification as read:", err)
    }
  }

  const deleteNotification = async (id: string) => {
    try {
      await notificationApi.deleteNotification(id)
      setNotifications(notifications.filter((n) => n.id !== id))
    } catch (err: any) {
      console.error("Error deleting notification:", err)
    }
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  return {
    notifications,
    loading,
    error,
    unreadCount,
    fetchNotifications,
    markAsRead,
    deleteNotification,
  }
}
