"use client";
import { itemsRemoved, viewDetailsId } from "@/atoms/filter";
import { Character } from "@/types";
import {
  DeleteOutlined,
  ExclamationCircleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Card, Image, Modal, Skeleton, Tag } from "antd";
import { useAtom } from "jotai";
import React from "react";

import * as S from "./styles";

interface ICardCharacters extends Character {
  isLoading: boolean;
}

export const CardCharacters: React.FC<ICardCharacters> = (props) => {
  const [modalConfirm, contextHolderConfirm] = Modal.useModal();

  const [, setRemoved] = useAtom(itemsRemoved);
  const [, setViewDetails] = useAtom(viewDetailsId);

  const confirm = () => {
    modalConfirm.confirm({
      title: "Confirmar exclusão",
      icon: <ExclamationCircleOutlined />,
      centered: true,
      content: "Você tem certeza que deseja excluir este registro?",
      okText: "SIM",
      cancelText: "NÃO",
      onOk() {
        setRemoved((prev) => [...prev, props?.id]);
      },
    });
  };

  const colorStatus = props?.status === "Alive" ? "green" : "red";

  return (
    <>
      <Card
        loading={props?.isLoading}
        hoverable
        style={{ width: 240 }}
        cover={
          props?.isLoading ? (
            <Skeleton.Image
              active={props?.isLoading}
              style={{ width: 240, height: 240 }}
            />
          ) : (
            <Image alt="example" src={props?.image} />
          )
        }
        actions={[
          <EyeOutlined
            key="setting"
            onClick={() => setViewDetails(props?.id)}
          />,
          <DeleteOutlined
            key="delete"
            onClick={confirm}
            style={{ color: "red" }}
          />,
        ]}
        bodyStyle={{ padding: "8px" }}
      >
        <S.Container>
          <h4>{props?.name}</h4>
          <S.ListTags>
            <Tag color={colorStatus}>{props?.status}</Tag>
            <Tag color="default">{props?.species}</Tag>
            <Tag color="default">{props?.gender}</Tag>
          </S.ListTags>
        </S.Container>
      </Card>
      {contextHolderConfirm}
    </>
  );
};
