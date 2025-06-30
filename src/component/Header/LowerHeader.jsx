import React from 'react'
import { IoMenu } from "react-icons/io5";
import LowerHeaderStyle from './header.module.css'

function LowerHeader() {
  return (
    <div className={LowerHeaderStyle.Lower_container}>
      <ul>
        <li><IoMenu size={30}/>All</li>
        <li>Today's Deals</li>
        <li>Registery</li>
        <li>Prime Video</li>
        <li>Gift Cards</li>
        <li>Customer Service</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader
