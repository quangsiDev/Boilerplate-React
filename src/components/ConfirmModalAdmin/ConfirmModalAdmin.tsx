import React from "react"
import { Modal, Button, Space, Row } from "antd"
import { ExclamationCircleOutlined } from "@ant-design/icons"
interface Props {}
export const ConfirmModalAdmin = props => {
  // export default function ConfirmModalAdmin(props: Props) {
  // function confirm() {
  //   Modal.confirm({
  //     title: "Confirm",
  //     icon: <ExclamationCircleOutlined />,
  //     content: "Are you sure to delete this question?",
  //     okText: "Ok",
  //     cancelText: "Cancle"
  //   })
  // }

  return (
    <Modal
      title="Confirm"
      visible={props.isConfirmVisible}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      okText="Ok"
      cancelText="Cancle"
    >
      <div className="flex items-center">
        <ExclamationCircleOutlined />
        <span className="ml-5">Are you sure to delete this question?</span>
      </div>
    </Modal>
  )
}
