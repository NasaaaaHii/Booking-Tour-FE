import axios from "axios"
import { API_BASE_URL } from "../utils/constants"

const api = axios.create({
  baseURL: `${API_BASE_URL}/api/notifications`,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const notificationApi = {
  getNotifications: () => api.get("/"),

  markAsRead: (id: string) => api.put(`/${id}/read`),

  deleteNotification: (id: string) => api.delete(`/${id}`),
}
