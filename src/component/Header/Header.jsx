import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { BiCart } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import HeaderStyle from "./header.module.css";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <section>
      <section className={HeaderStyle.header_container}>
        <div className={HeaderStyle.logo_container}>
          {/* logo */}
          <a href="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon logo"
            />
          </a>
          {/* delivery */}
          <a href="">
            <div className={HeaderStyle.delivery}>
              <div>
                <span>{<LocationOnOutlinedIcon />}</span>
              </div>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </a>
        </div>
        <div className={HeaderStyle.search}>
          {/* Search */}

          <select name="" id="">
            <option value="">All Departments</option>
          </select>

          <input type="text" name="" id="" placeholder="Search Amazon" />

          <span>
            <SearchIcon sx={{ fontSize: 25 }} />
          </span>
        </div>
        <div className={HeaderStyle.order_container}>
          {/* right side link */}
          <div className={HeaderStyle.language}>
            <img
              src="https://image.shutterstock.com/image-vector/usa-waving-flag-pattern-background-260nw-2480140689.jpg"
              alt="USA Flag"
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </div>
          <a href="">
            <div>
              <p>Hello, sign in</p>
              <span>Account & Lists</span>
              <IoMdArrowDropdown />
            </div>
          </a>
          {/* order */}
          <a href="">
            <p>Returns</p>
            <span>& Orders</span>
          </a>
          {/* cart */}
          <a to="/cart" className={HeaderStyle.cart}>
            {<BiCart size={35}/>}
            <span>0</span>
            <p>Cart</p>
          </a>
        </div>
      </section>
      <LowerHeader/>
    </section>
  );
}

export default Header;
