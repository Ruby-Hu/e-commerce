import React from "react";
import "./Product.scss";
import { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";

function Product() {
    const { documentId } = useParams();
    const [selectedImg, setSelectedImg] =useState("img1");
    const [quantity, setQuantity] =useState(1);
    const dispatch = useDispatch()
    const uploadURL = import.meta.env.VITE_APP_UPLOAD_URL;
    const {data, loading, error} = useFetch(`/products/${documentId}?populate=*`);

    return(
        <>
        {loading ? "loading" :
            <div className="product">
                <div className="left">
                    <div className="images">
                        <img src={uploadURL + data?.img1?.url} alt="" onClick={e=>setSelectedImg("img1")}/>
                        <img src={uploadURL + data?.img2?.url} alt="" onClick={e=>setSelectedImg("img2")}/>
                    </div>
                    <div className="mainImg">
                        <img src={uploadURL + data?.[selectedImg]?.url} alt="" />
                    </div>
                </div>
                <div className="right">
                    <h1>{data.title}</h1>
                    <span className="price">${data.price}</span>
                    <p>{data.description}</p>
                    <div className="quantity">
                        <button onClick={() => setQuantity((prev) => prev === 1 ? 1: prev - 1)}>-</button>
                        {quantity}
                        <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                    </div>
                    
                    <div className="btn-group">
                        <button className="add" onClick={()=>dispatch(addToCart({
                            id: data.documentId,
                            title: data.title,
                            img: data.img1.url,
                            price: data.price,
                            quantity
                        }))}>
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
        }
        </>
    )
}

export default Product