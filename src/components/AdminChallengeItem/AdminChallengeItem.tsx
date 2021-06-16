import React from 'react';
import { UserOutlined } from '@ant-design/icons';
export default function AdminChallengeItem({ day, title, description, totalUser }) {
  return (
    <div className="w-full  bgflex flex-col bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 p-3 my-2">
      <p className=" py-2 text-white">{day}</p>
      <p className=" py-2 text-yellow-200 text-2xl font-medium">{title}</p>
      <p className=" py-2 flex items-center text-white text-base">
        <UserOutlined className="text-white mr-2" />
        {totalUser}
      </p>
      <div className="flex ">
        <p className=" py-2 text-white text-xl">{description}</p>{' '}
        <button
          style={{ background: 'linear-gradient(90deg,#67d690 0%,#00a99d 100%)' }}
          className="flex-shrink-0 block w-32 h-12  rounded-sm text-sm font-medium text-white bg-gradient_green racking-widest
        "
        >
          View details
        </button>
      </div>
    </div>
  );
}
