import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useState } from 'react'

const Register = () => {
    const {loading,handleRegister} = useAuth()
    
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    async function submitHandler(e) {
        e.preventDefault()
        await handleRegister({username,email,password})
        navigate("/")
    }
    if(loading){
        return(
            <div className="main">
                <h1>Loading....</h1>
            </div>
        )
    }

  return (
    <div className="main">
            <div className="box">
                <form onSubmit={submitHandler}>
                    <h1>Register</h1>
                    <input required type="text" value={username} name='username' onChange={(e)=>{setUsername(e.target.value)}} placeholder='enter username'/>
                    <input required type="email" value={email} name='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='enter email'/>
                    <input required type="password" value={password} name='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='enter password'/>
                    <button>register</button>
                    <p>Already have an account <Link to={"/login"}>login</Link></p>
                </form>
            </div>
        </div>
  )
}

export default Register