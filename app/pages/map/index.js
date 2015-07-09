'use strict';

import React from 'react';
import Router, {Link} from 'react-router';
import Header from '../../header';

module.exports = React.createClass({
    displayName: 'app/pages/map/index.js',

    getDefaultProps() {
        return {
            title: 'map',
            body: 'i go where?'
        };
    },

    render() {
        return (
            <div>
                <Header/>

                <main role="main">
                    <h1>{this.props.title}</h1>

                    <h3>{this.props.body}</h3>
                </main>
            </div>
        )
    }
});
