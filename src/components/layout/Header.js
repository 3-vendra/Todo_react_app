import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header style={headerStyle}>
            <h1>TodoList App</h1>
            <Link style={linkStyle} to="/">Home</Link> <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}
const headerStyle ={
    background:'#6dd5ed',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
}
const linkStyle ={
    fontSize:'24px',
    color:'#ffff',
    margin:'1em'
}
export default Header;