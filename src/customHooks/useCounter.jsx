import { useState } from "react";

const useCounter = (initValue) => {
    const [count, setCount] = useState(initValue)
    // add
    const addOnClick = () => {
        setCount(count + 1);
    }
    // substract
    const substractOnClick = () => {
        setCount(count - 1);
    }

    // se puede devolver como array o como objeto
    return { count, addOnClick, substractOnClick };
}

export default useCounter;