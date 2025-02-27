import { memo, useCallback } from "react";
import Table from "../../../../components/table/Table";
import useCashingState from "../../../../hooks/useCashingState";
/**
 * @type {import("src/components/table/Table").column[]}
 */
const columns = [
  {
    name: "id",
    headerName: "رقم الآلية",
    sort: true,
  },
  { name: "owner", headerName: "المالك", sort: true },
  {
    name: "plateNumber",
    headerName: "رقم اللوحة",
    sort: true,
  },
  {
    name: "chassisNumber",
    headerName: "رقم الهيكل",
    sort: true,
    className: "max-md:hidden",
  },
  { name: "model", headerName: "المودل", sort: true },
  {
    name: "color",
    headerName: "اللون",
    sort: true,
    className: "max-md:hidden",
  },
  {
    name: "type",
    headerName: "النوع",
    sort: true,
    className: "max-2xl:hidden",
  },
  { name: "document", headerName: "الوثيقة", sort: true },
  {
    name: "documentNumber",
    headerName: "رقم الوثيقة",
    sort: true,
    className: "max-md:hidden",
  },
  {
    name: "source",
    headerName: "المصدر",
    sort: true,
    className: "max-md:hidden",
  },
  { name: "address", headerName: "العنوان", sort: true },
  {
    name: "notes",
    headerName: "ملاحظات",
    sort: true,
    className: "max-xl:hidden",
  },
  {
    name: "council",
    headerName: "المجلس",
    sort: true,
    className: "max-md:hidden",
  },
];

function VehiclesPrintTable({
  setSortStatuses,
  sortStatuses,
  setSelectedRows,
  selectedRows,
}) {
  const [currentPage, setCurrentPage] = useCashingState(
    "vehiclesPrintCurrentPage",
    1
  );

  const handleSortChange = useCallback(
    (name, sortStatus) => {
      setSortStatuses({
        [name]: sortStatus,
      });
    },
    [setSortStatuses]
  );

  return (
    <div className="me-2 pb-9 w-5/6 max-md:w-3/5">
      <Table
        columns={columns}
        rows={rows}
        onSortChange={handleSortChange}
        sortStatuses={sortStatuses}
        totalPages={rows.length}
        onPageChange={setCurrentPage}
        currentPage={currentPage}
        onSelectRows={setSelectedRows}
        selectedRows={selectedRows}
        selectable
        headerCheckboxCellProps={{ className: "max-md:w-14 max-sm:w-11" }}
      />
    </div>
  );
}

export default memo(VehiclesPrintTable);

export const rows = Array.from({ length: 10 }, (_, k) => ({
  id: k + 1,
  owner: "محمد علي",
  plateNumber: 12478,
  chassisNumber: 12478,
  model: k === 4 ? "dasdsahdioashdohofsihdfiodsfhoshdo" : "مارسيدس",
  color: "أبيض",
  type: "النوع",
  document: "الوثيقة",
  documentNumber: 232,
  source: "دمشق",
  address: "كوباني",
  notes: "لا يوجد",
  council: "مجلس 2",
}));
