"use client";

import { useState, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "../ui/pagination";

interface PaginationWidgetProps {
  items: any[]; // The array of products
  itemsPerPage?: number;
  onPageChange?: (visibleItems: any[]) => void;
}

export default function PaginationWidget({
  items,
  itemsPerPage = 8,
  onPageChange,
}: PaginationWidgetProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    // Compute current page items
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const visibleItems = items.slice(start, end);

    if (onPageChange) onPageChange(visibleItems);

    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, items, itemsPerPage, onPageChange]);

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const getPageNumbers = () => {
    const pages: number[] = [];
    const visiblePages = 1; // You can increase to show more neighbors

    for (
      let i = Math.max(1, currentPage - visiblePages);
      i <= Math.min(totalPages, currentPage + visiblePages);
      i++
    ) {
      pages.push(i);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="flex flex-col gap-4 items-center p-4">
      <Pagination>
        <PaginationContent className="flex-wrap gap-1">
          <PaginationItem>
            <PaginationPrevious
              onClick={() => changePage(currentPage - 1)}
              className={currentPage === 1 ? "opacity-40 pointer-events-none" : ""}
            />
          </PaginationItem>

          {currentPage > 2 && (
            <>
              <PaginationItem>
                <PaginationLink onClick={() => changePage(1)}>1</PaginationLink>
              </PaginationItem>
              {currentPage > 3 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
            </>
          )}

          {pages.map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                isActive={page === currentPage}
                onClick={() => changePage(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          {currentPage < totalPages - 1 && (
            <>
              {currentPage < totalPages - 2 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationLink onClick={() => changePage(totalPages)}>
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            </>
          )}

          <PaginationItem>
            <PaginationNext
              onClick={() => changePage(currentPage + 1)}
              className={
                currentPage === totalPages ? "opacity-40 pointer-events-none" : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
