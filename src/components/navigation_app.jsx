import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMenuOpened: false
        }

        this.resize = this.resize.bind(this);
    }

    handleToggleMenu() {
        this.setState((state) => ({
            isMenuOpened: !state.isMenuOpened
        }));
    }

    update() {
        this.setState(() => ({
            isMenuOpened: false
        }));
    }

    handleWindowResolution() {
        window.addEventListener("resize", this.resize);
    }

    resize() {
        if ( window.innerWidth <= 720 ) {
            this.update();
        } 
    }

    render() {
        this.handleWindowResolution()
        return (
            <nav className={
                    this.state.isMenuOpened ?
                    "nav-menu menu-section__nav-menu nav-menu--changed-z-index" : "nav-menu menu-section__nav-menu"} 
                id="nav-menu">
                <MenuButton onClick={() => this.handleToggleMenu()}  isMenuOpened = {this.state.isMenuOpened}/>
                <NavigationList isMenuOpened = {this.state.isMenuOpened}/>
            </nav>
        );
    }
}




const MenuButton = (props) => {
    return (
        <div className={
                !props.isMenuOpened ?
                "menu-button " : "menu-button change"
            }
            onClick={props.onClick}> 

            <div className="menu-button__bar1"></div>
            <div className="menu-button__bar2"></div>
            <div className="menu-button__bar3"></div>
        </div>
    );
}

const NavigationList = (props) => {
    return (
        <ul className={
                !props.isMenuOpened ?
                "nav-menu__list nav-menu__list--invisible" : "nav-menu__list"}>
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
    );
}

export default Navigation;