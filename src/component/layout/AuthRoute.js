import { Navigate } from "react-router-dom"
import { getToken } from "../../utils/cookie"

const AuthRoute = ({ children }) => {
  const isAuthenticated = !!getToken()
  return isAuthenticated ? <Navigate to="/" /> : children
}

export default AuthRoute;