import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import classes from './catagory.module.css'

function CatagoryCard({data}) {
  return (
    <div className={classes.catagory}>
      <a href="">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={data.title} />
        <p>Shop now</p>
      </a>
    </div>
  );
}

export default CatagoryCard