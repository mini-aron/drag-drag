import { Route, Routes } from "react-router-dom";
import Game from "./pages/Game";
import Home from "./pages/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/game" element={<Game />}></Route>
    </Routes>
  );
}

export default App;
