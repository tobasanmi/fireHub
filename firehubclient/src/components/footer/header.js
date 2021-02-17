import React from 'react'
import { Link } from 'react-router-dom'

const headerWrapper = {
display: 'flex',
justifyContent:'space-between',
background:'#e7e7e7',
height:'80px',
}
const listWrapper = {
  display:'flex',
  justifyContent:'space-evenly',
  margin:'20px'
}
const list = {
  margin:'10px',
  listStyleType:'none',
  color:'#337ab7',
  fontFamily:'Helvetica Neue,Helvetica,Arial,sans-serif',
  fontSize: '14px'
}
const logo = {
  margin:'20px',
  // backgroundColor:'red'
  width:'120px'

}
const navBar = {
  position:'fixed',
  zIndex:'2',
  top:'0',
  width:'100%',
  overflow:'hidden'
}
export default function Header() {
  return (
    <div style = {navBar}>
      <div className = 'header-wrapper' style= {headerWrapper}>
        <div className = 'logo'><img src = 'https://fibrehub.com.ng/image/fibrehublogo.jpg' style={logo}/></div>
        <div className = 'list-wrapper' >
          <ul style = {listWrapper}>
            <li style = {list}><a href = '#home'>Home</a></li>
            <li style = {list}><a href = '#services'>Services</a></li>
            <li style = {list}><a href = '#about'>About</a></li>
            <li style = {list}><a href = '#contact'>Contact</a></li>
            <li style = {list}><Link to = '/signup'>Signup</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
