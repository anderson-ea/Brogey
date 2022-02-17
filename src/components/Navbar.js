import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const Navbar = () => {
  const { user } = useAuth();
  return (
    <div className="nav--container">
      <img src={require("../images/logo.png")} alt="logo"/>
      {user &&  (
        <>
          <Link to="/chat">Chat</Link>
          <Link to="/logout">Logout</Link>
        </>
      )}
    </div>
  )
}


