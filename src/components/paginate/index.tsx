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
    <div className="pagination">
      {isLargePagination && (
        <div className="pagination__wrapper">
          <select
            className="pagination__wrapper-select"
            onChange={(e) => {
              e.preventDefault();
              setPageSize(e.target.value);
            }}
            value={pageSize}
          >
            {selectPageSize.map((num) => (
              <option
                className="pagination__wrapper-select__option"
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
      <div className="pagination__paginate">
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
      </div>

      {isLargePagination && (
        <div className="pagination__input">
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
