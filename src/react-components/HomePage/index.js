import React from 'react';
import ProductList from '../Product/ProductList';

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
            {
              this.state.productList
              ?
              <ProductList productList={this.state.productList}/>
              :
              null
            }
          </section>
        </section>
      </section>
    );
  }
}


export default HomePage;
