"use client";

import React from "react";

import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import { useAtom } from "jotai";
import { currentPage, totalPages } from "@/atoms/pagination";

export const Paginate: React.FC = () => {
  const [page, setPage] = useAtom(currentPage);
  const [total] = useAtom(totalPages);

  const onChange: PaginationProps["onChange"] = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <>
      <Pagination
        showSizeChanger={false}
        defaultCurrent={page}
        current={page}
        showTotal={(total) => `Total ${total} items`}
        total={total}
        onChange={onChange}
      />
    </>
  );
};
