import { useContext, useEffect } from "react"
import { AuthContext } from "../auth.Context"
import { getMe, login, logout, register } from "../services/Auth.api"

export const useAuth = () => {
    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading } = context

    async function handleRegister({ email, password, username }) {
        setLoading(true)
        const data = await register({ email, password, username })
        setUser(data.user)
        setLoading(false)
    }

    async function handleLogin({ email, password }) {
        setLoading(true)
        const data = await login({ email, password })
        setUser(data.user)
        setLoading(false)
    }


    async function handleGetMe() {
        setLoading(true)
        const data = await getMe()
        setUser(data.user)
        setLoading(false)
    }

    async function handleLogout() {
        setLoading(true)
        await logout()
        setUser(null)
        setLoading(false)
    }

    useEffect(() => {
        handleGetMe()
    }, [])

    return ({ user, loading, handleRegister, handleLogin, handleGetMe, handleLogout })
}