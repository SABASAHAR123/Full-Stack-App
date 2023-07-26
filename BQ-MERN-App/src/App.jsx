import React, { useContext, useEffect, useState } from 'react'
import Admin from './Admin/App'
import Users from './Users/App'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import GuestNav from './GuestNav';
import { GlobalContext } from './Context/context';
import jwtDecode from 'jwt-decode';
export default function App() {

  const role = 'guest'

  const { state, dispatch } = useContext(GlobalContext)
  const [currentUser, setCurrentUser] = useState(undefined)


  useEffect(() => {
    if (state.user == "undefined") {
      return undefined
    }

    else {
      const userdata = jwtDecode(state.user)
      console.log(userdata)
      setCurrentUser(userdata)
    }

  }, [state.user])

  return (
    <BrowserRouter>
      {
        currentUser?.role == 'admin' ? (<Admin />)
          :
          (
            currentUser?.role == 'user' ? (
              <Users />)
              :
              (
                <>
                  <GuestNav />

                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<div>Page-404</div>} />
                  </Routes>
                </>


              )
          )
      }

    </BrowserRouter>
  )
}
