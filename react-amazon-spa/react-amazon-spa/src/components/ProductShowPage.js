import React, { Component } from "react";
import ProductDetails from "./ProductDetails";
import ReviewList from "./ReviewList";
import ProductData from "./ProductData";
const productData = ProductData();

export default class ProductShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = { product: productData };
  }
  deleteReview(id) {
    this.setState({
      product: {
        ...this.state.product,
        reviews: this.state.product.reviews.filter(
          (review) => review.id !== id
        ),
      },
    });
  }
  render() {
    const { product } = this.state;
    return (
      <div className="card mt-5 mb-5">
        <ProductDetails
          title={product.title}
          description={product.description}
          price={product.price}
          date={product.created_at}
          sellerName={product.seller.full_name}
        />
        {product.reviews.length && (
          <ReviewList
            reviews={product.reviews}
            deleteReview={(id) => this.deleteReview(id)}
          />
        )}
      </div>
    );
  }
}
