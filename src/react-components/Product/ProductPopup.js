import React from 'react';
import Popup from '../Navbar/Popup';


class ProductPopup extends React.Component {
  constructor(){
    super();
    this.state = {
      product: {
        id: 1,
        name: 'google',
        link: 'http://google.com',
        media: '/img/hoge.gif',
        upvote: 169,
        description: 'google web site',
        maker: {
          name: 'yuji',
          avater: '/img/hoge.gif'
        }
      },
      comments: [
        {
          name: "yuji",
          avatar: "/img/profile.jpg",
          content: 'Hello World'
        },
        {
          name: "yuji",
          avatar: "/img/profile.jpg",
          content: 'Hello New World'
        },
        {
          name: "yuji",
          avatar: "/img/profile.jpg",
          content: 'Hello Good World'
        }
      ]
    }
  }

  renderHeader(){
    return(
      <header style={{backgroundImage: 'url(' + this.state.product.media + ')'}}>
        <section className="header-shadow">
          <h1>{this.state.product.name}</h1>
          <p>{this.state.product.description}</p>
          <section>
            {this.renderUpVoteButton()}
            <a className="getit-btn" href={this.state.product.link} target="_blank">GET IT !</a>
          </section>
        </section>
      </header>
    );
  }

  renderBodyDiscussion(){
    return(
      <section className="discussion">
        <h2>Discussion</h2>
        <section className="post-comment">
          <img className="medium-avatr" src="/img/profile.jpg"/>
          <input placeholder="to be discuss" />
        </section>
        {this.renderComments()}
      </section>
    );
  }

  renderBody(){
    return(
      <section className="product-popup-body">
        <main>
          {this.renderBodyDiscussion()}
        </main>
      </section>
    );
  }

  renderComments(){
    return(
      <ul className="comment-list">
        {
          this.state.comments.map(function(comment, idx){
            return (
              <li className={idx}>
                <img className="medium-avatar" src={comment.avatar} />
                <section>
                  <strong>{comment.name}</strong>
                  <p>{comment.content}</p>
                </section>
              </li>
            )
          })
        }
      </ul>
    );
  }

  renderUpVoteButton(){
    return(
      <a className="upvote-button" href='#'>
        <span>
          <i className="fa fa-sort-asc"></i >
        </span>
        <br/>
        {this.state.product.upvote}
      </a>
    );
  }
  render(){
    return(
      <Popup {...this.props} style="product-popup">
        {this.renderHeader()}
        {this.renderBody()}
      </Popup>
    );
  }
}

export default ProductPopup;
