import React from 'react';
import ProductPopup from './ProductPopup'

class ProductItem extends React.Component {
  constructor(){
    super();
    this.state = {
      productPopupStatus: false
    }
  }

  showProductPopup = () => {
    this.setState({productPopupStatus: true})
  };

  hideProductPopup = () => {
    this.setState({productPopupStatus: false})
  };


  renderUpVoteButton(){
    return(
      <a className="upvote-button" href='#'>
        <span>
          <i className="fa fa-sort-asc"></i >
        </span>
        <br/>
        {this.props.upvote}
      </a>
    );
  }

  renderNewWindowIcon(){
    return(
      <a className="prodct-item-link" href={this.props.link}>
        <span>
          <i className="fa fa-external-link"></i >
        </span>
      </a>
    );
  }

  renderInfoSection(){
    return(
      <section className="product-item-info">
        <a href="#" onClick={this.showProductPopup}>
          <h2>{this.props.name}</h2>
        </a>
        <p>
          {this.props.description}
        </p>
      </section>
    );
  }
  render(){
    return(
      <li className='product-item'>
        {this.renderUpVoteButton()}
        <img className="product-item-media" src={this.props.media} />
        {this.renderInfoSection()}
        {this.renderNewWindowIcon()}
        <ProductPopup status={this.state.productPopupStatus} hidePopup={this.hideProductPopup}/>
      </li>
    );
  }
}

export default ProductItem;
