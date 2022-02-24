import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginScreen } from "./components/LoginScreen";
import { Navbar } from "./components/Navbar";
import { ProfilePage } from "./components/ProfilePage";
import { ViewProfiles } from "./components/ViewProfiles";
import { Chat } from "./components/Chat";
import { About } from "./components/About";
import { AuthProvider } from "./hooks/useAuth";


export const App = () => {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navbar /> 
          <Routes>
            <Route path="/" element={<ViewProfiles />} />
            <Route path="chat" element={<Chat />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="login" element={<LoginScreen />} />
            <Route path="about" element={<About />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  )
}