import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../../Api/EndPoint";
import classes from './results.module.css'
import ProductCard from "../../product/ProductCard";
import Loader from "../../loader/Loader";

function Results() {
  const [results, setResults] = useState([])
  const { categoryName } = useParams();
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        console.log(res);
        setResults(res.data);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      });
    }, [])
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Result</h1>
          <p style={{ padding: "30px" }}>Category/{categoryName}</p>

          <div className={classes.product_container}>
            {results?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
}

export default Results;
