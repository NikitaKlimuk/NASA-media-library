import React from "react";
import ReactPaginate from "react-paginate";
import "./styles.scss";
import { selectPageSize } from "../../config/selectPageSige";
import { v4 as uuidv4 } from "uuid";

interface IPagination {
  setCurentPage: any;
  totalPage: number;
  currentPage: number;
  pageSize: string;
  setPageSize: any;
  isLargePagination?: boolean;
}

const Pagination: React.FC<IPagination> = ({
  setCurentPage,
  totalPage,
  pageSize,
  currentPage,
  setPageSize,
  isLargePagination,
}) => {
  const resultPageCount = totalPage > 10000 ? 10000 : totalPage;

  const handlePageClick = (event: { selected: number }) => {
    setCurentPage(event.selected + 1);
  };

  return (
    <div className="paginate">
      {isLargePagination && (
        <div className="paginate__wrapper">
          <select
            className="paginate__wrapper-select"
            onChange={(e) => {
              e.preventDefault();
              setPageSize(e.target.value);
            }}
            value={pageSize}
          >
            {selectPageSize.map((num) => (
              <option
                className="paginate__wrapper-select__option"
                key={uuidv4()}
                defaultValue={num}
              >
                {num}
              </option>
            ))}
          </select>
          Select Page Size
        </div>
      )}
      <div className="paginate__paginate">
        <ReactPaginate
          activeClassName="pagination-active"
          forcePage={currentPage - 1}
          className="pagination"
          breakLabel="..."
          nextLabel=">"
          nextLinkClassName="pagination-next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={Math.floor(resultPageCount / +pageSize)}
          previousLabel="<"
          previousLinkClassName="pagination-previous"
          renderOnZeroPageCount={null}
        />
      </div>

      {isLargePagination && (
        <div className="paginate__input">
          Select page
          <input
            type="number"
            autoComplete="off"
            defaultValue={currentPage}
            onBlur={(event) => setCurentPage(event.target.value)}
          />
          Showing {Math.floor(resultPageCount / +pageSize)} results
        </div>
      )}
    </div>
  );
};

export default Pagination;
