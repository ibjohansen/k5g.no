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
            <div className="container">
                <div className="row">
                    <div className="twelve columns">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="twelve columns">
                        <main role="main">
                            <h1>{this.props.title}</h1>

                            <h3>{this.props.body}</h3>


                            <img className="u-max-full-width" src={require('../../images/top1.jpg')} alt=""/>
                        </main>

                    </div>
                </div>
            </div>
        )
    }
});
