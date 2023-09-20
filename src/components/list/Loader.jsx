import { useState, CSSProperties } from "react"
import BounceLoader from "react-spinners/BounceLoader"


const Loader = () => {
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#000")
    return <div className="loader">
        <BounceLoader
            color={color}
            loading={loading}
            size={30}
        />
    </div>

}

export default Loader