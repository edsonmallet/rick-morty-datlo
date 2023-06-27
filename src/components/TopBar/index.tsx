"use client";
import React from "react";

import * as S from "./styles";
import { Image } from "antd";

export const TopBar: React.FC = () => {
  return (
    <S.Container>
      <Image src="/logo.svg" alt="Logo Rick and Morty" preview={false} />
      <h1>Wubba Lubba Dub Dub!</h1>
    </S.Container>
  );
};
