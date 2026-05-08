import { useState } from 'react'
import FaceExpression from '../../Expression/component/FaceExpression'
import Playlist from '../components/Playlist'
import { useSong } from '../hooks/useSongs'
import { useContext } from 'react'
import { AuthContext } from '../../auth/auth.Context'
import HomePage from '../components/homePage'

const Home = () => {

    const { handleGetSong } = useSong()
    const { user } = useContext(AuthContext)

    const [showExpression, setShowExpression] = useState(false)

    return (
        <>
            {
                !showExpression ? (
                    <HomePage setShowExpression={setShowExpression} user={user.username} />
                ) : (
                    <>
                        <FaceExpression
                            onClick={(expression) => {
                                handleGetSong({ mood: expression })
                            }}
                        />
                        <Playlist />
                    </>
                )
            }
        </>
    )
}

export default Home