"use client";

import { styled } from "styled-components";
import { CardPerson } from "./components";

const BaseStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 30px;
`;

export default function Home() {
  return (
    <BaseStyle>
      <CardPerson />
    </BaseStyle>
  );
}
