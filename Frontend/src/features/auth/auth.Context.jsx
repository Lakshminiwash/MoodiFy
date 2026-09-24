import { createContext, useEffect, useState } from "react";
import { getMe } from "./services/Auth.api";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isInitialized, setIsInitialized] = useState(false)

    useEffect(() => {
        const initializeAuth = async () => {
            try {
                const data = await getMe()
                setUser(data.user)
            } catch {
                setUser(null)
            } finally {
                setLoading(false)
                setIsInitialized(true)
            }
        }

        initializeAuth()
    }, [])

    return <AuthContext.Provider value={{ user, setUser, loading, setLoading, isInitialized, setIsInitialized }}>
        {children}
    </AuthContext.Provider>
}

