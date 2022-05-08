import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://secure-thicket-21886.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems];
}
export default useItems;