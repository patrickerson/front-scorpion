import React from "react";
import _Page from "../_Page";
import "./styles.css";
import MemberInfoService from "../../services/MemberInfoService";
import Header from "../../components/Header";
import PropTypes from "prop-types";
import {
  Form,
  Input,
  InputNumber,
  DatePicker,
  Button,
  Layout,
  notification
} from "antd";
// import from "@ant-design/icons";

const { Content } = Layout;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

class Cadastrar extends _Page {
    // static propTypes = {
    //     form: PropTypes.any.isRequired
    //   };

      state = {
        model: {}
      };

      componentDidMount() {
        this.getModel();
      }

    handleSubmit = e => {
        // e.preventDefault();

        MemberInfoService.save(e, "ID").then(response => {
          this.update({ model: response.data });
          notification.open({
            message: "Sucesso!",
            description: "Suas alterações foram salvas com sucesso."
          });
          this.props.history.push("/")
        });
      };

  render() {
    return (
      <>
        <Layout style={{backgroundColor: "white"}}>
          <Header />
          <Content className={"card-cadastrar"}>
            <Form   {...layout} name="nest-messages" onFinish={this.handleSubmit}>
              <Form.Item
                name={["member_info", "username"]}
                label="Nome"
                // rules= {[
                //       { required: true, message: "Campo obrigatório" },
                //       { max: 30, message: "maximo de 30 caracteres" }
                //     ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["member_info", "password"]}
                label="Senha"
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["member_info", "email"]}
                label="Email"
              >
                <Input />
              </Form.Item>
              <Form.Item name={["member_info", "comments"]} label="Comentário">
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                name={["member_info", "num_recs_to_display"]}
                label="Max de Consultas"
              >
                <InputNumber />
              </Form.Item>
              <Form.Item name={["member_info", "my_sort_by"]} label="Classificar por">
                <Input />
              </Form.Item>
              <Form.Item name={["member_info", "orig_email"]} label="Origem de email">
                <Input />
              </Form.Item>
              <Form.Item
                name={["member_info", "account_opened"]}
                label="Data de abertura"
              >
                <DatePicker />
              </Form.Item>
              <Form.Item name={["member_info", "last_login"]} label="Último login">
                <DatePicker />
              </Form.Item>
              <Form.Item
                name={["member_info", "last_transaction"]}
                label="Última mudança"
              >
                <DatePicker />
              </Form.Item>
              <Form.Item
                name={["member_info", "admin_response"]}
                label="Resposta do Admin"
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                name={["member_info", "respond_date"]}
                label="Data da Resposta"
              >
                <DatePicker />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Content>
        </Layout>
      </>
    );
  }
}

export default Cadastrar;