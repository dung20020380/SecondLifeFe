import classNames from "classnames";
import { useState, useEffect } from "react";
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";

import styles from "./styles.module.scss";

interface IProps {
  maxPage: number;
  onChange: (page: number) => void;
  currentPage: number;
}

const Pagination = ({ maxPage, onChange, currentPage }: IProps) => {
  const [page, setPage] = useState(1);
  const [visiblePages, setVisiblePages] = useState<number[]>([]);

  useEffect(() => {
    const displayRange = 10;

    let startPage = Math.max(
      1,
      Math.min(page - Math.floor(displayRange / 2), maxPage - displayRange + 1)
    );
    let endPage = Math.min(maxPage, startPage + displayRange - 1);

    while (endPage - startPage + 1 < displayRange && startPage > 1) {
      startPage--;
    }

    while (endPage - startPage + 1 < displayRange && endPage < maxPage) {
      endPage++;
    }
    setVisiblePages(
      Array.from(
        { length: endPage - startPage + 1 },
        (_, index) => startPage + index
      )
    );
  }, [page, maxPage]);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  return (
    <div className={styles.container}>
      {page > 1 && (
        <button
          onClick={() => {
            setPage(1);
            onChange(1);
          }}
          className="text-neutral-400"
        >
          <BsChevronDoubleLeft />
        </button>
      )}

      {page > 1 && (
        <button
          onClick={() => {
            const newPage = Math.max(1, page - 5); // Điều chỉnh số lượng trang lùi lại
            setPage(newPage);
            onChange(newPage);
          }}
          className="text-neutral-400"
        >
          <BsChevronLeft />
        </button>
      )}

      {visiblePages.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => {
            setPage(pageNumber);
            onChange(pageNumber);
          }}
          className={classNames("text-neutral-400", {
            "!bg-neutral-200": pageNumber !== page,
            "bg-primary": pageNumber === page,
          })}
        >
          {pageNumber}
        </button>
      ))}

      {page < maxPage && (
        <button
          onClick={() => {
            const newPage = Math.min(maxPage, page + 5); // Điều chỉnh số lượng trang tăng lên
            setPage(newPage);
            onChange(newPage);
          }}
          className="text-neutral-400"
        >
          <BsChevronRight />
        </button>
      )}

      {page < maxPage && (
        <button
          onClick={() => {
            setPage(maxPage);
            onChange(maxPage);
          }}
          className="text-neutral-400"
        >
          <BsChevronDoubleRight />
        </button>
      )}
    </div>
  );
};

export default Pagination;
