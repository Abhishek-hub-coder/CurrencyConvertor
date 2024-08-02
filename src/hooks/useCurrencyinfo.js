import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);

            const result = await response.json();
            setData(result.rates); // Use the rates object from the API response

        };

        fetchData();
    }, [currency]);

    return { data };
}

export default useCurrencyInfo;
