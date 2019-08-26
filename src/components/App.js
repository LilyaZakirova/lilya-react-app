
import React, { Component } from "react";

import '../styles/main.less';
import '../styles/normalize.css';
import '../styles/reset-button.css';


import Main from './main.js';
import Gallery from './gallery.js';
import Form from './form.js';
import Footer from './footer.js';




import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    {/*<ul className="header">
                        <li><NavLink to="/">Main</NavLink></li>
                        <li><NavLink to="/gallery">Gallery</NavLink></li>
                        <li><NavLink to="/form">Form</NavLink></li>
                    </ul>
        <h1>Header</h1>*/}

                    <header className="page-header">
                        <div className="menu-section">
                            <a href="#" className="logo-desktop menu-section__logo-desktop">
                                <img src={require('../img/sedona-desktop-logo.svg')} className="logo-desktop__img" alt="logo"/>
                            </a>
                            <a href="#" className="logo-mobile menu-section__logo-mobile">
                                <img src={require('../img/sedona-mobile-logo.svg')} className="logo-mobile__img" alt="logo"/>
                            </a>

                            <nav className="nav-menu menu-section__nav-menu" id="nav-menu">
                                <div className="menu-button"> 
                                        <div className="menu-button__bar1"></div>
                                        <div className="menu-button__bar2"></div>
                                        <div className="menu-button__bar3"></div>
                                </div>
                                <ul className="nav-menu__list">
                                    <li className="nav-menu__item">
                                        <NavLink to="/" className="nav-menu__link">Главная</NavLink>
                                    </li>
                                    <li className="nav-menu__item nav-menu__item--with-margin">
                                        <NavLink to="/gallery" className="nav-menu__link">Фото и видео</NavLink>					
                                    </li>
                                    <li className="nav-menu__item">
                                        <NavLink to="/form" className="nav-menu__link">Форма отзыва</NavLink>				
                                    </li>
                                    <li className="nav-menu__item">
                                        <a href="https://dataart.com/" target="_blank" className="nav-menu__link">DataArt</a>						
                                    </li>					
                                </ul> 
                            </nav>
                        </div>	
                        <div className="welcome-section">
                            <img src={require('../img/sedona-welcome-message.svg')} className="welcome-section__img" alt="Welcome to the gorgeus Sedona. Because the Grand Canyon sucks!"/>
                            <div className="welcome-section__shape"></div>
                        </div>							
                    </header>   

                    <div className="content">
                        <Route exact path="/" component={Main}/>
                        <Route path="/gallery" component={Gallery}/>
                        <Route path="/form" component={Form}/>
                    </div>
                </div>
                <Footer />
            </HashRouter>
        );
    }
}

export default App;