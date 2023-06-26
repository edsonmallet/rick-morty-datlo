"use client";

import { styled } from "styled-components";
import { CardPerson, Paginate } from "./components";
import { useQuery } from "@tanstack/react-query";
import { UserQuery, fetchData } from "./services";

const BaseStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 30px;
  gap: 20px;
`;

export default function Home() {
  const { isLoading, data } = useQuery({
    queryKey: ["users"],
    queryFn: fetchData(UserQuery),
  });

  return (
    <BaseStyle>
      <CardPerson />
      <Paginate />
    </BaseStyle>
  );
}
