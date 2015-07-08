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
            <section>
                <Header/>

                <div>
                    <h1>{this.props.title}</h1>

                    <h3>{this.props.body}</h3>
                </div>
                <div><Link to="/"> go home</Link></div>
            </section>
        )
    }
});
