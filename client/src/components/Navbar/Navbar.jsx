import React from "react"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Navbar = () => {
    const [open,setOpen] = useState(false);


    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <Link className="link" to="/">Do Not Disturb</Link>
                </div>
                <div className="center">
                    <div className="item">
                        <Link className="link" to="/products/1">Necklaces</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/2">Rings</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/3">Bracelets & Anklets</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/4">Earrings</Link>
                    </div>
                </div>
                <div className="right">
                    <div className="item">
                        <span>Language</span>
                        <KeyboardArrowDownIcon/>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/4">About</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon/>
                        <PersonOutlineIcon/>
                        <FavoriteBorderIcon/>
                        <div className="cartIcon" onClick={()=>setOpen(!open)}>
                            <ShoppingCartOutlinedIcon/>
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart/>}
        </div>
    )
}

export default Navbar