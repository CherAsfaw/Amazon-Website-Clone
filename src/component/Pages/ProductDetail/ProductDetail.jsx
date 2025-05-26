import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../../Api/EndPoint';
import ProductCard from '../../product/ProductCard';
import Loader from '../../loader/Loader';

function ProductDetail() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { productsid } = useParams();
  // console.log(productsid);
  useEffect(() => {
    setIsLoading(true)
    axios.get(`${productUrl}/products/${productsid}`)
      .then(res => {
        // console.log(res);
        setProducts(res.data)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false)
    })
  }, [productsid])
  return (
    <Layout>
      {isLoading ? <Loader /> : <ProductCard product={products}
        flex={true}
        renderDescription={true} renderAdd={true}/>}
    </Layout>
  );
}

export default ProductDetail