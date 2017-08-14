import React from 'react';
import ProductList from '../Product/ProductList';
import firebase from '../Firebase'

class HomePage extends React.Component {
  constructor(){
    super();
    this.state = {
      productList: []
    }

    var firebaseRef = firebase.database().ref('products');

    firebaseRef.on('value', (snapshot) => {
      var products = snapshot.val();

      this.setState({
        productList: products
      })
    })
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
