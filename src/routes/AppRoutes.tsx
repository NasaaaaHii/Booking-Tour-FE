import { Routes, Route } from "react-router-dom";
import UserLayout from "../components/layout/user/UserLayout";
import AdminRoute from "./AdminRoutes";
import AdminLayout from "../components/layout/admin/AdminLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import TourList from "../features/tour/pages/TourList";
import TourDetail from "../features/tour/pages/TourDetail";
import BookingList from "../features/booking/pages/BookingList";
import BookingDetail from "../features/booking/pages/BookingDetail";
import PaymentPage from "../features/payment/pages/PaymentPage";

import { DashboardPage } from "../features/admin/pages/Dashboard";
import { UserManagementPage } from "../features/admin/pages/UserManagement";
import { TourManagementPage } from "../features/admin/pages/TourManagement";
import { BookingManagementPage } from "../features/admin/pages/BookingManagement";
import { ReportsPage } from "../features/admin/pages/Reports";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      {/* USER ROUTES */}
      <Route
        path="/"
        element={
          <UserLayout>
            <Home />
          </UserLayout>
        }
      />
      <Route
        path="/about"
        element={
          <UserLayout>
            <About />
          </UserLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <UserLayout>
            <Contact />
          </UserLayout>
        }
      />
      <Route
        path="/login"
        element={
          <UserLayout>
            <LoginPage />
          </UserLayout>
        }
      />
      <Route
        path="/register"
        element={
          <UserLayout>
            <RegisterPage />
          </UserLayout>
        }
      />
      <Route
        path="/tours"
        element={
          <UserLayout>
            <TourList />
          </UserLayout>
        }
      />
      <Route
        path="/tours/:id"
        element={
          <UserLayout>
            <TourDetail />
          </UserLayout>
        }
      />
      <Route
        path="/bookings"
        element={
          <UserLayout>
            <BookingList />
          </UserLayout>
        }
      />
      <Route
        path="/bookings/:id"
        element={
          <UserLayout>
            <BookingDetail />
          </UserLayout>
        }
      />
      <Route
        path="/payment"
        element={
          <UserLayout>
            <PaymentPage />
          </UserLayout>
        }
      />

      {/* ADMIN ROUTES */}
      <Route
        path="/admin/dashboard"
        element={
          <AdminRoute>
            <AdminLayout>
              <DashboardPage />
            </AdminLayout>
          </AdminRoute>
        }
      />
      <Route
        path="/admin/users"
        element={
          <AdminRoute>
            <AdminLayout>
              <UserManagementPage />
            </AdminLayout>
          </AdminRoute>
        }
      />
      <Route
        path="/admin/tours"
        element={
          <AdminRoute>
            <AdminLayout>
              <TourManagementPage />
            </AdminLayout>
          </AdminRoute>
        }
      />
      <Route
        path="/admin/bookings"
        element={
          <AdminRoute>
            <AdminLayout>
              <BookingManagementPage />
            </AdminLayout>
          </AdminRoute>
        }
      />
      <Route
        path="/admin/reports"
        element={
          <AdminRoute>
            <AdminLayout>
              <ReportsPage />
            </AdminLayout>
          </AdminRoute>
        }
      />

      {/* FALLBACK */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
