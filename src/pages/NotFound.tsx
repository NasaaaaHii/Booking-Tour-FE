import { Link } from "react-router-dom"
import Button from "../components/common/Button"

export default function NotFound() {
  return (
    <div className="not-found" style={{ textAlign: "center", padding: "3rem" }}>
      <h1>404 - Trang Không Tìm Thấy</h1>
      <p>Xin lỗi, trang bạn tìm kiếm không tồn tại.</p>
      <Link to="/">
        <Button>Quay Lại Trang Chủ</Button>
      </Link>
    </div>
  )
}
