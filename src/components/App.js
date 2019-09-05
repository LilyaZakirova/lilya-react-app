
import React, { Component } from "react";

import '../styles/main.less';

import Main from './main.js';
import Gallery from './gallery.js';
import Form from './form.js';
import Footer from './footer.js';
import Header from './header.js';


import {
    Route,
    HashRouter
} from "react-router-dom";


class App extends Component {
    render() {
        return (
            <HashRouter>
                <Header />
                <div className="content">
                    <Route exact path="/" component={Main}/>
                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/form" component={Form}/>
                </div>
                <Footer />
            </HashRouter>
        );
    }
}

export default App;