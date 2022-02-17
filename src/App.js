import { Link } from "react-router-dom";
import { LoginScreen } from "./components/LoginScreen";
import { Navbar } from "./components/Navbar";
import { ViewProfiles } from "./components/ViewProfiles";
import useAuth, { AuthProvider } from "./hooks/useAuth";


export const App = () => {
  const { user } = useAuth();
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <LoginScreen />
      </AuthProvider>
    </div>
  )
}
