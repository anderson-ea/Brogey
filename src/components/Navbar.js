import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="nav--container">
      <img src={require("../images/logo.png")} alt="logo"/>
      {user &&  (
        <div className="nav--links">
          <Link to="/about">About Me</Link>
          <Link 
            className="nav--logout" 
            to="/login" 
            onClick={logout}
          >
            Logout
          </Link>
        </div>
      )}
    </div>
  )
}


