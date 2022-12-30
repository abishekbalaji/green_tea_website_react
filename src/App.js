import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

import "./App.scss";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
