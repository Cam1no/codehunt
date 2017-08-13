import React from 'react';

class ProfileMenu extends React.Component{
  constructor(){
    super();
    this.state = {
      showProfileNav: false
    }
  }

  handleClick = () => {
    if (this.state.showProfileNav){
      this.setState({showProfileNav: false});
    }else{
      this.setState({showProfileNav: true});
    }
  };

  renderProfileNav(){
    return(
      <nav className="profile-nav" ref="ProfileNav">
        <a href="#">My Profile</a>
        <a href="#">Logout</a>
      </nav>
    );
  }
  render(){
    return(
      <section className="profile-menu">
        <img src="/img/profile.jpg" onClick={this.handleClick} className="profile-btn medium-avatar"/>
        {
          this.state.showProfileNav? this.renderProfileNav() : null

        }
      </section>

    );
  }
}

export default ProfileMenu;
