import React from 'react'
import Hero from './Components/Hero'
import { Route, Routes } from 'react-router-dom'
import SignupPage from './Pages/UserAuth/SignupPage'
import LoginPage from './Pages/UserAuth/LoginPage'
import Profile from './Pages/UserAuth/Profile'
import EditProfile from './Pages/UserAuth/EditProfile'
import ChangePassword from './Pages/UserAuth/ChangePassword'
import HomePage from './Pages/HomePage'
import CreateProduct from './Pages/Products/CreateProduct'
import CartPage from './Pages/CartPage'
import UpdateProduct from './Pages/Products/UpdateProduct'
import RequireAuth from './Components/Auth/RequireAuth'
import OrderPage from './Pages/OrderPage'
import Dashboard from './Pages/Admin/Dashboard'
import DeliveryDetail from './Pages/UserAuth/DeliveryDetail'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Success from './Components/Success'
import Failed from './Components/Failed'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<SignupPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/admin/dashboard' element={<Dashboard />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />

      <Route element={<RequireAuth allowedRoles={['ADMIN', 'USER']} />}>
        <Route path='/me' element={<Profile />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/profile/edit' element={<EditProfile />} />
        <Route path='/changePassword' element={<ChangePassword />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/delivery/detail' element={<DeliveryDetail />} />
        <Route path='/order/success' element={<Success />} />
        <Route path='/order/fail' element={<Failed />} />
      </Route>

      <Route element={<RequireAuth allowedRoles={['ADMIN']} />}>
        <Route path='/product/add' element={<CreateProduct />} />
        <Route path='/product/edit' element={<UpdateProduct />} />
      </Route>

    </Routes>
  )
}

export default App
