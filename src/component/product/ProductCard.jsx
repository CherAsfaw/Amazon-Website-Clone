import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../currencyFormat/CurrencyFormat";
import classes from "./product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { type } from "../../Utility/action.type";

function ProductCard({ product, flex, renderDescription, renderAdd }) {
  const { image, title, rating, price, id, description } = product;

  const [state, dispatch] = useContext(DataContext);

  console.log(state);
  const addToCart = () => {
    dispatch({
      type: type.ADD_TO_BASKET,
      item: {
        image,
        title,
        rating,
        price,
        id,
        description,
      },
    });
  };

  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <div>
        <Link to={`/products/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className={classes.wrapper}>
        <h6>{title}</h6>
        {renderDescription && (
          <div style={{ maxWidth: "750px" }}>{description}</div>
        )}
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
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
export default ProductCard;
