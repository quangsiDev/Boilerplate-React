import React from 'react';
import { Card, Space, Table } from 'antd';
import styles from './AdminUsers.module.css';
import iconAvatar from '../../../assets/img/man.png';
import SearchAdmin from '../../../components/SearchAdmin/SearchAdmin';
// export const AdminDashboard: React.FC<{}> = () => {
const columns = [
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    key: 'avatar',
    render: (url) => (
      <div className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded-md">
        <img className="w-8 h-8" src={url} />
      </div>
    ),
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <span className="text-gray-900 text-base font-medium">{text}</span>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Total Score',
    dataIndex: 'score',
    key: 'score',
    render: (text) => <span className="text-gray-900 text-base font-medium">{text}</span>,
  },
];
const data = [
  {
    key: '1',
    avatar: iconAvatar,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    score: 700,
  },
  {
    key: '1',
    avatar: iconAvatar,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    score: 700,
  },
  {
    key: '1',
    avatar: iconAvatar,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    score: 700,
  },
  {
    key: '1',
    avatar: iconAvatar,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    score: 700,
  },
  {
    key: '1',
    avatar: iconAvatar,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    score: 700,
  },
  {
    key: '1',
    avatar: iconAvatar,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    score: 700,
  },
];
export const AdminUsersPage = () => {
  return (
    <Space direction="vertical" className="w-full">
      <SearchAdmin></SearchAdmin>
      <Table columns={columns} dataSource={data} className={styles.table} />
    </Space>
  );
};
