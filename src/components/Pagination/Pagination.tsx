import React, { FC, useMemo } from "react";
import { styleNames, generateArray } from "../../utils";
import { PaginationItem, PaginationNext, PaginationPrev } from "./components";
import { TSetPage } from "./interfaces";
import styles from "./Pagination.scss";

const sn = styleNames(styles);

interface IPagination {
  currentPage: number;
  setPage: TSetPage;
  count: number;
  itemsLength: number;
}

const PaginationDots: FC = () => {
  return <div>...</div>;
};

const Pagination: FC<IPagination> = ({
  count,
  itemsLength,
  currentPage,
  setPage,
}) => {
  const pagesLength = Math.ceil(
    itemsLength % count ? itemsLength / count + 1 : itemsLength / count
  );
  const isFullPagination = pagesLength > 5;
  const middlePagination = currentPage > 3 && currentPage < pagesLength - 3;

  const items = useMemo(
    () => (numbers: number[]) => {
      return numbers.map((number) => (
        <PaginationItem
          currentPage={currentPage}
          key={number}
          pageNumber={number}
          setPage={setPage}
        />
      ));
    },
    [pagesLength, currentPage]
  );

  const firstItems = useMemo(() => {
    if (currentPage <= 3)
      return items(
        pagesLength >= 3 ? generateArray(3) : generateArray(pagesLength)
      );
    return items([1]);
  }, [pagesLength, currentPage]);

  return (
    <div className={sn("pagination")}>
      {pagesLength > 1 ? (
        <>
          <PaginationPrev currentPage={currentPage} setPage={setPage} />
          {firstItems}
          {isFullPagination && <PaginationDots />}
          {middlePagination && (
            <PaginationItem
              currentPage={currentPage}
              pageNumber={currentPage}
              setPage={setPage}
            />
          )}
          {isFullPagination && middlePagination && <PaginationDots />}
          {isFullPagination &&
            items([pagesLength - 3, pagesLength - 2, pagesLength - 1])}
          <PaginationNext currentPage={currentPage} setPage={setPage} />
        </>
      ) : null}
    </div>
  );
};

export default Pagination;
