import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const RequireAuth = ({ allowedRoles }) => {

    const { isLoggedIn, role } = useSelector((state) => state?.auth)
    const fullName = useSelector((state) => state?.auth?.data?.fullName)

    console.log(role)
    console.log(isLoggedIn)

    return isLoggedIn && allowedRoles.find((myRole) => myRole == role) ? (
        <Outlet />
    ) : isLoggedIn ? (<Navigate to='/denied' />) : (<Navigate to="/login" />)

}

export default RequireAuth