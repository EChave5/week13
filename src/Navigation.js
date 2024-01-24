//create a navigation component that contains links
//styled like a navbar.  put at top of page

import React, {Component} from 'react';

export default class Navigation extends Component {
  render () {
    return (
      <nav className='navBar'>
        <ul>
          <li>Home</li> 
          <li>Start</li>
          <li>Pictures</li>
          <li>Contact</li>
        </ul>
      </nav>
    )
  }
}