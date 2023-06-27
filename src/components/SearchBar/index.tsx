"use client";
import React from "react";

import * as S from "./styles";
import { Input } from "antd";
import { useAtom } from "jotai";
import { currentPage } from "@/atoms/pagination";
import { currentFilter } from "@/atoms/filter";
import { ListRemoveds } from "../ListRemoveds";

const { Search } = Input;

export const SearchBar: React.FC = () => {
  const [, setPage] = useAtom(currentPage);
  const [filter, setFilter] = useAtom(currentFilter);

  const handleSearch = React.useCallback(
    (value: string) => {
      setFilter(value);
      setPage(1);
    },
    [setFilter, setPage]
  );

  return (
    <S.Container>
      <Search
        placeholder="Busque seu personagem favorito"
        onSearch={handleSearch}
        size={"large"}
        style={{ maxWidth: 500 }}
        defaultValue={filter}
        enterButton
      />
      <ListRemoveds />
    </S.Container>
  );
};
