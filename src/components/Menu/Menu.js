import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const Menus = [
    {
        name : 'Home',
        to : '/',
        exact : true
    },
    {
        name : 'Product',
        to : '/product',
        exact : false
    }
]

const MyLink = ({title, to, exact}) => {
    return(
        <Route
            path={to} exact={exact} children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to}>{title}</Link>
                    </li>
                );
            }}
        />
    );
}

var ShowMenu = (Menus) => {
    var result = null;
    if (Menus.length > 0) {
        result = Menus.map((menu, index) => {
            return (
                <MyLink title={ menu.name } to={ menu.to } exact={ menu.exact } key={ index } />
            );
        });
    }
    return result;
}

class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                {/* <a className="navbar-brand">CALL API</a> */}
                <ul className="nav navbar-nav">
                    { ShowMenu(Menus) }
                </ul>
            </div>
        );
    }
}

export default Menu;
