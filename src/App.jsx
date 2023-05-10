import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import User from "./pages/User";
import Context from "./context/Context";

function App() {
  return (
    <Context>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user/:userId" element={<User />} />
        </Routes>
      </div>
    </Context>
  );
}

export default App;
