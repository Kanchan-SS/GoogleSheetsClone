import { useEffect, useState } from "react";

const useFetch = (request) =>
{
    const [data, setdata] = useState(null);
    const [pending, setpending] = useState(true);
    const [error, seterror] = useState(null);

    useEffect(() =>
    {
        setTimeout(() =>
        {
            fetch(request)
                .then((res) => { return res.json() })
                .then((data) => { setdata(data); })
                .catch((error) => { seterror(error.message); seterror(false) })
            setpending(false);
        }, 2000);
    }, [data])


    return ({data, pending, error});
}

export default useFetch;