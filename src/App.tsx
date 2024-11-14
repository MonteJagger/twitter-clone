import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Feed } from './components/Feed/Feed'
import { Login } from './Pages/Login/Login';

// import { useAuthState } from './services/auth';

function App() {
  // const { user, loading } = useAuthState()
  // if (loading) {
  //   console.log('Loading...', user)
  //   return <p>Loading...</p>
  // }

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Feed}></Route>
        <Route path="/login" Component={Login}></Route>
      </Routes>
    </Router>
  )
}

export default App;
