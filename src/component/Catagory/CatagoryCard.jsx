import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import classes from './catagory.module.css'
import {Link} from 'react-router-dom'


function CatagoryCard({data}) {
  return (
    <div className={classes.catagory}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data.name}</h2>
        </span>
        <img src={data.imgLink} alt={data.title} />
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CatagoryCard