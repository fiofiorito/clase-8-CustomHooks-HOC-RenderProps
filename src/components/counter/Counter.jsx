import useCounter from "../../customHooks/useCounter";

const Counter = () => {
    // cuando se hace desestructuracion de un object, se tienen que pasar LOS MISMOS NOMBRES
    const { count, addOnClick, substractOnClick } = useCounter(0);

    return <>
        <button onClick={addOnClick}>add</button>
        <p>{count}</p>
        <button onClick={substractOnClick}>substract</button>
    </>
}

export default Counter;