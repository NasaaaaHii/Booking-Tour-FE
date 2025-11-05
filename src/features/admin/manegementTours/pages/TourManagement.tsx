import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";
import { TourTable } from "../components/tour-table";

export const TourManagementPage = () => {
  return (
    <>
      {/* Header */}
      <header className="mb-3 flex justify-between">
        <div>
          <h1 className="text-3xl font-serif font-bold text-gray-100 mb-2">
            Quản lí Tour
          </h1>
          <p className="text-gray-400 italic font-serif">
            Tạo và cập nhật các gói tour
          </p>
        </div>

        <div>
          <Button className="w-32 bg-[#374151] hover:bg-[#51607a] flex items-center justify-start gap-3">
            <Plus />
            <span className="text-center"> Tạo Tour</span>
          </Button>
        </div>
      </header>

      <div>
        <InputGroup className="flex-1 max-w-md shadow-lg shadow-black/40 border border-white/10 bg-[#374151] rounded-lg">
          <InputGroupInput
            placeholder="Tìm kiếm khách hàng..."
            className="bg-transparent text-gray-100 placeholder-gray-400"
          />
          <InputGroupAddon className="text-gray-300">
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
      </div>

      <TourTable />
    </>
  );
};
