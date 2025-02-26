import { memo, useCallback, useState } from "react";
import Table from "../../../../components/table/Table";
import useCashingState from "../../../../hooks/useCashingState";

const columns = [
  { name: "id", headerName: "رقم الآلية", sort: true },
  { name: "owner", headerName: "المالك", sort: true },
  { name: "plateNumber", headerName: "رقم اللوحة", sort: true },
  { name: "chassisNumber", headerName: "رقم الهيكل", sort: true },
  { name: "model", headerName: "المودل", sort: true },
  { name: "color", headerName: "اللون", sort: true },
  { name: "type", headerName: "النوع", sort: true },
  { name: "document", headerName: "الوثيقة", sort: true },
  { name: "documentNumber", headerName: "رقم الوثيقة", sort: true },
  { name: "source", headerName: "المصدر", sort: true },
  { name: "address", headerName: "العنوان", sort: true },
  { name: "notes", headerName: "ملاحظات", sort: true },
  { name: "council", headerName: "المجلس", sort: true },
];

function VehiclesRecordTable({
  setSortStatuses,
  sortStatuses,
  setSelectedRows,
  selectedRows,
}) {
  const [currentPage, setCurrentPage] = useCashingState(
    "vehiclesRecordCurrentPage",
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
    <div className="w-full ml-2 pb-9">
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
      />
    </div>
  );
}

export default memo(VehiclesRecordTable);

const rows = Array.from({ length: 10 }, (_, k) => ({
  id: k + 1,
  owner: "محمد علي",
  plateNumber: 12478,
  chassisNumber: 12478,
  model: "مارسيدس",
  color: "أبيض",
  type: "النوع",
  document: "الوثيقة",
  documentNumber: 232,
  source: "دمشق",
  address: "كوباني",
  notes: "لا يوجد",
  council: "مجلس 2",
}));
