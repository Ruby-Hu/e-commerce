import React from "react";
import { useParams } from "react-router-dom";
import "./Products.scss";
import List from "../components/List/List";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

const Products = () => {
    const[maxPrice, setMaxPrice] = useState(1000);
    const[sort,setSort] = useState(null);
    const { slug } = useParams();
    const { data, loading, error } = useFetch(`/products?populate=*&[filters][category][slug][$eq]=${slug}`);
    
    return(
        <div className="products">
            <div className="left">
                <div className="filterItem">
                    <h2>Filter By Price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort By</h2>
                    <div className="inputItem">
                        <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("asc")}/>
                        <label htmlFor="asc">Price: Low to High</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id="desc" value="desc" name="price" onChange={e=>setSort("desc")}/>
                        <label htmlFor="asc">Price: High to Low</label>
                    </div>
                    
                </div>
            </div>
            <div className="right">
                <List slug={slug} maxPrice={maxPrice} sort={sort}/>
            </div>
        </div>
        
    );
}

export default Products