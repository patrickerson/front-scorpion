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
    Button,
    Layout,
    Typography,
    Switch,
    Slider
  } from "antd";

  const {Content} = Layout;

  const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
  };

  const tailLayout = {
    wrapperCol: {offset: 8, span: 16}
  }
  
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
              <Content className={"card-calculos"}>
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
                  <Typography.Title className={"title-calculos"}>Aspectos</Typography.Title>
                  <Form.Item
                    name={["asp_glyph_1"]}
                    label="Conjunção"
                  > 
                
                    <Switch/>
                    
                  </Form.Item>
                  <Form.Item
                    name={["asp_glyph_2"]}
                    label="Sextil"
                  >
                    <Switch/>
                    
                  </Form.Item>
                  <Form.Item
                    name={["asp_glyph_3"]}
                    label="Quadratura"
                  >
                    <Switch/>
                   
                  </Form.Item>
                  <Form.Item
                    name={["asp_glyph_4"]}
                    label="Trigono"
                  >
                    <Switch/>
                    
                  </Form.Item>
                  <Form.Item
                    name={["asp_glyph_4"]}
                    label="Quincunce"
                  >
                    <Switch/>
                    
                  </Form.Item>
                 
                  <Typography.Title className={"title-calculos"}>Signos</Typography.Title>
                  <Form.Item
                    name={["sign_glyph_1"]}
                    label="Áries"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["sign_glyph_2"]}
                    label="Touro"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["sign_glyph_3"]}
                    label="Gêmeos"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["sign_glyph_4"]}
                    label="Câncer"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["sign_glyph_5"]}
                    label="Leão"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["sign_glyph_6"]}
                    label="Virgem"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["sign_glyph_7"]}
                    label="Libra"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["sign_glyph_8"]}
                    label="Escorpião"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["sign_glyph_9"]}
                    label="Sagitário"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["sign_glyph_10"]}
                    label="Capricórnio"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["sign_glyph_11"]}
                    label="Aquário"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["sign_glyph_12"]}
                    label="Peixes"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Typography.Title className={"title-calculos"}>Planetas</Typography.Title>
                  <Form.Item
                    name={["pl_glyph_1"]}
                    label="Sol"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["pl_glyph_2"]}
                    label="Lua"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["pl_glyph_3"]}
                    label="Mercurio"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["pl_glyph_4"]}
                    label="Vênus"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["pl_glyph_5"]}
                    label="Marte"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["pl_glyph_6"]}
                    label="Jupiter"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["pl_glyph_7"]}
                    label="Saturno"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["pl_glyph_8"]}
                    label="Urano"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["pl_glyph_9"]}
                    label="Netuno"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["pl_glyph_10"]}
                    label="Plutão"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["pl_glyph_11"]}
                    label="Ascendente"
                  >
                    <InputNumber/>
                  </Form.Item>
                  <Form.Item
                    name={["pl_glyph_12"]}
                    label="Meio do céu"
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