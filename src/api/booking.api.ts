import axios from "axios"
import { API_BASE_URL } from "../utils/constants"

const api = axios.create({
  baseURL: `${API_BASE_URL}/api/bookings`,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const bookingApi = {
  getBookings: () => api.get("/"),

  getBookingById: (id: string) => api.get(`/${id}`),

  createBooking: (tourId: string, data: any) => api.post("/", { tourId, ...data }),

  updateBooking: (id: string, data: any) => api.put(`/${id}`, data),

  cancelBooking: (id: string) => api.delete(`/${id}`),
}
