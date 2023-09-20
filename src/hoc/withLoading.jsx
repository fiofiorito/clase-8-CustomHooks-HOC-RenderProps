import Loader from "../components/list/Loader"


// funcion q recibe como parametro un componente
const withLoading = (Component) => {
    // devuelve un componente con "...props" de parametro
    // ...props quiere decir q WithLoadingComponent como parametro recibe
    // todas las props del "Component" de with Loading
    return function WithLoadingComponent({ isLoading, ...props }) {
        if (isLoading) {
            return <Loader />
        } else {
            return <Component {...props} />
        }


    }
}

export default withLoading;