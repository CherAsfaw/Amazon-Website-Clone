import React from 'react'
import { catagoryInfo } from './CatagoryFullInfo'
import CatagoryCard from './CatagoryCard'
import classes from './catagory.module.css'

function Catagory() {
  return (
    <section className={classes.inner_wrapper}>
      <div className={classes.catagory_container}>
        {catagoryInfo.map((infos, index) => (
          <div key={index}>
            <CatagoryCard data={infos} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Catagory