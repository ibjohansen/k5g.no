'use strict';

import React from 'react';
import Router, {Link} from 'react-router';
import Header from '../../header';
import mui, {
    Paper, Card, CardHeader, CardTitle, CardActions,
    CardMedia, CardText, Avatar, FlatButton} from 'material-ui';

let ThemeManager = new mui.Styles.ThemeManager();

module.exports = React.createClass({
    displayName: 'app/pages/cats/index.js',

    getDefaultProps() {
        return {
            title: 'cats',
            body: 'i haz cats'
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

    render() {
        return (
            <section>
                <Header/>

                <section className="main">
                    <Paper zDepth={2}>
                        <Card>
                            <CardHeader
                                title="Pepsi"
                                subtitle="15.05.2012"
                                avatar={<Avatar>A</Avatar>}/>
                            <CardHeader
                                title="Demo Url Based Avatar"
                                subtitle="Subtitle"
                                avatar="http://lorempixel.com/100/100/nature/"/>
                            <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
                                <img src="http://lorempixel.com/600/337/nature/"/>
                            </CardMedia>
                            <CardTitle title="Title" subtitle="Subtitle"/>
                            <CardActions>
                                <FlatButton label="Action1"/>
                                <FlatButton label="Action2"/>
                            </CardActions>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                            </CardText>
                        </Card>
                    </Paper>
                </section>
            </section>
        )
    }
});
