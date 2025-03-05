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

function StationsRecordTable({
  setSortStatuses,
  sortStatuses,
  setSelectedRows,
  selectedRows,
  setPage,
  page,
  stationsRecord,
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
        rows={stationsRecord?.vehicles || []}
        onSortChange={handleSortChange}
        sortStatuses={sortStatuses}
        totalPages={stationsRecord?.count}
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

export default memo(StationsRecordTable);
