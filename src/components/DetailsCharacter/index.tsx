"use client";
import { viewDetailsId } from "@/atoms/filter";
import { fetchData, getCharacterById } from "@/services";
import { Character, Episode } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Alert, Divider, Drawer, Image, Spin, Tag } from "antd";
import { useAtom } from "jotai";
import React from "react";

import * as S from "./styles";

export const DetailsCharacter: React.FC = () => {
  const [detailId, setDetailId] = useAtom(viewDetailsId);

  const [character, setCharacter] = React.useState<Character | null>(null);

  const { isLoading, error } = useQuery({
    queryKey: ["get-character", detailId],
    queryFn: () =>
      fetchData<Character>({
        query: getCharacterById,
        search: detailId,
      }),
    enabled: !!detailId,
    onSuccess: (data: any) => {
      setCharacter(data.character);
    },
  });

  const handleClose = () => {
    setDetailId(null);
    setCharacter(null);
  };

  const colorStatus = character?.status === "Alive" ? "green" : "red";

  return (
    <Drawer
      title="Detalhes do personagem"
      placement="right"
      onClose={handleClose}
      open={!!detailId}
    >
      <S.Container>
        {isLoading && <Spin tip="Loading" size="large" />}
        {!!error && (
          <Alert
            message="Atenção"
            description="Personagem não encontrado."
            type="info"
          />
        )}
        {!isLoading && character && (
          <S.Details>
            <Image
              src={character?.image}
              alt="Character Image"
              width={"100%"}
            />
            <h3>{character?.name}</h3>

            <S.TagList>
              <Tag color={colorStatus}>{character?.status}</Tag>
              <Tag color="default">{character?.species}</Tag>
              <Tag color="default">{character?.gender}</Tag>
              {character?.type && <Tag color="default">{character?.type}</Tag>}
            </S.TagList>

            <Divider />

            <h4>Origin</h4>
            <p>{character?.origin?.name}</p>

            <Divider />
            <h4>Location</h4>
            <p>{character?.location?.name}</p>

            <Divider />
            <h4>Episodes</h4>
            <S.EpisodeList>
              {character?.episode?.map((episode: Episode) => (
                <S.EpisodeItem key={episode?.id}>
                  <p>
                    {episode?.name} - {episode?.episode}
                  </p>
                  <small>Air Date: {episode?.air_date}</small>
                </S.EpisodeItem>
              ))}
            </S.EpisodeList>
          </S.Details>
        )}
      </S.Container>
    </Drawer>
  );
};
