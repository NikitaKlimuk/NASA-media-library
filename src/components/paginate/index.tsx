import React from "react";
import ReactPaginate from "react-paginate";
import "./styles.scss";

interface IPagination {
  setCurentPage: any;
  totalPage: number;
  // paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<IPagination> = ({
  setCurentPage,
  totalPage,
  // paginate,
}) => {
  const handlePageClick = (event: { selected: number }) => {
    setCurentPage(event.selected);
    console.log(`User requested page number ${event.selected}`);
  };

  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={totalPage}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
