import { useEffect, useState } from "react";

const useItemsDetails = id => {
    const [item, setItem] = useState({});
    const url = `http://localhost:5000/items/${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [id])
    console.log(item);
    return [item, setItem];

}
export default useItemsDetails;