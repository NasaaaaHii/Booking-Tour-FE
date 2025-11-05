import { Star } from "lucide-react";

export function PopularTour() {
  const popular_tour = [
    {
      id: 1,
      img: "/images/hanoi.png",
      name: "Thủ đô Hà Nội",
      description: "Hồ Con Rùa, Hà Nội",
      rating: 5,
    },
    {
      id: 2,
      img: "/images/saigon.png",
      name: "Thành phố Hồ Chí Minh",
      description: "Quận Bình Thạnh",
      rating: 5,
    },
    {
      id: 3,
      img: "/images/phanthiet.png",
      name: "Thành phố Phan Thiết",
      description: "Bãi biển Phan Thiết",
      rating: 4.5,
    },
    {
      id: 4,
      img: "/images/nhatrang.png",
      name: "Thành phố Nha Trang",
      description: "Đảo Vinpearl Nha Trang",
      rating: 4.8,
    },
    {
      id: 5,
      img: "/images/thanhhoa.png",
      name: "Tỉnh Thanh Hóa",
      description: "Sân bay Phú Thọ",
      rating: 5,
    },
    {
      id: 6,
      img: "/images/dalat.png",
      name: "Thành phố Đà Lạt",
      description: "Thành phố mộng mơ",
      rating: 4.6,
    },
  ];

  return (
    <div className="border border-gray-700 p-6 rounded-2xl shadow-lg shadow-black/30 bg-[#2d3643] hover:bg-[#3b4252] transition-colors duration-200 font-sans">
      <h3 className="text-lg font-semibold mb-4 text-gray-100">
        Tour phổ biến
      </h3>

      <div className="space-y-4">
        {popular_tour.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between pb-3 border-b border-gray-700 last:border-0"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-16 h-16 rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div>
                <p className="font-medium text-gray-100">{item.name}</p>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-yellow-400">
              <Star size={16} className="fill-yellow-400" />
              <span className="font-semibold text-gray-100">
                {item.rating.toFixed(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
