import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Routes , Route, Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import SetingsPage from './pages/SetingsPage'
import ProfilePage from './pages/ProfilePage'
import { useAuthStore } from './store/useAuthStore'
import { Loader } from 'lucide-react'

function App() {
  const {authUser, checkAuth,isCheckingAuth} = useAuthStore()

useEffect(()=>{
  checkAuth()
},[checkAuth])

  console.log({authUser});


  if(isCheckingAuth && !authUser) return (
    <div className="flex items-center justify-center h-screen" >
      <Loader className="size-10 animate-spin" />
    </div>
  )

  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/"  element={authUser ? <HomePage /> : <Navigate to="/login" /> } />
        <Route path="/signup"  element={!authUser ?  <SignupPage /> : <Navigate to="/" />} />
        <Route path="/login"  element={!authUser ?  <LoginPage /> : <Navigate to="/" />} />
        <Route path="/settings"  element={<SetingsPage />} />
        <Route path="/profile"  element={authUser ?  <ProfilePage /> : <Navigate to="/login" />} />



      </Routes>

    </div>
    
  )
}

export default App