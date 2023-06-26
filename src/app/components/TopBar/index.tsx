"use client";
import React from "react";

import * as S from "./styles";
import { SearchBar } from "../SearchBar";

export const TopBar: React.FC = () => {
  return (
    <S.Container>
      <img src="/logo.svg" alt="Logo Rick and Morty" />
      <h1>Wubba Lubba Dub Dub!</h1>
      <SearchBar />
    </S.Container>
  );
};
