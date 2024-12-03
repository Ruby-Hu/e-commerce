import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import axios from "axios";

function FeaturedProducts({type}) {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/products?populate=*`,
                    {
                        headers: {
                            Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
                        },
                    }
                );
                setData(response.data.data);
                console.log(response.data);
            } catch(err) {
                console.log(err);
            }
        };
        fetchData();
    },[]);

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