import { RouterProvider } from "react-router-dom"
import FaceExpression from "./features/Expression/component/FaceExpression"
import "./features/shared/style/globle.scss"
import { router } from "./appRoutes"
import { AuthProvider } from "./features/auth/auth.Context"

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App