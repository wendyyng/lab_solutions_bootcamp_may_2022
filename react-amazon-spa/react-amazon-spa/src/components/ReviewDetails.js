import React, { Component } from "react";
import StarRating from "./StarRating";

const ReviewDetails = (props) => {
  const { body, rating, full_name } = props;
  return (
    <div>
      <p>
        {body}
        <br />
        By {full_name}
      </p>
      <StarRating max={5} rating={rating} />
      <button onClick={props.deleteReview}>Delete</button>
    </div>
  );
};

export default ReviewDetails;
