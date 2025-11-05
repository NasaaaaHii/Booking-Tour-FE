import { Eye } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function UserTable() {
  const customers = [
    {
      id: 1,
      name: "Nguyen Van A",
      email: "a@gmail.com",
      phone: "01979327272",
      total_bookings: 3,
      total_spent: 5.482,
      join_date: "01/11/2025",
      status: true,
    },
    {
      id: 2,
      name: "Nguyen Van B",
      email: "b@gmail.com",
      phone: "0981234567",
      total_bookings: 5,
      total_spent: 7.841,
      join_date: "28/10/2025",
      status: false,
    },
    {
      id: 3,
      name: "Nguyen Van C",
      email: "c@gmail.com",
      phone: "0912345678",
      total_bookings: 2,
      total_spent: 3.214,
      join_date: "25/10/2025",
      status: true,
    },
    {
      id: 4,
      name: "Nguyen Van D",
      email: "d@gmail.com",
      phone: "0934567890",
      total_bookings: 8,
      total_spent: 12.934,
      join_date: "20/10/2025",
      status: true,
    },
    {
      id: 5,
      name: "Nguyen Van E",
      email: "e@gmail.com",
      phone: "0971239876",
      total_bookings: 1,
      total_spent: 1.548,
      join_date: "15/10/2025",
      status: false,
    },
    {
      id: 6,
      name: "Nguyen Van F",
      email: "f@gmail.com",
      phone: "0905554321",
      total_bookings: 6,
      total_spent: 9.321,
      join_date: "10/10/2025",
      status: true,
    },
    {
      id: 7,
      name: "Nguyen Van G",
      email: "g@gmail.com",
      phone: "0922345678",
      total_bookings: 4,
      total_spent: 6.754,
      join_date: "08/10/2025",
      status: false,
    },
    {
      id: 8,
      name: "Nguyen Van H",
      email: "h@gmail.com",
      phone: "0919988776",
      total_bookings: 10,
      total_spent: 15.234,
      join_date: "05/10/2025",
      status: true,
    },
    {
      id: 9,
      name: "Nguyen Van I",
      email: "i@gmail.com",
      phone: "0907766554",
      total_bookings: 3,
      total_spent: 4.823,
      join_date: "02/10/2025",
      status: false,
    },
    {
      id: 10,
      name: "Nguyen Van J",
      email: "j@gmail.com",
      phone: "0903344556",
      total_bookings: 7,
      total_spent: 10.658,
      join_date: "30/09/2025",
      status: true,
    },
  ];

  const getStatus = (status: boolean) => {
    return status ? (
      <Badge className="bg-green-300 text-green-800 font-medium px-2 py-1 rounded-md">
        Active
      </Badge>
    ) : (
      <Badge className="bg-gray-300 text-gray-800 font-medium px-2 py-1 rounded-md">
        Inactive
      </Badge>
    );
  };

  return (
    <div className="border border-white/10 shadow-lg shadow-black/40 rounded-lg overflow-hidden mt-10 bg-[#374151] hover:bg-[#3b4252] transition">
      <Table className="w-full">
        {/* Header */}
        <TableHeader className="bg-[#2f3640]/70">
          <TableRow>
            {[
              "Id",
              "Tên khách hàng",
              "Email",
              "SĐT",
              "Lượt đặt",
              "Chi tiêu ($)",
              "Ngày tham gia",
              "Trạng thái",
              "Hành động",
            ].map((head, idx) => (
              <TableHead
                key={idx}
                className="text-gray-200 font-semibold text-[15px] py-3"
              >
                {head}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        {/* Body */}
        <TableBody>
          {customers.map((cus) => (
            <TableRow
              key={cus.id}
              className="font-sans text-[15px] text-gray-200 hover:bg-[#4b5563]/50 transition"
            >
              <TableCell>{cus.id}</TableCell>
              <TableCell className="font-medium text-white">
                {cus.name}
              </TableCell>
              <TableCell>{cus.email}</TableCell>
              <TableCell>{cus.phone}</TableCell>
              <TableCell>{cus.total_bookings}</TableCell>
              <TableCell>{cus.total_spent.toLocaleString()}</TableCell>
              <TableCell>{cus.join_date}</TableCell>
              <TableCell>{getStatus(cus.status)}</TableCell>
              <TableCell>
                <Eye className="text-blue-400 hover:text-blue-500 cursor-pointer" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
