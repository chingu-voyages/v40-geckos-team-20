import React from "react";
import { PaginationWrapper, PaginationItem } from "./Pagination.styled";

const Pagination = ({ chunkedCocktails, currentPage, handlePageClick }) => {
  const paginationBar =
    chunkedCocktails &&
    chunkedCocktails[currentPage - 1]?.map((ct, i) => {
      const pageNum = i + 1;
      return (
        <PaginationItem
          pageNum={pageNum}
          isCurrentPage={pageNum === currentPage}
          key={i}
          onClick={() => handlePageClick(pageNum)}
        />
      );
    });

  return <PaginationWrapper>{paginationBar}</PaginationWrapper>;
};

export default Pagination;
