import React from 'react'
import Auth from '../Components/Auth'
import { useNavigate } from 'react-router'

const layout = (props) => {
    let Navigate = useNavigate()
  return (
    <div>
      Layout
      <button onClick={() =>{
        Auth.login(()=>{
            Navigate("/app")
        })
      }}>Login</button>
    </div>
  )
}

export default layout
