import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // const linkStyle = {
  //   textDecoration: 'none',
  //   color: 'black' 
  // }

  return (
    <div className="nav--container">
      <img 
        src={require("../images/logo.png")} 
        alt="logo"
        onClick={() => navigate("/")}
      />
      {user &&  (
        <div className="nav--links">
          <Link 
            className="nav--about"
            to="/about" 
            >About Me</Link>
          <Link 
            className="nav--logout" 
            to="/login"
            // style={linkStyle}
            onClick={logout}
          >
            Logout
          </Link>
        </div>
      )}
    </div>
  )
}


