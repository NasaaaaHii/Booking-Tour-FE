"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Button from "../../../components/common/Button"
import { useBooking } from "../hooks/useBooking"
import { formatCurrency } from "../../../utils/formatCurrency"
import { formatDate } from "../../../utils/formatDate"
import { BOOKING_STATUS } from "../../../utils/constants"
import "./BookingPages.scss"

export default function BookingList() {
  const { bookings, loading, error, fetchBookings, cancelBooking } = useBooking()
  const [selectedStatus, setSelectedStatus] = useState<string>("")
  const [cancelingId, setCancelingId] = useState<string | null>(null)

  useEffect(() => {
    fetchBookings()
  }, [])

  const handleCancelBooking = async (id: string) => {
    if (window.confirm("Bạn có chắc chắn muốn hủy booking này?")) {
      setCancelingId(id)
      const result = await cancelBooking(id)
      setCancelingId(null)
      if (result.success) {
        fetchBookings()
      }
    }
  }

  const filteredBookings = selectedStatus ? bookings.filter((b) => b.status === selectedStatus) : bookings

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, string> = {
      [BOOKING_STATUS.PENDING]: "pending",
      [BOOKING_STATUS.CONFIRMED]: "confirmed",
      [BOOKING_STATUS.CANCELLED]: "cancelled",
      [BOOKING_STATUS.COMPLETED]: "completed",
    }
    return statusMap[status] || "pending"
  }

  return (
    <div className="booking-list-page">
      <div className="booking-header">
        <h1>Đặt Chỗ Của Tôi</h1>
        <p>Quản lý tất cả các booking tour của bạn</p>
      </div>

      <div className="booking-filters">
        <button className={`status-btn ${selectedStatus === "" ? "active" : ""}`} onClick={() => setSelectedStatus("")}>
          Tất cả ({bookings.length})
        </button>
        <button
          className={`status-btn ${selectedStatus === BOOKING_STATUS.PENDING ? "active" : ""}`}
          onClick={() => setSelectedStatus(BOOKING_STATUS.PENDING)}
        >
          Chờ xác nhận
        </button>
        <button
          className={`status-btn ${selectedStatus === BOOKING_STATUS.CONFIRMED ? "active" : ""}`}
          onClick={() => setSelectedStatus(BOOKING_STATUS.CONFIRMED)}
        >
          Đã xác nhận
        </button>
        <button
          className={`status-btn ${selectedStatus === BOOKING_STATUS.COMPLETED ? "active" : ""}`}
          onClick={() => setSelectedStatus(BOOKING_STATUS.COMPLETED)}
        >
          Hoàn thành
        </button>
      </div>

      {error && <div className="alert alert-error">{error}</div>}

      {loading ? (
        <div className="loading">Đang tải bookings...</div>
      ) : filteredBookings.length === 0 ? (
        <div className="empty-state">
          <p>Bạn chưa có booking nào</p>
          <Link to="/tours">
            <Button>Xem Tours</Button>
          </Link>
        </div>
      ) : (
        <div className="bookings-list">
          {filteredBookings.map((booking) => (
            <div key={booking.id} className="booking-card card">
              <div className="booking-image">
                <img src={booking.tourImage || "/placeholder.svg?key=booking"} alt={booking.tourName} />
              </div>

              <div className="booking-content">
                <div className="booking-header-info">
                  <div>
                    <h3>{booking.tourName}</h3>
                    <p className="booking-date">Đặt ngày: {formatDate(booking.bookingDate)}</p>
                  </div>
                  <span className={`status-badge status-${getStatusBadge(booking.status)}`}>{booking.status}</span>
                </div>

                <div className="booking-details">
                  <div className="detail-item">
                    <span className="label">Số người:</span>
                    <span className="value">{booking.participants} người</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Ngày khởi hành:</span>
                    <span className="value">{formatDate(booking.startDate)}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Ngày kết thúc:</span>
                    <span className="value">{formatDate(booking.endDate)}</span>
                  </div>
                </div>

                <div className="booking-footer">
                  <div className="price">
                    <span className="label">Tổng cộng:</span>
                    <span className="amount">{formatCurrency(booking.totalPrice)}</span>
                  </div>

                  <div className="actions">
                    <Link to={`/bookings/${booking.id}`}>
                      <Button size="sm" variant="outline">
                        Chi Tiết
                      </Button>
                    </Link>
                    {booking.status === BOOKING_STATUS.PENDING && (
                      <Button
                        size="sm"
                        variant="danger"
                        loading={cancelingId === booking.id}
                        onClick={() => handleCancelBooking(booking.id)}
                      >
                        Hủy
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
