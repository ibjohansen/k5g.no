'use strict';

import React from 'react';
import Router, {Link} from 'react-router';
import StickyDiv from 'react-stickydiv';

module.exports = React.createClass({

    displayName: 'app/header.js',

    mixins: [Router.Navigation],

    getDefaultProps() {
        return {
            menuItems: [
                {route: '/', text: 'Hjem'},
                {route: '/map', text: 'Kart'},
                {route: '/cats', text: 'Kattene'}
            ]
        };
    },

    handleNavigationClick(e, key, payload){
        this.transitionTo(payload.route)
    },

    render() {

        return (
            <div>
                header
            </div>
        )
    }
});
