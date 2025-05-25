import React from 'react';
import Rating from "@mui/material/Rating";
import CurrencyFormat from '../currencyFormat/CurrencyFormat';
import classes from './product.module.css';
import {Link} from 'react-router-dom'

function ProductCard({ product }) {
  const {image, title, rating, price, id} = product
  return (
    <div className={classes.card_container}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div className={classes.wrapper}>
        <h6>{title}</h6>
        <div className={classes.rating}>
          {rating &&
          typeof rating.rate === "number" &&
          typeof rating.count === "number" ? (
            <>
              <Rating value={rating.rate} precision={0.1} readOnly />
              <small>{rating.count}</small>
            </>
          ) : (
            <small>No rating</small>
          )}
        </div>

        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>Add Cart</button>
      </div>
    </div>
  );
}

export default ProductCard