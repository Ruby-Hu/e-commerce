import React from "react";
import "./Product.scss";
import { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function Product() {
    const [selectedImg, setSelectedImg] =useState(0);
    const [quantity, setQuantity] =useState(1);


    return(
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
                    <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>title</h1>
                <span className="price">$999</span>
                <p>Come buy my beautiful things!</p>
                <div className="quantity">
                    <button onClick={() => setQuantity((prev) => prev === 1 ? 1: prev - 1)}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                </div>
                
                <div className="btn-group">
                    <button className="add">
                        <AddShoppingCartOutlinedIcon/> ADD TO CART
                    </button>
                    <button className="wish">
                        <FavoriteBorderIcon/>
                    </button>
                </div>
                <div className="details">
                    <span>
                        Description
                        <KeyboardArrowDownIcon className="down"/>
                    </span>
                    <hr/>
                    <span>
                        Materials
                        <KeyboardArrowDownIcon className="down"/>
                    </span>
                    <hr/>
                    <span>
                        Care
                        <KeyboardArrowDownIcon className="down"/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Product