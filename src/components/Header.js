import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>My Workout Plan!</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/comments" activeClassName="is-active">Comments</NavLink>
        <NavLink to="/about" activeClassName="is-active">About</NavLink>
    </header>
);

export default Header;