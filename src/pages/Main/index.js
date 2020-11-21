import React from "react";
import _Page from "../_Page";
import "./style.css";
import {
  //   Form,
  //   Input,
  //   InputNumber,
  Button,
  Card,
  Table,
  Space,
  //   Modal,
  //   DatePicker,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  //   PlusOutlined,
} from "@ant-design/icons";
import MemberInfoService from "../../services/MemberInfoService";
import Header from "../../components/Header";

// const { Column } = Table;

// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 20 },
// };

// const validateMessages = {
//   required: "${label} is required!",
//   types: {
//     email: "${label} is not a valid email!",
//     number: "${label} is not a valid number!",
//   },
//   number: {
//     range: "${label} must be between ${min} and ${max}",
//   },
// };
class Main extends _Page {
  state = {
    members: [],
    // visible: false,
  };

  //   showModal = () => {
  //     this.setState({
  //       visible: true,
  //     });
  //   };

  //   handleOk = (e) => {
  //     console.log(e);
  //     this.setState({
  //       visible: false,
  //     });
  //   };

  //   handleCancel = (e) => {
  //     console.log(e);
  //     this.setState({
  //       visible: false,
  //     });
  //   };

  //   onFinish = (values) => {
  //     console.log(values);
  //   };

  columns = [
    {
      title: "#",
      dataIndex: "ID",
      key: "ID",
    },
    {
      title: "Nome",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Senha",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Comentário",
      dataIndex: "comments",
      key: "comments",
    },
    {
      title: "Max de consultas",
      dataIndex: "num_recs_to_display",
      key: "num_recs_to_display",
    },
    {
      title: "Classificar por",
      dataIndex: "my_sort_by",
      key: "my_sort_by",
    },
    {
      title: "Origem de email",
      dataIndex: "orig_email",
      key: "orig_email",
    },
    {
      title: "Data de abertura",
      dataIndex: "account_opened",
      key: "account_opened",
    },
    {
      title: "Último login",
      dataIndex: "last_login",
      key: "last_login",
    },
    {
      title: "Última mudança",
      dataIndex: "last_transaction",
      key: "last_transaction",
    },
    {
      title: "Resposta do Admin",
      dataIndex: "admin_response",
      key: "admin_response",
    },
    {
      title: "Data da resposta",
      dataIndex: "respond_date",
      key: "respond_date",
    },
    {
      title: "Action",
      key: "operation",
      render: (member_info) => (
        <Space size="middle">
          <Button icon={<EditOutlined />}></Button>

          <Button
            icon={<DeleteOutlined />}
            onClick={(e) => {
              e.preventDefault();
              if (window.confirm("Deseja remover o registro?")) {
                MemberInfoService.delete(member_info.ID).then((response) => {
                  MemberInfoService.getAll().then((response) => {
                    this.update({ members: response.data });
                  });
                });
              }
            }}
          ></Button>
        </Space>
      ),
    },
  ];
  componentDidMount() {
    super.componentDidMount();
    MemberInfoService.getAll().then((response) => {
      this.update({ members: response.data });
    });
  }

  render() {
    return (
      <>
        <Header />
        <Card title="Member List" />
        <Table
          columns={this.columns}
          dataSource={this.state.members}
          rowKey="ID"
        />
        {/* <Button
          type="primary"
          onClick={this.showModal}
          icon={<PlusOutlined />}
        ></Button>

        <Modal
          title="Adicionar Membro"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form
            {...layout}
            name="nest-messages"
            onFinish={this.onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "name"]}
              label="Nome"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "password"]}
              label="Senha"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[{ type: "email" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={["user", "comments"]} label="Comentário">
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              name={["user", "num_recs_to_display"]}
              label="Max de Consultas"
              rules={[{ type: "number", min: 0, max: 99 }]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item name={["user", "my_sort_by"]} label="Classificar por">
              <Input />
            </Form.Item>
            <Form.Item name={["user", "orig_email"]} label="Origem de email">
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "account_opened"]}
              label="Data de abertura"
            >
              <DatePicker />
            </Form.Item>
            <Form.Item name={["user", "last_login"]} label="Último login">
              <DatePicker />
            </Form.Item>
            <Form.Item
              name={["user", "last_transaction"]}
              label="Última mudança"
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              name={["user", "admin_response"]}
              label="Resposta do Admin"
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item name={["user", "respond_date"]} label="Data da Resposta">
              <DatePicker />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal> */}

        {/* <Table dataSource={this.state.members} rowKey="ID" >
          <Column title="#" dataIndex="ID" />
          <Column title="Nome" dataIndex="username" />
          <Column title="Senha" dataIndex="password" />
          <Column title="Email" dataIndex="email" />
          <Column title="Comentário" dataIndex="comments" />
          <Column title="Max de consultas" dataIndex="num_recs_to_display" />
          <Column title="Classificar por" dataIndex="my_sort_by" />
          <Column title="Origem de email" dataIndex="orig_email" />
          <Column title="Data de abertura" dataIndex="account_opened" />
          <Column title="Último login" dataIndex="last_login" />
          <Column title="Última mudança" dataIndex="last_transaction" />
          <Column title="Resposta do Admin" dataIndex="admin_response" />
          <Column title="Data da Resposta" dataIndex="respond_date" />
          <Column
            title="Action"
            render={(member_info) => (
              <Space size="middle">
                <Button icon={<EditOutlined />}></Button>

                <Button
                  icon={<DeleteOutlined />}
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.confirm("Deseja remover o registro?")) {
                      MemberInfoService.delete(member_info.ID).then(
                        (response) => {
                          MemberInfoService.getAll().then((response) => {
                            this.update({ members: response.data });
                          });
                        }
                      );
                    }
                  }}
                ></Button>
              </Space>
            )}
          />
        </Table> */}
      </>
    );
  }
}

export default Main;
