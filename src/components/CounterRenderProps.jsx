import { useState } from "react";

// tiene como parametro "children"
const CounterRenderProps = ({ children }) => {
    // se escribe su funcion
    const [counter, setCounter] = useState(0)
    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        setCounter(counter - 1);
    }

    // devuelve al children y todos los datos necesarios para su funcionamiento
    return children(counter, increment, decrement)
}

export default CounterRenderProps;