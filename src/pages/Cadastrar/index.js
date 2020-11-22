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
// import from "@ant-design/icons";

const {Content} = Layout;

const layout = {
  labelCol: {span: 8},
  wrapperCol: {span: 16},
};

class Cadastrar extends _Page {
  static propTypes = {
    form: PropTypes.any.isRequired
  };

  service = MemberInfoService;
  state = {
    model: {}
  };

  componentDidMount() {
    this.getModel();
  }

  handleSubmit = e => {
    // e.preventDefault();
    MemberInfoService.save(e, "ID").then(response => {
      this.update({model: response.data});
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
          <Header/>
          <Content className={"card-cadastrar"}>
            <Form
              ref={(ref) => this.formRef = ref}
              {...layout}
              name="nest-messages"
              onFinish={this.handleSubmit}
              initialValues={this.state.model}
            >
              <Form.Item
                name={["username"]}
                label="Nome"
                // valuePropName={this.state.model.username}
                // rules= {[
                //       { required: true, message: "Campo obrigatório" },
                //       { max: 30, message: "maximo de 30 caracteres" }
                //     ]} name="username" value={this.state.model.username} onChange={e => this._handleInputChange(e, this.state.model)}
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
                <DatePicker format={this.getMomentDate}/>
              </Form.Item>
              <Form.Item name={["last_login"]} label="Último login">
                <DatePicker format={this.getMomentDate}/>
              </Form.Item>
              <Form.Item
                name={["last_transaction"]}
                label="Última mudança"
              >
                <DatePicker format={this.getMomentDate}/>
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
                <DatePicker format={this.getMomentDate}/>
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
