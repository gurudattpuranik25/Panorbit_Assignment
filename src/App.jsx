import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Context from "./context/Context";
import Posts from "./pages/Posts";
import Gallery from "./pages/Gallery";
import Todo from "./pages/Todo";

function App() {
  return (
    <Context>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile/:userId" element={<Profile />} />
          <Route exact path="/posts/:userId" element={<Posts />} />
          <Route exact path="/gallery/:userId" element={<Gallery />} />
          <Route exact path="/todo/:userId" element={<Todo />} />
        </Routes>
      </div>
    </Context>
  );
}

export default App;
