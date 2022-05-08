import { useEffect, useState } from "react";

const useItemsDetails = id => {
    const [item, setItem] = useState({});
    const url = `https://secure-thicket-21886.herokuapp.com/${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [id])
    return [item, setItem];

}
export default useItemsDetails;