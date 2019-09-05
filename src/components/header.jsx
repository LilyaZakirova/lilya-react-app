import React, {Component} from 'react';

import Navigation from './navigation_app.jsx';

function Header() {
    return (
        <header className="page-header">
            <div className="menu-section">
                <a href="#" className="logo-desktop menu-section__logo-desktop">
                    <img src={ require ('../img/sedona-desktop-logo.svg')} className="logo-desktop__img" alt="logo"/>
                </a>
                <a href="#" className="logo-mobile menu-section__logo-mobile">
                    <img src={ require ('../img/sedona-mobile-logo.svg')} className="logo-mobile__img" alt="logo"/>
                </a>
                
                <Navigation/>
            </div>	
            <div className="welcome-section">
                <img src={ require ('../img/sedona-welcome-message.svg')} className="welcome-section__img" alt="Welcome to the gorgeus Sedona. Because the Grand Canyon sucks!"/>
                <div className="welcome-section__shape"></div>
            </div>
        </header> 
    );
}

export default Header;