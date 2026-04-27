import React from "react";

export default function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="d-flex gap-2 mt-3">
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>

      <span>Page {page}</span>

      <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
}