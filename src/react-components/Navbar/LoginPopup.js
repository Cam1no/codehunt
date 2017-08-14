import React from 'react';
import Popup from './Popup';
import firebase from '../Firebase'

class LoginPopup extends React.Component{

  handleLogin = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  };


  render(){
    return(
      <Popup {...this.props} style="login-popup">
        <img src="/img/kitty.png"/>
        <h1>LOGIN</h1>
        <p>join us</p>
        <button className="facebook-btn" onClick={this.handleLogin}>Login with facebook</button>
      </Popup>
    );
  }
}

export default LoginPopup;
