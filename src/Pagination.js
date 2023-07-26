import React from 'react';
import ReactPaginate from 'react-paginate';

function Pagination({ pageCount, onPageChange }) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={onPageChange}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      containerClassName="pagination"
      activeClassName="active"
    />
  );
}

export default Pagination;
