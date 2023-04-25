import React from 'react'
import { useState } from 'react'
import Modal from '../Loginbutton/Modal'

const Login = () => {
    const [click,setClick] = useState(false)
    const Loginbutton = () => setClick (false);

  return (
    <>
         <button onClick={() => setClick (true)}>Login</button>
         <div style={{ overFlow:"hidden" }}>

          {click && <Modal  Modal={Loginbutton}/>}
         </div>
    </>
  )
}

export default Login
