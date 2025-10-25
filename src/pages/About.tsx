import "./Pages.scss"

export default function About() {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>Về Chúng Tôi</h1>
        <p>Khám phá câu chuyện của TourBook</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Chúng Tôi Là Ai?</h2>
          <p>
            TourBook là nền tảng đặt tour du lịch hàng đầu, cung cấp những trải nghiệm du lịch tuyệt vời cho hàng triệu
            khách hàng trên toàn thế giới. Chúng tôi cam kết mang đến dịch vụ chất lượng cao với giá cả hợp lý.
          </p>
        </section>

        <section className="about-section">
          <h2>Tầm Nhìn & Sứ Mệnh</h2>
          <div className="vision-mission">
            <div className="card">
              <h3>Tầm Nhìn</h3>
              <p>Trở thành nền tảng du lịch số 1 tại Châu Á, giúp mọi người khám phá thế giới một cách dễ dàng.</p>
            </div>
            <div className="card">
              <h3>Sứ Mệnh</h3>
              <p>Cung cấp dịch vụ du lịch chất lượng cao, an toàn, và giá cả phải chăng cho tất cả mọi người.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Tại Sao Chọn Chúng Tôi?</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <span className="icon">🌍</span>
              <h3>Tours Đa Dạng</h3>
              <p>Hàng trăm tour đến các điểm đến hấp dẫn trên khắp thế giới</p>
            </div>
            <div className="reason-card">
              <span className="icon">💰</span>
              <h3>Giá Tốt Nhất</h3>
              <p>Chúng tôi cam kết cung cấp giá tốt nhất với chất lượng dịch vụ cao</p>
            </div>
            <div className="reason-card">
              <span className="icon">🛡️</span>
              <h3>An Toàn & Bảo Mật</h3>
              <p>Thanh toán an toàn và bảo vệ thông tin cá nhân của bạn</p>
            </div>
            <div className="reason-card">
              <span className="icon">👥</span>
              <h3>Hỗ Trợ 24/7</h3>
              <p>Đội ngũ hỗ trợ khách hàng sẵn sàng giúp bạn bất cứ lúc nào</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
