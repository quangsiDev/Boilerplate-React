import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import React, { useState } from 'react';
interface Props {}
const style = {
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
// export const ActionAdminCategory: React.FC<{}> = (props: Props) => {
export const ActionAdminCategory = (props) => {
  return (
    <Space
      style={{
        display: 'flex',
      }}
    >
      <Button onClick={props.showModal} type="primary" ghost style={style.flexCenter}>
        <EditOutlined />
      </Button>
      <Button danger ghost style={style.flexCenter} onClick={props.showConfirm}>
        <DeleteOutlined />
      </Button>
    </Space>
  );
};
