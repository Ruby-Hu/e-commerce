import React from "react";
import Card from "../Card/Card"
import "./FeaturedProducts.scss"

function FeaturedProducts({type}) {
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
        {
            id: 3,
            img: "https://www.eradesign.ca/cdn/shop/products/ERADESIGN-PEARL-DROP-EARRINGS-RG-YG-3_3024x3024.jpg?v=1704924781",
            img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrEfkGrWYjPEWmZS5uizvlWQGedOa4hmwuXg&s",
            title: "Earring",
            isNew: true,
            price: 18
        },
        {
            id: 4,
            img: "https://ca.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw3f3e1c6f/productimages/singlepackshot/562731C00_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5",
            title: "Bracelet",
            oldPrice: 20,
            price: 16
        }
    ];

    return (
      <div className="featuredProducts">
        <div className="top">
            <h1>{type}</h1>
            <p></p>
        </div>
        <div className="bottom">
            {data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
      </div>

    );
  }
  
  export default FeaturedProducts