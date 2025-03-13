import { memo, useCallback } from "react";

import Table from "src/components/table/Table";

/**
 * @type {import("src/components/table/Table").column[]}
 */
export const columns = [
  {
    name: "id",
    headerName: "رقم المقاطعة",
    sort: true,
  },
  { name: "name", headerName: "اسم المقاطعة", sort: true },

  {
    name: "description",
    headerName: "وصف عن المقاطعة",
    sort: true,
    className: "max-md:hidden",
  },
];

function DirectorateTable({
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

export default memo(DirectorateTable);
