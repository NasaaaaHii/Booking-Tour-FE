import { Link } from "react-router-dom"
import Button from "../components/common/Button"
import "./Home.scss"

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="text-balance">Khám phá những điểm đến tuyệt vời</h1>
          <p>Đặt tour du lịch của bạn ngay hôm nay và tạo những kỷ niệm không quên</p>
          <Link to="/tours">
            <Button size="lg">Xem Tours</Button>
          </Link>
        </div>
        <div className="hero-image">
          <img src="/beautiful-travel-destination.jpg" alt="Travel destination" />
        </div>
      </section>

      <section className="features section">
        <h2 className="section-title">Tại sao chọn chúng tôi?</h2>
        <div className="grid grid-3">
          <div className="card feature-card">
            <div className="feature-icon">✈️</div>
            <h3>Tours Đa Dạng</h3>
            <p>Hàng trăm tour du lịch đến các điểm đến hấp dẫn trên khắp thế giới</p>
          </div>
          <div className="card feature-card">
            <div className="feature-icon">💰</div>
            <h3>Giá Tốt Nhất</h3>
            <p>Chúng tôi cam kết cung cấp giá tốt nhất với chất lượng dịch vụ cao</p>
          </div>
          <div className="card feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>An Toàn & Bảo Mật</h3>
            <p>Thanh toán an toàn và bảo vệ thông tin cá nhân của bạn</p>
          </div>
        </div>
      </section>

      <section className="cta section">
        <h2>Sẵn sàng bắt đầu cuộc phiêu lưu?</h2>
        <p>Đăng ký ngay để nhận ưu đãi đặc biệt</p>
        <Link to="/register">
          <Button size="lg">Đăng Ký Ngay</Button>
        </Link>
      </section>
    </div>
  )
}
