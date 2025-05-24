import React from 'react';
import Rating from "@mui/material/Rating";
import CurrencyFormat from '../currencyFormat/CurrencyFormat';
import classes from './product.module.css'

function ProductCard({ product }) {
  const {image, title, rating, price} = product
  return (

      <div className={classes.card_container}>
        <a href="">
          <img src={image} alt="" />
        </a>
        <div className={classes.wrapper}>
          <h6>{title}</h6>
          <div className={classes.rating}>
            {/*  */}
            <Rating value={5} precision={0.1} />
            {rating.count}
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