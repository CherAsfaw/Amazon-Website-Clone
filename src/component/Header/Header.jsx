import React, { useContext } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { BiCart } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import HeaderStyle from "./header.module.css";
import LowerHeader from "./LowerHeader";
import {Link} from 'react-router-dom'
import { DataContext } from "../DataProvider/DataProvider";
import {auth} from '../../Utility/firebase'

function Header() {

  const [{user, basket }, dispatch] = useContext(DataContext)
  
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount
  }, 0)
    // 
  // console.log(basket.length);
  return (
    <section className={HeaderStyle.fixed}>
      <section className={HeaderStyle.header_container}>
        <div className={HeaderStyle.logo_container}>
          {/* logo */}
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon logo"
            />
          </Link>
          {/* delivery */}
          <Link to="">
            <div className={HeaderStyle.delivery}>
              <div>
                <span>{<LocationOnOutlinedIcon fontSize="large" />}</span>
              </div>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </Link>
        </div>
        <div className={HeaderStyle.search}>
          {/* Search */}

          <select name="" id="">
            <option value="">All Departments</option>
          </select>

          <input type="text" name="" id="" placeholder="Search Amazon" />

          <span>
            {/* <SearchIcon sx={{ fontSize: 48 }} /> */}
            <SearchIcon style={{ fontSize: 48 }} />
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
          <Link to={!user ? "/auth" : "/"}>
            <div className={HeaderStyle.account}>
              {user ? (
                <>
                  <p>Hello {user?.email?.split("@")[0]}</p>
                  <span onClick={() => auth.signOut()}>Sign Out</span>
                  <IoMdArrowDropdown />
                </>
              ) : (
                <>
                  <p>Hello, sign in</p>
                  <span>Account & Lists</span>
                  <IoMdArrowDropdown />
                </>
              )}
            </div>
          </Link>
          {/* order */}
          <div className={HeaderStyle.order}>
            <Link to="/order">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
          </div>
          <div>
            <Link to="/cart" className={HeaderStyle.cart}>
              {<BiCart size={45} />}
              <span>{totalItem}</span>
              <p className={HeaderStyle.cartText}>Cart</p>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
