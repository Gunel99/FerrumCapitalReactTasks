import React from "react";

const Product = ({ image, name, price }) => {
  return (
    <div className="col-3">
      <div className="card">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name.substring(0, 15)}</h5>
          <span className="price">{price} AZN</span>
          <br />
          <a href="#">Add To Cart</a>
        </div>
      </div>
    </div>
  );
};

export default Product;
