import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Home from "./pages/Home/Home";

import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import Authentication from "./pages/Authentication/Authentication";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase";
import { setCurrentUser } from "./store/user/userActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/auth" element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
