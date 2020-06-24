import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

let date = moment().toDate().toString()
date = date.substring(0, date.lastIndexOf('202')+ 4)

const Header = () => (
    <header>
        <h1>My 7 Day Workout Plan!</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/about" activeClassName="is-active">About</NavLink><br></br><br></br>
        <p>TODAY: {date}</p>
    </header>
);

export default Header;