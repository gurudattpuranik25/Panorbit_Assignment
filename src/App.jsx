import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import User from "./pages/User";
import Profile from "./pages/Profile";
import Context from "./context/Context";
import Posts from "./pages/Posts";

function App() {
  return (
    <Context>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/user/:userId" element={<User />} /> */}
          <Route exact path="/profile/:userId" element={<Profile />} />
          <Route exact path="/posts/:userId" element={<Posts />} />
        </Routes>
      </div>
    </Context>
  );
}

export default App;
