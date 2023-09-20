const getUserData = () => {
    return {
        id: 1,
        name: "aaa",
        mail: "aaa@mai.com"
    }
}

function withUser(Component) {
    return function withUserComponent(props) {
        const user = getUserData()
        return <Component {...props} user={user} />
    }
}

export default withUser;