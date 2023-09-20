import { useEffect, useState } from "react";
import List from "./List";
import withLoading from "../../hoc/withLoading";


// creamos un const (q va a ser componente) que llame a la funcion withLoading y le pasamos el componente q
// se debe mostrar cuando "carga algo"
const ListHOC = withLoading(List);
const ListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setItems(["item 1", "item 2", "item 3"]);
            setLoading(false)
        }, 5000)
    }, [])

    return <div>
        {/* aca devolvemos el ListHOC q devuelve el List.jsx xq es su parametro a traves de withLoading.
    Como recibe ...props, se le otorga todas las props de List.jsx a ListHOC permitiendo q se
    muestre toda la info adecuadamente */}
        <ListHOC items={items} isLoading={loading} />
    </div>
}

export default ListContainer;