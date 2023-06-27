"use client";
import {
  CardCharacters,
  DetailsCharacter,
  Paginate,
  SearchBar,
} from "../components";
import { useQuery } from "@tanstack/react-query";
import { fetchData, getCharacters } from "../services";
import React from "react";
import { useAtom } from "jotai";

import * as S from "@/styles/home";
import { Spin } from "antd";
import { Character, CharacterResponse } from "@/types";
import { currentPage, totalPages } from "@/atoms/pagination";
import { currentFilter, itemsRemoved } from "@/atoms/filter";

export default function Home() {
  const [page] = useAtom(currentPage);
  const [total, setTotal] = useAtom(totalPages);
  const [filter] = useAtom(currentFilter);
  const [removed] = useAtom(itemsRemoved);

  const [characters, setCharacters] = React.useState<Character[]>([]);

  const { isLoading } = useQuery({
    queryKey: ["get-characters", page, filter],
    queryFn: () =>
      fetchData({ query: getCharacters, page: page, search: filter }),
    onSuccess: (data: { characters: CharacterResponse }) => {
      setCharacters(data.characters.results);
      setTotal(data.characters.info.count);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });

  const idRemoveds = removed.map((item: Character) => item?.id);

  return (
    <S.BaseStyle>
      {isLoading && characters.length === 0 && (
        <Spin tip="Loading" size="large" />
      )}
      {characters.length > 0 && (
        <>
          <DetailsCharacter />
          <SearchBar />

          <S.ListCharacters>
            {characters
              ?.filter((item: Character) => !idRemoveds.includes(item?.id))
              ?.map((item: Character) => (
                <CardCharacters
                  isLoading={isLoading}
                  key={item?.id}
                  {...item}
                />
              ))}
          </S.ListCharacters>
          <Paginate />
        </>
      )}
    </S.BaseStyle>
  );
}
