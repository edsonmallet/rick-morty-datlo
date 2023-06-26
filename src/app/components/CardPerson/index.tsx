"use client";
import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  EyeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import React from "react";

const { Meta } = Card;

// import { Container } from './styles';

export const CardPerson: React.FC = () => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
      actions={[<EyeOutlined key="setting" />, <DeleteOutlined key="delete" />]}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
};
