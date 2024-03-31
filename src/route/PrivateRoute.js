import React from 'react'
import Detail from '../pages/Detail'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({auth,page}) => {
  return (
    auth===true?<Detail/>:<Navigate to={'/login'}/>
  )
}