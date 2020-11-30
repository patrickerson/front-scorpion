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
    Typography,
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
                  <Typography.Title>Asp Glyph</Typography.Title>
                  <Form.Item
                    name={["asp_glyph_1"]}
                    label="asp glyph 1"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["asp_glyph_2"]}
                    label="asp glyph 2"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["asp_glyph_3"]}
                    label="asp glyph 3"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["asp_glyph_4"]}
                    label="asp glyph 4"
                  >
                    <InputNumber/>
                  </Form.Item>
                 
                  <Typography.Title>Sign Glyph</Typography.Title>
                  <Form.Item
                    name={["sign_glyph_1"]}
                    label="sign glyph 1"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["sign_glyph_2"]}
                    label="sign glyph 2"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["sign_glyph_3"]}
                    label="sign glyph 3"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["sign_glyph_4"]}
                    label="sign glyph 4"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["sign_glyph_5"]}
                    label="sign glyph 5"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["sign_glyph_6"]}
                    label="sign glyph 6"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["sign_glyph_7"]}
                    label="sign glyph 7"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["sign_glyph_8"]}
                    label="sign glyph 8"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["sign_glyph_9"]}
                    label="sign glyph 9"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["sign_glyph_10"]}
                    label="sign glyph 10"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["sign_glyph_11"]}
                    label="sign glyph 11"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["sign_glyph_12"]}
                    label="sign glyph 12"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Typography.Title>Pl Glyph</Typography.Title>
                  <Form.Item
                    name={["pl_glyph_1"]}
                    label="pl glyph 1"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["pl_glyph_2"]}
                    label="pl glyph 2"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["pl_glyph_3"]}
                    label="pl glyph 3"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["pl_glyph_4"]}
                    label="pl glyph 4"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["pl_glyph_5"]}
                    label="pl glyph 5"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["pl_glyph_6"]}
                    label="pl glyph 6"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["pl_glyph_7"]}
                    label="pl glyph 7"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["pl_glyph_8"]}
                    label="pl glyph 8"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["pl_glyph_9"]}
                    label="pl glyph 9"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["pl_glyph_10"]}
                    label="pl glyph 10"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["pl_glyph_11"]}
                    label="pl glyph 11"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["pl_glyph_12"]}
                    label="pl glyph 12"
                  >
                    <InputNumber/>
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