import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function paginate(current, total) {
  const delta = 2;
  const range = [];
  for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
    range.push(i);
  }
  if (current - delta > 2) range.unshift('...');
  if (current + delta < total - 1) range.push('...');

  range.unshift(1);
  if (total > 1) range.push(total);
  return range;
}

export default function Pagination({
  totalItems = 100,
  itemsPerPage = 50,
  currentPage = 1,
  onPageChange,
  onItemsPerPageChange,
  itemsPerPageOptions = [10, 25, 50, 100],
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = paginate(currentPage, totalPages);

  const rangeStart = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const rangeEnd = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex items-center justify-between px-6 py-2 bg-white rounded-b-md shadow-sm ">
      {/* Items per page */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700">Items Per Page</span>
        <select
          className="border rounded px-2 py-1 text-sm focus:ring-2 focus:ring-purple-100"
          value={itemsPerPage}
          onChange={e => onItemsPerPageChange(Number(e.target.value))}
        >
          {itemsPerPageOptions.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      {/* Page count */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-700">
          {rangeStart}–{rangeEnd} of {totalItems}
        </span>
        <nav className="flex items-center gap-1 select-none">
          <button
            className="h-8 w-8 flex items-center justify-center rounded transition hover:bg-gray-100 text-gray-500 disabled:opacity-25"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <ChevronLeft size={18} />
          </button>
          {pageNumbers.map((num, idx) =>
            num === "..." ? (
              <span key={idx} className="px-2 text-gray-400 font-bold">…</span>
            ) : (
              <button
                key={num}
                className={`
                  h-8 w-8 rounded flex items-center justify-center transition
                  ${num === currentPage
                    ? "bg-purple-500 text-white font-bold"
                    : "hover:bg-purple-100 text-gray-700"}
                `}
                onClick={() => onPageChange(Number(num))}
                aria-current={num === currentPage ? "page" : undefined}
              >
                {num}
              </button>
            )
          )}
          <button
            className="h-8 w-8 flex items-center justify-center rounded transition hover:bg-gray-100 text-gray-500 disabled:opacity-25"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <ChevronRight size={18} />
          </button>
        </nav>
      </div>
    </div>
  );
}
