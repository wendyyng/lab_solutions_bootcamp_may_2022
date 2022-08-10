import React, { Component } from "react";
import NewProductForm from "./NewProductForm";
import ProductsData from "./ProductsData";
const productsData = ProductsData();
export default class ProductsIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = { products: productsData };
  }
  createNewProduct(params) {
    this.setState({
      products: [params, ...this.state.products],
    });
  }
  deleteProduct(id) {
    this.deleteProduct = this.deleteProduct.bind(this);
    const newProductData = this.state.products.filter(
      (product) => product.id !== id
    );
    this.setState({ products: newProductData });
  }
  render() {
    return (
      <>
        <NewProductForm
          submitForm={(params) => this.createNewProduct(params)}
        />

        {this.state.products.map((product) => {
          return (
            <div key={product.id}>
              <header>{product.title}</header>
              <p>${product.price}</p>
              <p>sold by {product.seller ? product.seller.full_name : ""}</p>
              <button onClick={() => this.deleteProduct(product.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </>
    );
  }
}
