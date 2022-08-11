import React from "react";

const ProductDetails = (props) => {
  return (
    <div>
      <h1 className="header">Product: {props.title}</h1>
      <p>description: {props.description}</p>
      <p>price: ${props.price}</p>
      <p>Sold by: {props.sellerName}</p>
      <p>createdAt: {props.date}</p>
    </div>
  );
};
export default ProductDetails;
