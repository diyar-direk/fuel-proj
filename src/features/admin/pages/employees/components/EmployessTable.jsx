import { memo, useCallback } from "react";

import Table from "src/components/table/Table";

/**
 * @type {import("src/components/table/Table").column[]}
 */
export const columns = [
  {
    name: "id",
    headerName: "رقم الموظف",
    sort: true,
  },
  {
    name: "full_name",
    headerName: "اسم الموظف",
    sort: true,
    className: "hover:underline cursor-pointer",
  },
  {
    name: "specialization",
    headerName: "التخصص",
    sort: true,
  },
  {
    name: "address",
    headerName: "العنوان",
    sort: true,
    className: "max-md:hidden",
  },
];

function EmployessTable({
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
    <div className="me-2 pb-9 w-[100%] max-md:w-3/5">
      <Table
        columns={columns}
        rows={vehcilesRecord?.employees || []}
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

export default memo(EmployessTable);
