import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from './product.module.css'

function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={classes.product_container}>
      {products.map((singleProduct) => (
          <ProductCard product={singleProduct} key={singleProduct.id} />       
      ))}
    </div>
  );
}

export default Product;
