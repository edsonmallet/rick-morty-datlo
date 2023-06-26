"use client";

import React from "react";

import type { PaginationProps } from "antd";
import { Pagination } from "antd";

const onChange: PaginationProps["onChange"] = (pageNumber) => {
  console.log("Page: ", pageNumber);
};

export const Paginate: React.FC = () => {
  return (
    <Pagination
      showQuickJumper
      defaultCurrent={2}
      total={500}
      onChange={onChange}
    />
  );
};
