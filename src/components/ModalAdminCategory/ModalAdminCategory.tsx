import React from 'react';
import { Modal, Form, Input, Select } from 'antd';
import 'antd/dist/antd.css';
// interface ModalAdminCategoryProps {}
// export const ModalAdminCategory=  (props: ModalAdminCategoryProps) => {
const { TextArea } = Input;
export const ModalAdminCategory = (props) => {
  let { dataModal } = props;
  // console.log('dataModal', dataModal.answer);
  return (
    <Modal
      title="Edit question"
      visible={props.isModalVisible}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      style={{ top: 20 }}
    >
      <Form
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 20,
        }}
        layout="horizontal"
        style={{
          textAlign: 'left',
        }}
      >
        <Form.Item label="Question">
          <TextArea autoSize={{ minRows: 2, maxRows: 3 }} defaultValue={dataModal.question} />
        </Form.Item>
        <Form.Item label="English Question">
          <Input />
        </Form.Item>
        <Form.Item label="Explain question">
          <Input />
        </Form.Item>
        <Form.Item label="English explain">
          <Input />
        </Form.Item>
        <Form.Item label="Level">
          <Select>
            <Select.Option value="1">Easy</Select.Option>
            <Select.Option value="２">Medium</Select.Option>
            <Select.Option value="３">Hard</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Right Answer">
          <TextArea autoSize={{ minRows: 1, maxRows: 3 }} defaultValue={'no data'} />
        </Form.Item>
        {dataModal.answer?.map((answer) => (
          <Form.Item label="Sub Answer">
            <TextArea autoSize={{ minRows: 1, maxRows: 3 }} defaultValue={answer.content} />
          </Form.Item>
        ))}
      </Form>
    </Modal>
  );
};
