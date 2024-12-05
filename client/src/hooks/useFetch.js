import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

function useFetch(url) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                // setLoading(true);
                // const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/products?populate=*&[filters][type][$eq]=${type}`,
                //     {
                //         headers: {
                //             Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
                //         },
                //     }
                // );
                setLoading(true);
                const response = await makeRequest.get(url);
                setData(response.data.data);
            } catch(err) {
                setError(err);
            }
            setLoading(false);
        };
        fetchData();
    },[url]);

    return { data, loading, error };
}

export default useFetch;