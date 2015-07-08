'use strict';

import React from 'react';
import Router, {Link} from 'react-router';
import StickyDiv from 'react-stickydiv';
import mui, {RaisedButton, AppBar, LeftNav} from 'material-ui';

let ThemeManager = new mui.Styles.ThemeManager();

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

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function () {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    handleToggleNav(e){
        this.refs.leftNav.toggle();
    },

    handleNavigationClick(e, key, payload){
        this.transitionTo(payload.route)
    },

    render() {

        return (
            <div>
                <LeftNav
                    ref='leftNav'
                    docked={false}
                    menuItems={this.props.menuItems}
                    onChange={this.handleNavigationClick}/>
                <AppBar
                    title='K5G'
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleToggleNav}/>
            </div>
        )
    }
});
