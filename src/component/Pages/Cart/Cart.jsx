import React, { useContext } from 'react'
import Layout from '../../Layout/Layout';
import { DataContext } from '../../DataProvider/DataProvider';
import ProductCard from '../../product/ProductCard'
import CurrencyFormat from '../../currencyFormat/CurrencyFormat';
import {Link} from 'react-router-dom'
import classes from './cart.module.css'
import { type } from '../../../Utility/action.type'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext)


  const total = basket.reduce((amount, item) => {
   return item.price * item.amount + amount;
  }, 0);

  const increment = (item) => {
    dispatch({
      type: type.ADD_TO_BASKET,
      item
  })
  }
  
  const decrement = (id) => {
    dispatch({
      type: type.REMOVE_FROM_BASKET,
      id
    })
  }


  console.log(basket);
  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>Oops! No item in your cart</p>
          ) : (
            basket.map((item, index) => {
              return (
                <section className={classes.product_cart}>
                  <ProductCard
                    key={index}
                    product={item}
                    renderDescription={true}
                    flex={true}
                    renderAdd={false}
                  />
                  <div className={classes.btn_container}>
                    <button onClick={() => increment(item)}>
                      <IoIosArrowUp size={20}/>
                    </button>
                    <span>{item.amount}</span>
                    <button onClick={() => decrement(item.id)}>
                      <IoIosArrowDown size={20}/>
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" name="" id="" />
              <small>This order contain a gift</small>
            </span>
            <Link to="/payment">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart