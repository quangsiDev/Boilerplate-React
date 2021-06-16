import React from 'react';
import { Card, Table } from 'antd';
import { UserOutlined, QuestionCircleOutlined, ContactsOutlined } from '@ant-design/icons';
import styles from './AdminDashBoard.module.css';
const { Meta } = Card;
// import { Line } from '@ant-design/charts';
import iconAvatar from '../../../assets/img/man.png';
import banner from '../../../assets/img/dashboard-banner.png';
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
];
export const AdminDashboard = (porps) => {
  return (
    <>
      <div className={`h-56 w-1/2 overflow-hidden rounded-xl morphism mb-5 flex ${styles.morphism}`}>
        <div className="w-1/2 p-5  border-none">
          <p className="text-2xl   font-medium text-gray-900">Welcome back, Educative !</p>
        </div>
        <div className="w-1/2 p-5">
          {/* <img src={`${banner}`} alt="" /> */}
          <div style={{ backgroundImage: `url(${banner})` }} className="w-full h-full bg-center bg-no-repeat"></div>
        </div>
        <div className={` absolute w-full h-full ${styles.bg_morphism}`}></div>
      </div>

      <div className="flex justify-between">
        <Card style={{ width: 300 }} className="shadow-lg border-none rounded-lg bg-blue-200">
          <Meta title="Total Users " className="mb-2" />
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14 bg-blue-500 p-2 rounded-lg text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="m-5 inline-block font-medium text-2xl">1,000</span>
          </div>
        </Card>
        <Card style={{ width: 300 }} className="shadow-lg rounded-lg bg-red-100 border-none">
          <Meta title="Total Questions" className="mb-2" />
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14 bg-red-500 p-2 rounded-lg text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="m-5 inline-block font-medium text-2xl">1,500</span>
          </div>
        </Card>
        <Card style={{ width: 300 }} className="shadow-lg rounded-lg bg-yellow-100 border-none">
          <Meta title="Total Enterprises " className="mb-2" />
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14 bg-yellow-400 p-2 rounded-lg text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="m-5 inline-block font-medium text-2xl">50</span>
          </div>
        </Card>
      </div>
      <div className="w-full  mt-8">
        <Table columns={columns} dataSource={data} className={styles.table} />
      </div>
    </>
  );
};
