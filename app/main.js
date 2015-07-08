'use strict';

import React from 'react';
import Router, {Link, Route, DefaultRoute, NotFoundRoute} from 'react-router';
import Home from './pages/home';
import Map from './pages/map';
import Cats from './pages/cats';

require("./styles/reset.css");
require("./styles/app.css");

React.initializeTouchEvents(true);
let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

let routes = (
    <Route path="/" handler={App}>
        <DefaultRoute handler={Home}/>
        <Route path="/home" handler={Home}/>
        <Route path="/map" handler={Map}/>
        <Route path="/cats" handler={Cats}/>
    </Route>
);

var App = React.createClass({
    render () {
        return (
            <div>
                <RouteHandler/>
            </div>
        )
    }
});

Router.run(routes, (Handler, state) => {
    React.render(<Handler {...state}/>, document.querySelector('#app'));
});
