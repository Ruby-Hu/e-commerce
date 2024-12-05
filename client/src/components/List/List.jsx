import React from "react";
import Card from "../Card/Card";
import "./List.scss";
import useFetch from "../../hooks/useFetch";


function List({maxPrice, sort, slug}) {
    const { data, loading, error } = useFetch(`/products?populate=*&[filters][category][slug][$eq]=${slug}&[filters][price][$lte]=${maxPrice}`);
    // console.log(data);
    return(
        <div className="list">
            {loading
             ? "loading"
              : data?.map(item=>(
                <Card item={item} key={item.documentId}/>
            ))}
        </div>
    )
}

export default List