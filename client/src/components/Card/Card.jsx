import React from "react";
import "./Card.scss";
import {Link} from "react-router-dom";

function Card({item}) {
    return(
        <>
            <Link className="link" to={`/product/${item.id}`}></Link>
            <div className="card">
                <div className="image">
                    {item.isNew && <span>New</span>}
                    <img src={item.img} alt="" className="mainImg" />
                    <img src={item.img2} alt="" className="secondImg" />
                </div>
                <h2>{item.title}</h2>
                <div className="prices">
                    {item.oldPrice && <h3 className="oldPrice">${item.oldPrice}</h3>}
                    <h3>${item.price}</h3>
                </div>
            </div>
        </>
    );
}

export default Card