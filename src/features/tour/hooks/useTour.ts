"use client"

import { useState } from "react"
import { tourApi } from "../../../api/tour.api"

export interface Tour {
  id: string
  name: string
  description: string
  price: number
  duration: number
  category: string
  image: string
  rating: number
  reviews: number
  location: string
  startDate: string
  endDate: string
  maxParticipants: number
  currentParticipants: number
}

export function useTour() {
  const [tours, setTours] = useState<Tour[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchTours = async (page = 1, category?: string) => {
    setLoading(true)
    setError(null)
    try {
      const response = await tourApi.getTours(page, 10, category)
      setTours(response.data.data || response.data)
    } catch (err: any) {
      setError(err.message || "Lỗi khi tải tours")
    } finally {
      setLoading(false)
    }
  }

  const getTourById = async (id: string) => {
    setLoading(true)
    setError(null)
    try {
      const response = await tourApi.getTourById(id)
      return response.data
    } catch (err: any) {
      setError(err.message || "Lỗi khi tải tour")
      return null
    } finally {
      setLoading(false)
    }
  }

  const searchTours = async (query: string) => {
    setLoading(true)
    setError(null)
    try {
      const response = await tourApi.searchTours(query)
      setTours(response.data.data || response.data)
    } catch (err: any) {
      setError(err.message || "Lỗi khi tìm kiếm tours")
    } finally {
      setLoading(false)
    }
  }

  return { tours, loading, error, fetchTours, getTourById, searchTours }
}
