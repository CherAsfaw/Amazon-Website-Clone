import React from 'react'
import Catagory from '../../Catagory/Catagory'
import Product from '../../product/Product'
import Layout from '../../Layout/Layout'
import HeroCarousel from '../../Carousel/Carousel'

function Landing() {
  return (
    <Layout>
      <HeroCarousel/>
      <Catagory/>
      <Product/>
    </Layout>
  )
}

export default Landing