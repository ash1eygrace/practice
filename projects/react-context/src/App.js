import { Route, Routes } from "react-router-dom";

// App Components
import Header from "./components/Header";
import Home from "./components/Home";
import UserSignIn from "./components/UserSignIn";
import UserSignOut from "./components/UserSignOut";
import Settings from "./components/Settings";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<UserSignIn />} />
        <Route path="signout" element={<UserSignOut />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
