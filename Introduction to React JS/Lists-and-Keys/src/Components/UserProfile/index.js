import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {name, role, imgSrc} = userDetails
  //
  return (
    <li className="user-card-container">
      <img className="avatar" src={imgSrc} />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
}
export default UserProfile
