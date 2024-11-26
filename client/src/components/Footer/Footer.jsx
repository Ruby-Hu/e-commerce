import React from "react"
import "./Footer.scss";

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Necklaces</span>
                    <span>Rings</span>
                    <span>Bracelets & Anklets</span>
                    <span>Earrings</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>Hello we are pretty jewelry store</span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>Here's our Instagram</span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="copyright">© 2024 Do Not Disturb. All Rights Reserved.</span>
                </div>
                <div className="right">
                    <img src="/img/payment.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer