import React from "react";
import "./Cart.scss";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

function Cart() {
    const data = [
        {
            id: 1,
            img: "https://simpleanddainty.com/cdn/shop/files/daintysatchainnecklacegfnew_1400x.jpg?v=1700248201",
            title: "Necklace",
            price: 15

        },
        {
            id: 2,
            img: "https://spencediamonds.com/assets/7581-A.jpg",
            img2: "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/daffney1-n/diamond/diamond-Brillant_AAA/stone2/diamond-Brillant_AAA/stone3/diamond-Brillant_AAA/alloycolour/yellow.jpg",
            title: "Ring",
            isNew: true,
            price: 20
        },
    ];

    return(
        <div className="cart">
            <h1>Shopping Cart</h1>
            {data?.map(item=>(
                <div className="item">
                    <img src={item.img} alt="" />
                    <div className="detail">
                        <h1>{item.title}</h1>
                        <p>1 X ${item.price}</p>
                    </div>
                    <ClearOutlinedIcon className="del"/>
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$999</span>
            </div>
            <button>CHEKOUT</button>
            <span className="clear">Clear Cart</span>
        </div>
    );
}

export default Cart