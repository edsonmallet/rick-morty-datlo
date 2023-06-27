"use client";

import React from "react";
import { Avatar, Button, Popover } from "antd";
import { useAtom } from "jotai";
import { itemsRemoved } from "@/atoms/filter";
import { DeleteFilled } from "@ant-design/icons";
import * as S from "./styles";

export const ListRemoveds: React.FC = () => {
  const [removed, setRemoved] = useAtom(itemsRemoved);

  const handleRestore = React.useCallback(
    (id: number) => {
      const newRemoved = removed.filter((item) => item?.id !== id);
      setRemoved(newRemoved);
    },
    [removed, setRemoved]
  );

  const list = React.useMemo(() => {
    return removed.map((item) => (
      <S.ContainerRemoveds key={item?.id}>
        <span>
          <Avatar src={item?.image} />
          <span>{item?.name}</span>
        </span>

        <Button
          type="primary"
          shape="circle"
          danger
          onClick={() => handleRestore(item?.id)}
          size="small"
        >
          X
        </Button>
      </S.ContainerRemoveds>
    ));
  }, [removed, handleRestore]);

  return (
    <>
      {removed.length > 0 && (
        <Popover content={list} title="Removidos" placement="bottom">
          <Button type="primary" danger icon={<DeleteFilled />} size="large">
            Deletados
          </Button>
        </Popover>
      )}
    </>
  );
};
