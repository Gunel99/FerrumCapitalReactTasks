import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Product from "./Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { loadAsyncAction } from "../../redux/actions/productAction";

function Products({ products }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAsyncAction());
  }, [dispatch]);

  return (
    <section id="products" className="my-4">
      <div className="container">
        <div className="d-flex justify-content-between mb-3">
          <h3>Products</h3>
          <div>
            <FontAwesomeIcon
              className="me-2"
              icon={faBasketShopping}
              style={{ marginTop: "20px" }}
            />
            <span>0</span>
          </div>
        </div>
        <div className="row">
          {products.map((product) => {
            return (
              <Product
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;
