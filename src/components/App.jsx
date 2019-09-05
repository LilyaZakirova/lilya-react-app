import React, { Component } from "react";

import {
    Route,
    HashRouter
} from "react-router-dom";

import '../styles/main.less';

import Main from './main.jsx';
import Gallery from './gallery.jsx';
import Form from './form.jsx';
import Footer from './footer.jsx';
import Header from './header.jsx';

class App extends Component {
    render () {
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