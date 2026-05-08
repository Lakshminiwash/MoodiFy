import { Navigate } from 'react-router'
import { useAuth } from '../../auth/hooks/useAuth'
import { useEffect, useState } from 'react'

const Protected = ({ children }) => {

    const {user,loading} = useAuth()
    const [isInitializing, setIsInitializing] = useState(true)

    useEffect(() => {
        if (!loading) {
            setIsInitializing(false)
        }
    }, [loading])

    if (isInitializing) {
        return <h1>loading....</h1>
    }

    if (!user) {
        return <Navigate to="/login" />
    }

    return children
}

export default Protected