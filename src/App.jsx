import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Shop from './pages/Shop'
import OnSale from './pages/OnSale'
import NewArrivals from './pages/NewArrivals'
import Brands from './pages/Brands'
import TopBanner from './components/TopBanner/TopBanner'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
// import Website from './components/Website/Website'

function App() {

  const[isLoggedIn, setIsLoggedIn] = useState(false)
  

  return (
    <>    
    {/* {
      isLoggedIn ? <Website onLogout={()=> setIsLoggedIn(false)} /> : <SignIn onLogIn={()=>setIsLoggedIn(true)} />
    } */}
    <BrowserRouter>
      <TopBanner/>
      <Navbar isLoggedIn={isLoggedIn} onLogout={()=>setIsLoggedIn(false)} /> 
      <Routes>
        <Route path='/' element={isLoggedIn ? <Home/> :<Navigate to="/signIn" /> } />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/onSale' element={<OnSale/>} />
        <Route path='/newArrivals' element={<NewArrivals/>}/>
        <Route path='/brands' element={<Brands/>}/>
        <Route path='/product/:slug' element={<ProductDetails/>}/>
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/signin' element={<SignIn onLogIn={()=>setIsLoggedIn(true)} />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
