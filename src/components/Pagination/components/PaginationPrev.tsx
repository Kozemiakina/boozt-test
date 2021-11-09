import React, { FC, useCallback } from "react";
import { TSetPage } from "../interfaces";
import { styleNames } from "../../../utils";
import styles from "../Pagination.scss";

const sn = styleNames(styles);

const PaginationPrev: FC<{ currentPage: number; setPage: TSetPage }> = ({
  currentPage,
  setPage,
}) => {
  const handlePage = useCallback(() => setPage(currentPage - 1), [currentPage]);
  return (
    <button
      type="button"
      className={sn("pagination__button")}
      onClick={handlePage}
    >
      Prev
    </button>
  );
};

export default PaginationPrev;
