import React from 'react';
import _Page from '../_Page';
import './style.css';
import {Button, Card, Table, Space} from 'antd';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import MemberInfoService from "../../services/MemberInfoService"

import Header from '../../components/Header';


class Main extends _Page {
    state = {
        members: []
    };

    columns = [
        {
            title: '#',
            dataIndex: 'ID',
            key: 'ID',
        },
        {
            title: 'Nome',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Senha',
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Comentário',
            dataIndex: 'comments',
            key: 'comments',
        },
        {
            title: 'Max de consultas',
            dataIndex: 'num_recs_to_display',
            key: 'num_recs_to_display',
        },
        {
            title: 'Classificar por',
            dataIndex: 'my_sort_by',
            key: 'my_sort_by',
        },
        {
            title: 'Origem de email',
            dataIndex: 'orig_email',
            key: 'orig_email',
        },
        {
            title: 'Data de abertura',
            dataIndex: 'account_opened',
            key: 'account_opened',
        },
        {
            title: 'Último login',
            dataIndex: 'last_login',
            key: 'last_login',
        },
        {
            title: 'Última mudança',
            dataIndex: 'last_transaction',
            key: 'last_transaction',
        },
        {
            title: 'Resposta do Admin',
            dataIndex: 'admin_response',
            key: 'admin_response',
        },
        {
            title: 'Data da resposta',
            dataIndex: 'respond_date',
            key: 'respond_date',
        },
        {
            title: 'Action',
            key: 'operation',
            render: (member_info) => (
                <Space size="middle">
                    <Button icon={<EditOutlined/>}>
                    </Button>

                    <Button icon={<DeleteOutlined/>}
                        onClick={e => {
                            e.preventDefault();
                            if (window.confirm("Deseja remover o registro?")) {
                                MemberInfoService.delete(member_info.ID).then(response => {
                                    MemberInfoService.getAll().then(response => {
                                        this.update({members: response.data});
                                    });
                                });
                            }
                        }}
                    >
                    </Button>
                </Space>
            ),
        },
    ];

    componentDidMount() {
        super.componentDidMount();
        MemberInfoService.getAll().then(response => {
            this.update({members: response.data});
        });
    }

    render() {
        return (
            <>
                <Header/>
                <Card title="Member List"/>
                <Table columns={this.columns} dataSource={this.state.members}/>
            </>
        );
    }

}

export default Main;