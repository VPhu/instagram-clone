import { Navigate } from "react-router-dom"
import { getToken } from "../../utils/cookie"

const PublicRoute = ({ children }) => {
  const isAuthenticated = !!getToken()
  return isAuthenticated ? <Navigate to="/" /> : children
}

export default PublicRoute;