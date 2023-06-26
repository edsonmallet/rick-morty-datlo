"use client";
import { itemsRemoved } from "@/atoms/filter";
import { Character } from "@/types";
import {
  DeleteOutlined,
  ExclamationCircleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Card, Image, Modal, Skeleton } from "antd";
import { useAtom } from "jotai";
import React from "react";

const { Meta } = Card;

interface ICardCharacters extends Character {
  isLoading: boolean;
}

export const CardCharacters: React.FC<ICardCharacters> = ({ ...props }) => {
  const [modal, contextHolder] = Modal.useModal();

  const [, setRemoved] = useAtom(itemsRemoved);

  const confirm = () => {
    modal.confirm({
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
          <EyeOutlined key="setting" />,
          <DeleteOutlined key="delete" onClick={confirm} color="red" />,
        ]}
      >
        <Meta title={props?.name} description={props?.gender + props?.status} />
      </Card>
      {contextHolder}
    </>
  );
};
