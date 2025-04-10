import { type ReactElement } from "react"
import { Outlet,Navigate } from "react-router"

export default function AuthLayout():ReactElement {

  if(localStorage.getItem('TOKEN') !== null){
    return <Navigate to="/inicio" replace />;
  }

  return (
    <div>        
        <Outlet/>
    </div>
  )
}