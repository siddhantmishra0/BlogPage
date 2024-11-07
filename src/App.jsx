import {useDispatch} from 'react-redux'
import { useEffect, useState } from 'react'
import './App.css'
import authService from './appwrire/auth'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {login,logout} from './store/authSlice'

function App() {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])

  return !loading ? (
    <div className='min-h-screen w-screen flex flex-wrap content-between bg-gray-500'>
      <div className='w-full'>
      <Header/>
      <main>
      TODO : {/* <Outlet/> */}
      </main>
      <Footer/>
      </div>
    </div>

  ) : (null)
}

export default App
