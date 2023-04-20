import React from "react";
import ReactPaginate from "react-paginate";
import { selectPageSize } from "../../config/selectPageSige";
import { v4 as uuidv4 } from "uuid";
import "./styles.scss";
import { IPagination } from "../../interfases/pagination";
import { useTranslation } from "react-i18next";

const Pagination: React.FC<IPagination> = ({
  setCurentPage,
  totalPage,
  pageSize,
  currentPage,
  setPageSize,
  isLargePagination,
}) => {
  const resultPageCount = totalPage > 10000 ? 10000 : totalPage;

  const { t } = useTranslation();

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
            {selectPageSize.map((num: string) => (
              <option
                className="paginate__wrapper-select__option"
                key={uuidv4()}
                defaultValue={num}
              >
                {num}
              </option>
            ))}
          </select>
          {t("paginate.selectSize")}
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
          {t("paginate.selectPage")}
          <input
            type="number"
            autoComplete="off"
            defaultValue={currentPage}
            onBlur={(event) => setCurentPage(+event.target.value)}
            min="0"
          />
          {t("paginate.showing")} {Math.floor(resultPageCount / +pageSize)}
          {t("paginate.results")}
        </div>
      )}
    </div>
  );
};

export default Pagination;
