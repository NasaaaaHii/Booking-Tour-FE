import { Link } from "react-router-dom"
import "./Footer.scss"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>TourBook</h3>
          <p>Khám phá thế giới cùng chúng tôi</p>
        </div>

        <div className="footer-section">
          <h4>Liên kết nhanh</h4>
          <ul>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/tours">Tours</Link>
            </li>
            <li>
              <Link to="/about">Về chúng tôi</Link>
            </li>
            <li>
              <Link to="/contact">Liên hệ</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Hỗ trợ</h4>
          <ul>
            <li>
              <a href="#help">Trợ giúp</a>
            </li>
            <li>
              <a href="#privacy">Chính sách bảo mật</a>
            </li>
            <li>
              <a href="#terms">Điều khoản sử dụng</a>
            </li>
            <li>
              <a href="#contact">Liên hệ hỗ trợ</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Theo dõi chúng tôi</h4>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 TourBook. Tất cả quyền được bảo lưu.</p>
      </div>
    </footer>
  )
}
