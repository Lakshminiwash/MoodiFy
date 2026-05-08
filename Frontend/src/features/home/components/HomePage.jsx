import { useAuth } from "../../auth/hooks/useAuth"
import {useNavigate} from "react-router-dom"
import "./homepage.scss"

const HomePage = ({setShowExpression,user}) => {
   const {handleLogout} = useAuth()
   const navigate = useNavigate()

  return (
    <div className="home">

            <nav>
                <h1>Moodify 🎵</h1>

                <div className="right">
                    <p>Hello, {user} </p>
                    <button onClick={async()=>{
                        await handleLogout();
                        navigate("/login")
                    }} >Logout</button>
                </div>
            </nav>

            <main>

                <div className="content">

                    <h2>
                        Welcome To Moodify
                    </h2>

                    <p>
                        Discover music based on your emotions and
                        enjoy a personalized listening experience.
                    </p>

                    <button onClick={()=>setShowExpression(true)}>
                        Detect Your Mood
                    </button>

                </div>

            </main>

        </div>
  )
}

export default HomePage