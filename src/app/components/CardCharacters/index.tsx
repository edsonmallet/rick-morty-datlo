"use client";
import { Character } from "@/types";
import {
  DeleteOutlined,
  ExclamationCircleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Card, Modal } from "antd";
import React from "react";

const { Meta } = Card;

interface ICardCharacters extends Character {}

export const CardCharacters: React.FC<ICardCharacters> = (props) => {
  const [modal, contextHolder] = Modal.useModal();

  const confirm = () => {
    modal.confirm({
      title: "Confirmar exclusão",
      icon: <ExclamationCircleOutlined />,
      centered: true,
      content:
        "Você tem certeza que deseja excluir este registro? essa ação não poderá ser desfeita.",
      okText: "SIM",
      cancelText: "NÃO",
      onOk() {
        console.log("ok");
      },
      onCancel() {
        console.log("cancel");
      },
    });
  };

  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={props?.image} />}
        actions={[
          <EyeOutlined key="setting" />,
          <DeleteOutlined key="delete" onClick={confirm} />,
        ]}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      {contextHolder}
    </>
  );
};
