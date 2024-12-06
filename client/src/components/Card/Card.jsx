import React from "react";
import "./Card.scss";
import {Link} from "react-router-dom";

function Card({item}) {
    console.log(item);
    return(
        <>
            <Link className="link" to={`/product/${item.documentId}`}>
                <div className="card">
                    <div className="image">
                        {item.new_product && <span>New</span>}
                        <img src={import.meta.env.VITE_APP_UPLOAD_URL + item.img1?.url} alt="" className="mainImg" />
                        <img src={import.meta.env.VITE_APP_UPLOAD_URL + item.img2?.url} alt="" className="secondImg" />
                    </div>
                    <h2>{item.title}</h2>
                    <div className="prices">
                        {item.oldPrice && <h3 className="oldPrice">${item.oldPrice}</h3>}
                        <h3>${item.price}</h3>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Card