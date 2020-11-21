import React from "react";
import _Page from "../_Page";
import "./styles.css";
import {NavLink} from "react-router-dom";
import MemberInfoService from "../../services/MemberInfoService";
import Header from "../../components/Header";
import PropTypes from "prop-types";
import {
    Card,
    Form,
    Input,
    InputNumber,
    DatePicker, Button,
} from "antd";

// import from "@ant-design/icons";

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

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 20},
    textalign: "center",
    alignitems: "center",
};

class Cadastrar extends _Page {
    render() {
        return (
            <>
                <Header/>
                <Card className={'card-cadastrar'}>
                    <Form
                        {...layout}
                        name="nest-messages"
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name={["user", "name"]}
                            label="Nome"
                            rules={[{required: true}]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            name={["user", "password"]}
                            label="Senha"
                            rules={[{required: true}]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            name={["user", "email"]}
                            label="Email"
                            rules={[{type: "email"}]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item name={["user", "comments"]} label="Comentário">
                            <Input.TextArea/>
                        </Form.Item>
                        <Form.Item name={["user", "num_recs_to_display"]} label="Max de Consultas" rules={[{type: "number", min: 0, max: 99}]}>
                            <InputNumber/>
                        </Form.Item>
                        <Form.Item name={["user", "my_sort_by"]} label="Classificar por">
                            <Input/>
                        </Form.Item>
                        <Form.Item name={["user", "orig_email"]} label="Origem de email">
                            <Input/>
                        </Form.Item>
                        <Form.Item name={["user", "account_opened"]} label="Data de abertura">
                            <DatePicker/>
                        </Form.Item>
                        <Form.Item name={["user", "last_login"]} label="Último login">
                            <DatePicker/>
                        </Form.Item>
                        <Form.Item name={["user", "last_transaction"]} label="Última mudança">
                            <DatePicker/>
                        </Form.Item>
                        <Form.Item name={["user", "admin_response"]} label="Resposta do Admin">
                            <Input.TextArea/>
                        </Form.Item>
                        <Form.Item name={["user", "respond_date"]} label="Data da Resposta">
                            <DatePicker/>
                        </Form.Item>
                        <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </>
        );
    }
}

export default Cadastrar;