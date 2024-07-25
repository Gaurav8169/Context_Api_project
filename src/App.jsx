 
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {
  

  return (
    <UserContextProvider>
     <h2>This project for context api with useContext hook</h2>
    <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
