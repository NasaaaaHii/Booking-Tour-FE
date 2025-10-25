import axios from "axios"
import { API_BASE_URL } from "../utils/constants"

const api = axios.create({
  baseURL: `${API_BASE_URL}/api/tours`,
})

export const tourApi = {
  getTours: (page = 1, limit = 10, category?: string) => api.get("/", { params: { page, limit, category } }),

  getTourById: (id: string) => api.get(`/${id}`),

  searchTours: (query: string) => api.get("/search", { params: { q: query } }),
}
