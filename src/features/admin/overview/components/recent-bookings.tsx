export function RecentBookings() {
  const recent_booking = [
    {
      id: 1,
      name: "Nguyễn Hoàng Anh",
      tour: "Du lịch 2N1Đ Nha Trang",
      status: "đã đặt",
      total: "$20",
    },
    {
      id: 2,
      name: "Nguyễn Hoàng Minh",
      tour: "Du lịch 5N4Đ Hà Nội",
      status: "đã đặt",
      total: "$20",
    },
    {
      id: 3,
      name: "Võ Thị Diễm My",
      tour: "Du lịch 3N2Đ Vũng Tàu",
      status: "đang chờ",
      total: "$20",
    },
    {
      id: 4,
      name: "Nguyễn Đào Linh Đan",
      tour: "Du lịch 2N1Đ Đà Lạt",
      status: "đã hủy",
      total: "$20",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "đã đặt":
        return "bg-green-900/60 text-green-300";
      case "đang chờ":
        return "bg-yellow-900/60 text-yellow-300";
      case "đã hủy":
        return "bg-red-900/60 text-red-300";
      default:
        return "bg-gray-800 text-gray-200";
    }
  };

  return (
    <div className="border border-gray-700 p-6 rounded-2xl shadow-lg shadow-black/30 bg-[#2d3643] hover:bg-[#3b4252] transition-colors duration-200 font-sans">
      <h3 className="text-lg font-semibold mb-4 text-gray-100">
        Đặt chỗ gần đây
      </h3>

      <div className="space-y-4">
        {recent_booking.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0"
          >
            <div className="space-y-1">
              <p className="font-semibold text-gray-100">{item.name}</p>
              <p className="text-sm text-gray-400">{item.tour}</p>
            </div>
            <div className="text-right space-y-1">
              <span
                className={`${getStatusColor(
                  item.status
                )} px-2 py-1 rounded-lg text-xs font-medium`}
              >
                {item.status}
              </span>
              <p className="text-sm font-semibold text-gray-200">
                {item.total}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
