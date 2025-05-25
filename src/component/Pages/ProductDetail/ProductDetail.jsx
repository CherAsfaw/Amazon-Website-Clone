import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../../Api/EndPoint';
import ProductCard from '../../product/ProductCard';

function ProductDetail() {
  const [products, setProducts] = useState([])
  const { productsid } = useParams();
  // console.log(productsid);
  useEffect(() => {
    axios.get(`${productUrl}/products/${productsid}`)
      .then(res => {
        // console.log(res);
        setProducts(res.data)
      })
      .catch(err => {
      console.log(err);
    })
  })
  return (
    <Layout>
      <div>
        <ProductCard product={products}/>
      </div>
    </Layout>
  );
}

export default ProductDetail