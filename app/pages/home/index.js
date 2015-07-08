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
            <section>
                <Header/>

                <div>
                    <h1>{this.props.title}</h1>

                    <h3>{this.props.body}</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad autem blanditiis corporis
                        deleniti eaque, eius hic in iusto laboriosam maiores minima officia quas quasi quos sequi,
                        soluta tempora totam.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad autem blanditiis corporis
                        deleniti eaque, eius hic in iusto laboriosam maiores minima officia quas quasi quos sequi,
                        soluta tempora totam.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad autem blanditiis corporis
                        deleniti eaque, eius hic in iusto laboriosam maiores minima officia quas quasi quos sequi,
                        soluta tempora totam.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad autem blanditiis corporis
                        deleniti eaque, eius hic in iusto laboriosam maiores minima officia quas quasi quos sequi,
                        soluta tempora totam.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad autem blanditiis corporis
                        deleniti eaque, eius hic in iusto laboriosam maiores minima officia quas quasi quos sequi,
                        soluta tempora totam.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad autem blanditiis corporis
                        deleniti eaque, eius hic in iusto laboriosam maiores minima officia quas quasi quos sequi,
                        soluta tempora totam.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad autem blanditiis corporis
                        deleniti eaque, eius hic in iusto laboriosam maiores minima officia quas quasi quos sequi,
                        soluta tempora totam.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad autem blanditiis corporis
                        deleniti eaque, eius hic in iusto laboriosam maiores minima officia quas quasi quos sequi,
                        soluta tempora totam.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad autem blanditiis corporis
                        deleniti eaque, eius hic in iusto laboriosam maiores minima officia quas quasi quos sequi,
                        soluta tempora totam.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad autem blanditiis corporis
                        deleniti eaque, eius hic in iusto laboriosam maiores minima officia quas quasi quos sequi,
                        soluta tempora totam.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad autem blanditiis corporis
                        deleniti eaque, eius hic in iusto laboriosam maiores minima officia quas quasi quos sequi,
                        soluta tempora totam.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad autem blanditiis corporis
                        deleniti eaque, eius hic in iusto laboriosam maiores minima officia quas quasi quos sequi,
                        soluta tempora totam.</p>
                </div>
            </section>
        )
    }
});
