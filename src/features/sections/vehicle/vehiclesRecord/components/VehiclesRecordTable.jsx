import { memo, useCallback } from "react";
import Table from "src/components/table/Table";
import { Link } from "react-router-dom";
import Button from "src/components/buttons/Button";
/**
 * @type {import("src/components/table/Table").column[]}
 */
const columns = [
  {
    name: "id",
    headerName: "رقم الآلية",
    sort: true,
  },
  { name: "owner_name", headerName: "المالك", sort: true },
  {
    name: "plate_number",
    headerName: "رقم اللوحة",
    sort: true,
  },
  {
    name: "chassis_number",
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
    name: "documentation_type",
    headerName: "نوع الوثيقة",
    sort: true,
    className: "max-2xl:hidden",
  },
  {
    name: "documentaions_image",
    headerName: "الوثيقة",
    sort: true,
    getCell: (row) =>
      row.documentaions_image && (
        <Link to={row.documentaions_image} target="_blank">
          <Button variant="contained" className="py-1">
            عرض
          </Button>
        </Link>
      ),
  },
  {
    name: "documentation_ID",
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

function VehiclesRecordTable({
  setSortStatuses,
  sortStatuses,
  setSelectedRows,
  selectedRows,
  setPage,
  page,
  vehcilesRecord,
  secondaryLoading,
  loading,
}) {
  const handleSortChange = useCallback(
    (name, sortStatus) => {
      setSortStatuses({
        [name]: sortStatus,
      });
    },
    [setSortStatuses]
  );

  return (
    <div className="me-2 pb-9 w-5/6 max-md:w-3/5 h-[70vh]">
      <Table
        columns={columns}
        rows={vehcilesRecord?.vehicles || []}
        onSortChange={handleSortChange}
        sortStatuses={sortStatuses}
        totalPages={vehcilesRecord?.count}
        onPageChange={setPage}
        currentPage={page}
        onSelectRows={setSelectedRows}
        selectedRows={selectedRows}
        selectable
        headerCheckboxCellProps={{ className: "max-md:w-14 max-sm:w-11" }}
        loading={loading}
        secondaryLoading={secondaryLoading}
      />
    </div>
  );
}

export default memo(VehiclesRecordTable);

export const rows = Array.from({ length: 10 }, (_, k) => ({
  id: k + 1,
  owner_name: "محمد علي",
  plate_number: 12478,
  chassis_number: 12478,
  model: k === 4 ? "dasdsahdioashdohofsihdfiodsfhoshdo" : "مارسيدس",
  color: "أبيض",
  documentation_type: "النوع",
  documentaions_image: "الوثيقة",
  documentation_ID: 232,
  source: "دمشق",
  address: "كوباني",
  notes: "لا يوجد",
  council: "مجلس 2",
}));
