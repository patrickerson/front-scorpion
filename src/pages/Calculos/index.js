import React from "react";
import PropTypes from "prop-types";
import _Page from "../_Page";

import MemberInfoService from "../../services/MemberInfoService";
import Header from "../../components/Header";

import "./styles.css";

import {
    Form,
    Input,
    InputNumber,
    DatePicker,
    Button,
    Layout,
    notification
  } from "antd";

  const {Content} = Layout;

  const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
  };
  
export default class Calculos extends _Page{

  service = MemberInfoService;
  state = {
    model: {}
  };
    
      render() {
        return (
          <>
            <Layout style={{backgroundColor: "white"}}>
              <Header/>
              <Content className={"card-cadastrar"}>
                <Form
                  ref={(ref) => this.formRef = ref}
                  
                  name="nest-messages"
                  onFinish={this.handleSubmit}
                  initialValues={this.state.model}
                >
                  <Form.Item
                    name={["ID"]}
                    label="ID"
                    noStyle>
                    <Input type="hidden" />
                  </Form.Item>
                  <Form.Item
                    name={["username"]}
                    label="Nome"
                  >
                    <Input/>
                  </Form.Item>
                  <Form.Item
                    name={["password"]}
                    label="Senha"
                  >
                    <Input/>
                  </Form.Item>
                  <Form.Item
                    name={["email"]}
                    label="Email"
                  >
                    <Input/>
                  </Form.Item>
                  <Form.Item name={["comments"]} label="Comentário">
                    <Input.TextArea/>
                  </Form.Item>
                  <Form.Item
                    name={["num_recs_to_display"]}
                    label="Max de Consultas"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item name={["my_sort_by"]} label="Classificar por">
                    <Input/>
                  </Form.Item>
                  <Form.Item name={["orig_email"]} label="Origem de email">
                    <Input/>
                  </Form.Item>
                  <Form.Item
                    name={["account_opened"]}
                    label="Data de abertura"
                  >
                    <DatePicker />
                  </Form.Item>
                  <Form.Item name={["last_login"]} label="Último login">
                    <DatePicker />
                  </Form.Item>
                  <Form.Item
                    name={["last_transaction"]}
                    label="Última mudança"
                  >
                    <DatePicker />
                  </Form.Item>
                  <Form.Item
                    name={["admin_response"]}
                    label="Resposta do Admin"
                  >
                    <Input.TextArea/>
                  </Form.Item>
                  <Form.Item
                    name={["respond_date"]}
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