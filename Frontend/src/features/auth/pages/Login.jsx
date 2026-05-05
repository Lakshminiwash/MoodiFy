import { Link, useNavigate } from 'react-router-dom'
import "../style/login.scss"
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

const Login = () => {

    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        await handleLogin({ email, password })
        navigate("/")
    }

    if (loading) {
        return (
            <div className="main">
                <h1>loading.....</h1>
            </div>
        )
    }
    return (
        <div className="main">
            <div className="box">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <input type="email" name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='enter email' />
                    <input type="password" name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='enter password' />
                    <button>Login</button>
                    <p>Don't have an account <Link to={"/register"}>register</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login