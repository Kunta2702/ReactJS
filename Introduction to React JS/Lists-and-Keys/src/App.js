import UserProfile from './Components/UserProfile/index'
import './App.css'

const userDetailsList = [
  {
    name: 'Steve',
    role: 'SE',
    imgSrc: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  },
  {
    name: 'Floyd Miles',
    role: 'ST',
    imgSrc: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
  },
  {
    name: 'Jacob',
    role: 'manual tester',
    imgSrc: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
  },
  {
    name: 'Devon',
    role: 'line checkMen',
    imgSrc: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
  },
]
const App = () => (
  <div>
    <h1 className="title">Users List</h1>
    <ul className="list-container">
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} />
      ))}
    </ul>
  </div>
)
export default App
