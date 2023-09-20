import withUser from "../hoc/withUser";
const UserProfile = ({ user }) => {
    return <div>
        <h2>{user.name}</h2>
        <p>{user.mail}</p>
    </div>
}

// En este caso se puede exportar directo el componente HOC, ya que es el q vamos a utilizar en App
const UserProfileHOC = withUser(UserProfile)

export default UserProfileHOC;