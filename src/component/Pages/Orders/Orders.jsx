import React, { useContext, useEffect, useState } from 'react';
import classes from './orders.module.css'
import Layout from '../../Layout/Layout';
import { db } from '../../../Utility/firebase';
import { DataContext } from '../../DataProvider/DataProvider';
import {
  collection,
  doc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import ProductCard from '../../product/ProductCard';



function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([])
  useEffect(() => {
    if (user) {
      const ordersRef = collection(
        doc(collection(db, "users"), user.uid),
        "orders"
      );
      const q = query(ordersRef, orderBy("created", "desc"));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        console.log(snapshot.docs.map((doc) => doc.data()));
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
          }))
        );
      });
    } else {
      setOrders([])
    }
  },[user])
  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.order_container}>
          <h2>Your Orders</h2>
          {orders?.length == 0 && <div style={{padding: "20px"}}>You don't have orders yet</div>}
          {/* ordered items */}
          <div>
            {
              orders?.map((eachOrder, index) => {
                return (
                  <div key={index}>
                    <hr/>
                    <p>Order ID:{eachOrder.id}</p>
                    {
                      eachOrder?.data?.basket?.map((order) => (
                      <ProductCard key={order.id} product={order} flex={true}/>
                      ))
                    }
                  </div>
                );
              })
            }
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Orders