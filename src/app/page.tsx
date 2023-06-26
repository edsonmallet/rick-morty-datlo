"use client";
import { CardCharacters, Paginate, SearchBar } from "./components";
import { useQuery } from "@tanstack/react-query";
import { fetchData, getCharacters } from "./services";
import React from "react";
import { atom, useAtom } from "jotai";

import * as S from "@/styles/home";
import { Spin } from "antd";
import { Character } from "@/types";

export const currentPage = atom(1);
export const currentFilter = atom("");
export const itemsRemoved = atom<number[]>([]);

export default function Home() {
  const [page] = useAtom(currentPage);
  const [filter] = useAtom(currentFilter);
  const [removed] = useAtom(itemsRemoved);

  const [characters, setCharacters] = React.useState([]);

  const { isLoading } = useQuery({
    queryKey: ["get-characters", page, filter],
    queryFn: () =>
      fetchData({ query: getCharacters, page: page, search: filter }),
    onSuccess: (data: any) => {
      setCharacters(data.characters.results);
    },
    onError: (error: any) => {
      console.log(error);
    },
  });

  return (
    <S.BaseStyle>
      <SearchBar />
      <Paginate />
      {isLoading && <Spin size="large" />}
      <S.ListCharacters>
        {characters
          ?.filter((item: Character) => !removed.includes(item?.id))
          ?.map((item: Character) => (
            <CardCharacters key={item?.id} {...item} />
          ))}
      </S.ListCharacters>
    </S.BaseStyle>
  );
}
