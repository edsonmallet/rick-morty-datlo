"use client";

import { styled } from "styled-components";
import { CardCharacters, Paginate } from "./components";
import { useQuery } from "@tanstack/react-query";
import { fetchData, getCharacters } from "./services";
import React from "react";

const BaseStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30 0px;
  gap: 20px;
`;

const ListCharacters = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export default function Home() {
  const [characters, setCharacters] = React.useState([]);

  const { isLoading } = useQuery({
    queryKey: ["get-characters"],
    queryFn: () => fetchData({ query: getCharacters, page: 1, search: "" }),
    onSuccess: (data: any) => {
      console.log(data);
      setCharacters(data.characters.results);
    },
    onError: (error: any) => {
      console.log(error);
    },
  });

  React.useEffect(() => {
    console.log(characters);
  }, [characters]);

  return (
    <BaseStyle>
      <Paginate />
      <ListCharacters>
        {characters?.map((item: any) => (
          <CardCharacters key={item?.name} {...item} />
        ))}
      </ListCharacters>
    </BaseStyle>
  );
}
