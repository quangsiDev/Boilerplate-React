import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Table, Switch, Space } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { ActionAdminCategory } from '../../../components/ActionAdminCategory/ActionAdminCategory';
import { ModalAdminCategory } from '../../../components/ModalAdminCategory/ModalAdminCategory';
import { ConfirmModalAdmin } from '../../../components/ConfirmModalAdmin/ConfirmModalAdmin';
import SearchAdmin from '../../../components/SearchAdmin/SearchAdmin';
import httpServ from '../../../services/http.service';
import { useParams } from 'react-router-dom';

function onChange(pagination, filters, sorter, extra) {
  // console.log('params', pagination, filters, sorter, extra);
}

interface Props {}
export const CategoryPage: React.FC<{}> = (props: Props) => {
  let { idType } = useParams<any>();
  // console.log('id', idType);
  // console.log('render');
  const Question = (id, question, score, level, answer, allDtata) => {
    return {
      id,
      key: id,
      question,
      score: score === null ? 'no data' : score,
      level: level === null ? 'no data' : level,

      action: <ActionAdminCategory showModal={() => showModal(allDtata)} showConfirm={showConfirm} />,
      priority: <Switch defaultChecked />,
      answer,
    };
  };
  // export const CategoryPage = (props) => {
  const [totalQuestion, setTotalQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [pagination, setPagination] = useState<any>({ current: 1, pageSize: 6 });
  const [pageIndex, pageInex] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [loading, setLoading] = useState(false);
  const [dataModal, setDataModal] = useState<any>('');

  useEffect(() => {
    let pagination = {
      current: 1,
      pageSize: 6,
    };
    fetchData(pagination);
    // console.log('reeee');
    return () => {};
  }, [idType]);

  const fetchData = (pagination) => {
    // console.log('pagination', pagination);
    setLoading(true);
    httpServ
      .getMultipleChoiceBaseType(idType, pagination.current, pagination.pageSize)
      .then((res: any) => {
        // console.log('yes', res);
        let data = res.data;
        setLoading(false);
        let newQuestions = res.data.questions.map((question) =>
          Question(question.id, question.question, null, question.level, question.answer, question),
        );
        setQuestions(newQuestions);
        setPagination({
          ...pagination,
          total: data.total,
        });
      })
      .catch((err) => {
        setQuestions([]), setLoading(false);
      });
  };
  const handleTableChange = (data) => {
    // console.log('change data', data);
    setPagination(data);
    fetchData(data);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const showModal = (data) => {
    setDataModal(data);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showConfirm = () => {
    setIsConfirmVisible(true);
  };

  const handleOkConfirm = () => {
    setIsConfirmVisible(false);
  };

  const handleCancelConfirm = () => {
    setIsConfirmVisible(false);
  };
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: 'Question',
      dataIndex: 'question',
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: 'Level',
      dataIndex: 'level',
      // sorter: {
      //   compare: (a, b) => a.math - b.math,
      //   multiple: 2,
      // },
    },
    {
      title: 'Score',
      dataIndex: 'score',
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
    },
  ];

  const data = [
    {
      id: '1',
      key: '1',
      type: 'React',
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, error',
      score: 60,
      action: <ActionAdminCategory showModal={showModal} showConfirm={showConfirm} answers />,
      priority: <Switch defaultChecked />,
    },
  ];

  return (
    <Space direction="vertical" className="w-full">
      <SearchAdmin></SearchAdmin>
      {/* <Table columns={columns} dataSource={data} onChange={onChange} /> */}
      <Table
        columns={columns}
        // rowKey={1}
        dataSource={questions}
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
      />
      <ModalAdminCategory
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        dataModal={dataModal}
      ></ModalAdminCategory>
      <ConfirmModalAdmin
        isConfirmVisible={isConfirmVisible}
        handleOk={handleOkConfirm}
        handleCancel={handleCancelConfirm}
      ></ConfirmModalAdmin>
    </Space>
  );
};
