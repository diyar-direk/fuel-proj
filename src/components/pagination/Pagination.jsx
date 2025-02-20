import React from "react";

const getVisiblePages = (currentPage, totalPages) => {
  const maxVisibleNeighbors = 1; // Number of neighbors to show on each side of the current page
  const pages = [];

  // Always show the first page
  if (currentPage > 3) {
    pages.push(1, 2, "...");
  } else {
    for (let i = 1; i < Math.min(3, totalPages + 1); i++) {
      pages.push(i);
    }
  }

  // Add neighbors and the current page
  for (
    let i = Math.max(1, currentPage - maxVisibleNeighbors);
    i <= Math.min(totalPages, currentPage + maxVisibleNeighbors);
    i++
  ) {
    if (!pages.includes(i)) pages.push(i);
  }

  // Always show the last pages
  if (currentPage < totalPages - 2) {
    pages.push("...", totalPages - 1, totalPages);
  } else {
    for (let i = Math.max(totalPages - 3, 1); i <= totalPages; i++) {
      if (!pages.includes(i)) pages.push(i);
    }
  }

  return pages;
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = getVisiblePages(currentPage, totalPages);

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      {/* Previous Button */}
      <button
        className={`px-1 sm:px-2 lg:px-3 py-1  text-[10px] sm:text-[14px] rounded bg-gray-200 hover:bg-gray-300 ${
          currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
        }`}
        disabled={currentPage === 1}
        onClick={() => {
          onPageChange(currentPage - 1);
          window.scrollTo(0, 0);
        }}
      >
        السابق
      </button>

      {/* Dynamic Page Numbers */}
      {pages.map((page, idx) =>
        page === "..." ? (
          <span key={page} className="px-1 sm:px-2 lg:px-3 py-1 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={page}
            className={`px-1 sm:px-2 lg:px-3 py-1  text-[10px] sm:text-[14px] rounded ${
              page === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => {
              onPageChange(page);
              page !== currentPage && window.scrollTo(0, 0);
            }}
          >
            {page}
          </button>
        )
      )}

      {/* Next Button */}
      <button
        className={`px-1 sm:px-2 lg:px-3 py-1 text-[10px] sm:text-[14px] rounded bg-gray-200 hover:bg-gray-300 ${
          currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
        }`}
        disabled={currentPage === totalPages}
        onClick={() => {
          onPageChange(currentPage + 1);
          window.scrollTo(0, 0);
        }}
      >
        التالي
      </button>
    </div>
  );
};

export default Pagination;
