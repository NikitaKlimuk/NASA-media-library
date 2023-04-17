import React from "react";
import ReactPaginate from "react-paginate";
import "./styles.scss";

interface IPagination {
  setCurentPage: any;
  totalPage: number;
  currentPage: number;
  pageSize: string;
}

const Pagination: React.FC<IPagination> = ({
  setCurentPage,
  totalPage,
  pageSize,
  currentPage,
}) => {
  const resultPageCount = totalPage > 10000 ? 10000 : totalPage;

  const handlePageClick = (event: { selected: number }) => {
    setCurentPage(event.selected + 1);
  };

  return (
    <ReactPaginate
      forcePage={currentPage - 1}
      className="pagination"
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={Math.floor(resultPageCount / +pageSize)}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
