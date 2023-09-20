import { useEffect, useState } from "react";

const useApiData = (url) => {
    const [data, setData] = useState([])

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }, [])
    return { data, loading, error }
}

export default useApiData;