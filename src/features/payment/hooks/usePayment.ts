"use client"

import { useState } from "react"
import { paymentApi } from "../../../api/payment.api"

export interface Payment {
  id: string
  bookingId: string
  amount: number
  status: string
  paymentMethod: string
  transactionId: string
  createdAt: string
  updatedAt: string
}

export function usePayment() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const createPayment = async (bookingId: string, amount: number) => {
    setLoading(true)
    setError(null)
    try {
      const response = await paymentApi.createPayment(bookingId, amount)
      return { success: true, payment: response.data }
    } catch (err: any) {
      const message = err.response?.data?.message || "Lỗi khi tạo thanh toán"
      setError(message)
      return { success: false, error: message }
    } finally {
      setLoading(false)
    }
  }

  const getPaymentStatus = async (paymentId: string) => {
    setLoading(true)
    setError(null)
    try {
      const response = await paymentApi.getPaymentStatus(paymentId)
      return response.data
    } catch (err: any) {
      setError(err.message || "Lỗi khi kiểm tra trạng thái thanh toán")
      return null
    } finally {
      setLoading(false)
    }
  }

  const confirmPayment = async (paymentId: string, data: any) => {
    setLoading(true)
    setError(null)
    try {
      const response = await paymentApi.confirmPayment(paymentId, data)
      return { success: true, payment: response.data }
    } catch (err: any) {
      const message = err.response?.data?.message || "Lỗi khi xác nhận thanh toán"
      setError(message)
      return { success: false, error: message }
    } finally {
      setLoading(false)
    }
  }

  return { createPayment, getPaymentStatus, confirmPayment, loading, error }
}
