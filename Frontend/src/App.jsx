import { RouterProvider } from "react-router-dom"
import "./features/shared/style/globle.scss"
import { router } from "./appRoutes"
import { AuthProvider } from "./features/auth/auth.Context"
import { SongContextProvider } from "./features/home/Song.context"

const App = () => {
  return (
    <AuthProvider>
      <SongContextProvider>
        <RouterProvider router={router} />
      </SongContextProvider>
    </AuthProvider>
  )
}

export default App