import React from "react";
import Card from "../Card/Card";
import "./List.scss";
import useFetch from "../../hooks/useFetch";


function List({maxPrice, sort, slug}) {
    const { data, loading, error } = useFetch(`/products?populate=*&[filters][category][slug][$eq]=${slug}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`);

    return(
        <div className="list">
            {loading
             ? "loading"
              : data?.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default List