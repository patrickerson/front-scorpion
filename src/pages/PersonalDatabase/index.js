import React from "react";
import _Page from "../_Page";
import "./styles.css";
import {Button, Card, Table, Space, Layout} from "antd";
import {EditOutlined, DeleteOutlined} from "@ant-design/icons";
import {NavLink} from 'react-router-dom';
import MemberInfoService from "../../services/MemberInfoService";
import Header from "../../components/Header";

const {Content} = Layout;

class PersonalDatabase extends _Page {
  state = {
    members: [],
  };

  columns = [
    {
      title: "#",
      dataIndex: "ID",
      key: "ID",
    },
    {
      title: "Nome",
      dataIndex: "name",
      key: "Name",
    },
    {
      title: "Mon",
      dataIndex: "mon",
      key: "mon",
    },
    {
      title: "Dia",
      dataIndex: "dia",
      key: "dia",
    },
    {
      title: "Ano",
      dataIndex: "ano",
      key: "ano",
    },
    {
      title: "Hora",
      dataIndex: "hour",
      key: "hour",
    },
    {
      title: "Minutos",
      dataIndex: "minute",
      key: "minute",
    },
    {
      title: "Fuso horário",
      dataIndex: "timezone",
      key: "timezone",
    },
    {
      title: "Grau de longitude",
      dataIndex: "account_opened",
      key: "account_opened",
    },
    {
      title: "E/W",
      dataIndex: "last_login",
      key: "last_login",
    },
    {
      title: "Decigrau de longitude",
      dataIndex: "last_transaction",
      key: "last_transaction",
    },
    {
      title: "Grau de latitude",
      dataIndex: "admin_response",
      key: "admin_response",
    },
    {
      title: "N/S",
      dataIndex: "respond_date",
      key: "respond_date",
    },
    {
        title: "Decigrau latitude",
        dataIndex: "respond_date",
        key: "respond_date",
      },
      {
        title: "Data de entrada",
        dataIndex: "respond_date",
        key: "respond_date",
      },
    {
      title: "Action",
      key: "operation",
      render: (member_info) => (
        <Space size="middle">
          <NavLink to={"/cadastrar/" + member_info.ID}>
            <Button><EditOutlined/></Button>
          </NavLink>

          <Button
            icon={<DeleteOutlined/>}
            onClick={(e) => {
              e.preventDefault();
              if (window.confirm("Deseja remover o registro?")) {
                MemberInfoService.delete(member_info.ID).then((response) => {
                  MemberInfoService.getAll().then((response) => {
                    this.update({members: response.data});
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
      this.update({members: response.data});
    });
  }

  render() {
    return (
      <>
        <Layout style={{backgroundColor: "white"}}>
          <Header/>
          <Card title="Lista de Membros"/>
          <Content>
            <Table
              columns={this.columns}
              dataSource={this.state.members}
              rowKey="ID"
            />
          </Content>
        </Layout>
      </>
    );
  }
}

export default PersonalDatabase;
