import React from 'react';


export default function About() {
    return (
        <React.Fragment>
            <h1 style={headStyle}>About Page For Todo List App v1.0.0</h1>
            <p style={paraStyle}>App was developed by Adebayo Ilerioluwa</p>
            <p style={paraStyle}>CC: Brad Traversy React 2019 Crash Course</p>
        </React.Fragment>
    )
}
const headStyle ={
    textAlign:'center',
    color:'#39f'
}
const paraStyle={
    textAlign:'center',
    margin:'1em'
}