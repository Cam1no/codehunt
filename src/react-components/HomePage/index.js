import React from 'react';

class HomePage extends React.Component {
  constructor(){
    super();
    this.state = {
      productList: [
        {
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
        {
          id: 2,
          name: 'yahoo',
          link: 'http://yahoo.co.jp',
          media: '/img/hoge.gif',
          upvote: 161,
          description: 'yahoo web site',
          maker: {
            name: 'yuji2',
            avater: '/img/hoge.gif'
          }
        }
      ]
    }
  }

  render(){
    return(
      <section>
        <header>
          <img src="/img/banner.jpeg" width="100%" />
        </header>

        <section className="page-content">
          <section className="container">

            <ul className='product-list'>
              <li className='product-item'>
                <a className="upvote-button" href='#'>
                  <span>
                    <i className="fa fa-sort-asc"></i >
                  </span>
                  <br/>
                  {this.state.productList[0].upvote}
                </a>
                <img className="product-item-media" src={this.state.productList[0].media} />
                <section className="product-item-info">
                  <a href="#">
                    <h2>{this.state.productList[0].name}</h2>
                  </a>
                  <p>
                    {this.state.productList[0].description}
                  </p>
                </section>
                <a className="prodct-item-link" href={this.state.productList[0].link}>
                  <span>
                    <i className="fa fa-external-link"></i >
                  </span>
                </a>
              </li>
              <li className='product-item'>
                <a className="upvote-button" href='#'>
                  <span>
                    <i className="fa fa-sort-asc"></i >
                  </span>
                  <br/>
                  {this.state.productList[1].upvote}
                </a>
                <img className="product-item-media" src={this.state.productList[1].media} />
                <section className="product-item-info">
                  <a href="#">
                    <h2>{this.state.productList[1].name}</h2>
                  </a>
                  <p>
                    {this.state.productList[1].description}
                  </p>
                </section>
                <a className="prodct-item-link" href={this.state.productList[1].link}>
                  <span>
                    <i className="fa fa-external-link"></i >
                  </span>
                </a>
              </li>
            </ul>
          </section>
        </section>
      </section>
    );
  }
}


export default HomePage;
