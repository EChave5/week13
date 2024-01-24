//contains username and password input fields,
//h3 that says "Log In" with a border
//style using the default generated css file
//put at center of the page

import React from 'react';

//let e = React.createElement;

export default class LoginForm extends React.Component {
  LogToConsole () {
    let passwordData = document.getElementById('password-input').value;
    console.log("password", passwordData);
  }
  render () {
    return (
     <div className="container">
      <><div className='border border-primary'>
         <h3>Log In </h3>
       </div><form>
           <label>Username</label>
           <input type='text' placeholder='username'></input>
           <label>Password</label>
           <input id='password-input' onChange={this.LogToConsole} type='email' placeholder='password'></input>
           <button type='button' className='btn btn-primary'>Submit</button>
         </form></>
     </div>
    );
  }
}

