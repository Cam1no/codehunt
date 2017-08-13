import React from 'react';
import Popup from './Popup';

class LoginPopup extends React.Component{
  render(){
    return(
      <Popup {...this.props} style="login-popup">
        <img src="/img/kitty.png"/>
        <h1>LOGIN</h1>
        <p>join us</p>
        <button className="facebook-btn">Login with facebook</button>
      </Popup>
    );
  }
}

export default LoginPopup;
