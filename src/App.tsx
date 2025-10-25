import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
