import React from 'react';
import _Page from '../_Page';
import './styles.css';

import Header from '../../components/Header';

class Main extends _Page {

    render() {
        return (
            <>
                <Header/>
                <div id={'main-page'}>
                    <h1>ReactJS</h1>
                </div>
            </>
        );
    }

}

export default Main;