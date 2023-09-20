import { useState } from "react";

const useBoolean = () => {
    const [value, setValue] = useState(false)

    const handleClick = () => {
        setValue(!value);
    }

    // para poder usarlo como hook, se tiene q devolver el valor que se va a usar y
    // la funcion q manipula el setValue ==> handleClick
    return [value, handleClick];
}

export default useBoolean;