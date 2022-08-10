import React from "react";

const ProductDetails = (props) => {

  return (
    <div>
      <h1 className="header">Product: {props.title}</h1>
      <p>description: {props.description}</p>
      <p>price: ${props.price}</p>
      <p>Sold by: {props.seller && props.seller.full_name}</p>
      <p>createdAt: {props.created_at}</p>
    </div>
  );
};
export default ProductDetails;
