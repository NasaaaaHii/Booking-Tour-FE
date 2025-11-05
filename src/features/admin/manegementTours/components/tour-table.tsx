import { Pencil, Trash } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function TourTable() {
  const tours = [
    {
      id: 1,
      img: "/images/dalat.png",
      name: "Tour Đà Lạt 3N2Đ",
      destination: "Đà Lạt, Lâm Đồng",
      durations: "3 ngày 2 đêm",
      price: "$120",
      status: true,
      action: [<Pencil key="edit" />, <Trash key="delete" />],
    },
    {
      id: 2,
      img: "/images/hanoi.png",
      name: "Tour Hà Nội 5N4Đ",
      destination: "Thủ đô Hà Nội",
      durations: "5 ngày 4 đêm",
      price: "$180",
      status: false,
      action: [<Pencil key="edit" />, <Trash key="delete" />],
    },
    {
      id: 3,
      img: "/images/saigon.png",
      name: "Tour Sài Gòn 2N1Đ",
      destination: "TP. Hồ Chí Minh",
      durations: "2 ngày 1 đêm",
      price: "$90",
      status: true,
      action: [<Pencil key="edit" />, <Trash key="delete" />],
    },
    {
      id: 4,
      img: "/images/vungtau.png",
      name: "Tour Vũng Tàu 3N2Đ",
      destination: "Bãi Sau, Vũng Tàu",
      durations: "3 ngày 2 đêm",
      price: "$110",
      status: false,
      action: [<Pencil key="edit" />, <Trash key="delete" />],
    },
    {
      id: 5,
      img: "/images/thanhhoa.png",
      name: "Tour Thanh Hóa 4N3Đ",
      destination: "Biển Sầm Sơn, Thanh Hóa",
      durations: "4 ngày 3 đêm",
      price: "$130",
      status: true,
      action: [<Pencil key="edit" />, <Trash key="delete" />],
    },
    {
      id: 6,
      img: "/images/nhatrang.png",
      name: "Tour Nha Trang 3N2Đ",
      destination: "Vinpearl, Nha Trang",
      durations: "3 ngày 2 đêm",
      price: "$140",
      status: false,
      action: [<Pencil key="edit" />, <Trash key="delete" />],
    },
    {
      id: 7,
      img: "/images/phanthiet.png",
      name: "Tour Phan Thiết 2N1Đ",
      destination: "Mũi Né, Phan Thiết",
      durations: "2 ngày 1 đêm",
      price: "$100",
      status: false,
      action: [<Pencil key="edit" />, <Trash key="delete" />],
    },
  ];

  const getStatus = (status: boolean) => {
    return status ? (
      <Badge className="bg-green-400/20 text-green-300 border border-green-500/40 font-medium px-2 py-1 rounded-md">
        Active
      </Badge>
    ) : (
      <Badge className="bg-red-400/20 text-red-300 border border-red-500/40 font-medium px-2 py-1 rounded-md">
        Sold out
      </Badge>
    );
  };

  return (
    <div className="border border-white/10 shadow-lg shadow-black/40 rounded-lg overflow-hidden mt-10 bg-[#374151]">
      <Table className="w-full">
        {/* Header */}
        <TableHeader className="bg-[#2f3640]/80">
          <TableRow>
            {[
              "",
              "Tour",
              "Destination",
              "Duration",
              "Price",
              "Status",
              "Actions",
            ].map((head, idx) => (
              <TableHead
                key={idx}
                className="text-gray-100 font-semibold text-[16px] uppercase tracking-wide py-3"
              >
                {head}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        {/* Body */}
        <TableBody>
          {tours.map((tour) => (
            <TableRow
              key={tour.id}
              className="font-serif text-[15px] text-gray-200 hover:bg-[#4b5563]/50 transition"
            >
              <TableCell>
                <img
                  src={tour.img}
                  alt={tour.name}
                  className="w-14 h-14 rounded-lg object-cover"
                />
              </TableCell>
              <TableCell className="font-medium text-white">
                {tour.name}
              </TableCell>
              <TableCell>{tour.destination}</TableCell>
              <TableCell>{tour.durations}</TableCell>
              <TableCell className="text-yellow-300 font-semibold">
                {tour.price}
              </TableCell>
              <TableCell>{getStatus(tour.status)}</TableCell>
              <TableCell>
                <div className="flex items-center gap-3 text-gray-300">
                  {tour.action.map((icon, idx) => (
                    <span
                      key={idx}
                      className="hover:text-white cursor-pointer transition"
                    >
                      {icon}
                    </span>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
