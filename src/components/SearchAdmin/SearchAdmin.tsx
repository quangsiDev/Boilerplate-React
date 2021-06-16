import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';
const { Search } = Input;

export default function SearchAdmin(props) {
  const onSearch = (value) => console.log(value);
  return (
    <Search
      // placeholder="Type the ID of question"
      placeholder={props.placeHolder}
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
      className=" mb-3 rounded-3xl"
      style={{ borderRadius: '50px' }}
    />
  );
}
