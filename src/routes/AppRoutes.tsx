import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import NotFound from "../pages/NotFound"
import LoginPage from "../features/auth/pages/LoginPage"
import RegisterPage from "../features/auth/pages/RegisterPage"
import TourList from "../features/tour/pages/TourList"
import TourDetail from "../features/tour/pages/TourDetail"
import BookingList from "../features/booking/pages/BookingList"
import BookingDetail from "../features/booking/pages/BookingDetail"
import PaymentPage from "../features/payment/pages/PaymentPage"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/tours" element={<TourList />} />
      <Route path="/tours/:id" element={<TourDetail />} />
      <Route path="/bookings" element={<BookingList />} />
      <Route path="/bookings/:id" element={<BookingDetail />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
