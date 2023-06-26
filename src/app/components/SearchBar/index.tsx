"use client";
import React from "react";

import * as S from "./styles";
import { Input } from "antd";
import { currentFilter, currentPage } from "@/app/page";
import { useAtom } from "jotai";

const { Search } = Input;

export const SearchBar: React.FC = () => {
  const [, setPage] = useAtom(currentPage);
  const [, setFilter] = useAtom(currentFilter);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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
        style={{ width: 400 }}
        enterButton
      />
      <S.ListAlphabetic>
        {alphabet?.split("")?.map((item) => (
          <S.ItemAlphabetic key={item} onClick={() => handleSearch(item)}>
            {item}
          </S.ItemAlphabetic>
        ))}
      </S.ListAlphabetic>
    </S.Container>
  );
};
