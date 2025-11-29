import React from 'react'
import { BrowserRouter, Route,Routes  } from 'react-router-dom'
import  UserLayout from './components/Layout/UserLayout.jsx'


const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element ={<UserLayout />}> 
      {/* User Layout */}
      </Route>
      {/* <Route path="/" element={<AdminLayout />}> */}
        {/* Admin Layout */}
      {/* </Route> */}
    </Routes>
   </BrowserRouter>
  )
}

export default App