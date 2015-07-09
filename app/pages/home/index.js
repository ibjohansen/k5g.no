'use strict';

import React from 'react';
import Header from '../../header';


module.exports = React.createClass({
    displayName: 'app/pages/home/index.js',

    getDefaultProps() {
        return {
            title: 'home',
            body: 'welcome home'
        };
    },

    render() {
        return (
            <div>
                <Header/>

                <main role="main">
                    <h1>{this.props.title}</h1>

                    <h3>{this.props.body}</h3>
                    <img src={require('../../images/top1.jpg')} alt=""/>
                </main>
            </div>
        )
    }
});
