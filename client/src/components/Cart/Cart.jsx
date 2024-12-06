import React from "react";
import "./Cart.scss";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, resetCart } from "../../redux/cartReducer";

function Cart() {
    const products = useSelector(state=>state.cart.products);
    const dispatch = useDispatch();

    function totalPrice() {
        let total = 0;
        products.forEach(item => (total += item.quantity * item.price));
        return total.toFixed(2);
    }

    return(
        <div className="cart">
            <h1>Shopping Cart</h1>
            {products?.map(item=>(
                <div className="item">
                    <img src={import.meta.env.VITE_APP_UPLOAD_URL + item.img1} alt="" />
                    <div className="detail">
                        <h1>{item.title}</h1>
                        <p>{item.quantity} X ${item.price}</p>
                    </div>
                    <ClearOutlinedIcon className="del" onClick={()=>dispatch(removeFromCart(item.id))}/>
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <button>CHEKOUT</button>
            <span className="clear" onClick={()=>dispatch(resetCart())}>Clear Cart</span>
        </div>
    );
}

export default Cart