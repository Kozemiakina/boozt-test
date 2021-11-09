import React, { FC, useCallback } from "react";
import { TSetPage } from "../interfaces";
import { styleNames } from "../../../utils";
import styles from "../Pagination.scss";

const sn = styleNames(styles);

const PaginationItem: FC<{
  currentPage: number;
  pageNumber: number;
  setPage: TSetPage;
}> = ({ currentPage, pageNumber, setPage }) => {
  const handlePage = useCallback(() => setPage(pageNumber), [pageNumber]);
  return (
    <button
      type="button"
      onClick={handlePage}
      className={sn(
        `${
          currentPage === pageNumber && "pagination__item_active"
        } pagination__item`
      )}
    >
      {pageNumber}
    </button>
  );
};

export default PaginationItem;
