import React from 'react';
import Popup from './Popup';

class PostPopup extends React.Component{
  handlePost = () => {

  };
  render(){
    return(
      <Popup {...this.props} style="post-popup">
        <header>post a new product</header>
        <section>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td><input placeholder="your name" /></td>
              </tr>
              <tr>
                <td>link</td>
                <td><input placeholder="your link" /></td>
              </tr>
              <tr>
                <td>description</td>
                <td><input placeholder="your description" /></td>
              </tr>
              <tr>
                <td>media</td>
                <td><input placeholder="your media" /></td>
              </tr>
            </tbody>
          </table>
        </section>
        <footer className="post-footer">
          <button onClick={this.handlePost} className="footer-btn">Hunt it!</button>
        </footer>
      </Popup>
    );
  }
}

export default PostPopup;
