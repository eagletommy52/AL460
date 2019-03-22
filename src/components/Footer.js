import React from 'react';
var NavLink = require('react-router-dom').NavLink;

function Footer () {
  return (
    <ul className='titleHeader'>
    
    <li className='nonBurgerNav'>
            <ul className='nav'>
              <li>
                <NavLink exact activeClassName='active' to='/'>&nbsp; Home</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to='/about'>About</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to='/fallen'>Our Fallen</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to='/store'>Store</NavLink>
              </li>
            </ul>
    </li>
    <li className='burgerNav'>
      <p>
        American Legion Post 460 - <em onClick={()=>{
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0;}}>Back to Top ↑</em>
      </p>
    </li>
    </ul>
  )
}

export default Footer;