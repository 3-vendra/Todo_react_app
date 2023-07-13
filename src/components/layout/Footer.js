import React from 'react'

export default function Footer() {
    return (
       <footer style={footerstyle}>
        App developed by Adebayo Ilerioluwa
        <p><a href="github.com/adebayoileri">Github</a></p>
       </footer>
    )
}
const footerstyle ={
    background: 'linear-gradient(to right, #4286f4, #6dd5ed)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    padding:'1em',
    width:'100%',
    position:'fixed',
    textAlign:'center',
    left: 0,
    bottom:0
}
