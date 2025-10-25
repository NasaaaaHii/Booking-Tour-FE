"use client"

import { useState } from "react"
import { bookingApi } from "../../../api/booking.api"

export interface Booking {
  id: string
  tourId: string
  tourName: string
  tourImage: string
  participants: number
  totalPrice: number
  status: string
  bookingDate: string
  startDate: string
  endDate: string
  customerName: string
  customerEmail: string
  customerPhone: string
}

export function useBooking() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchBookings = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await bookingApi.getBookings()
      setBookings(response.data.data || response.data)
    } catch (err: any) {
      setError(err.message || "Lỗi khi tải bookings")
    } finally {
      setLoading(false)
    }
  }

  const getBookingById = async (id: string) => {
    setLoading(true)
    setError(null)
    try {
      const response = await bookingApi.getBookingById(id)
      return response.data
    } catch (err: any) {
      setError(err.message || "Lỗi khi tải booking")
      return null
    } finally {
      setLoading(false)
    }
  }

  const createBooking = async (tourId: string, data: any) => {
    setLoading(true)
    setError(null)
    try {
      const response = await bookingApi.createBooking(tourId, data)
      return { success: true, booking: response.data }
    } catch (err: any) {
      const message = err.response?.data?.message || "Lỗi khi tạo booking"
      setError(message)
      return { success: false, error: message }
    } finally {
      setLoading(false)
    }
  }

  const cancelBooking = async (id: string) => {
    setLoading(true)
    setError(null)
    try {
      await bookingApi.cancelBooking(id)
      setBookings(bookings.filter((b) => b.id !== id))
      return { success: true }
    } catch (err: any) {
      const message = err.response?.data?.message || "Lỗi khi hủy booking"
      setError(message)
      return { success: false, error: message }
    } finally {
      setLoading(false)
    }
  }

  return { bookings, loading, error, fetchBookings, getBookingById, createBooking, cancelBooking }
}
