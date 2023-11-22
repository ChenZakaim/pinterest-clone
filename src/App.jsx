import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ressetDB from "./resetDB";
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<h1>Log In</h1>} />
        <Route path="login" element={<></>} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<></>} />
        <Route path="posts" element={<></>}>
          <Route index element={<></>} />
          <Route path="post/:id" element={<></>} />
        </Route>
        <Route path="albums" element={<></>}>
          <Route index element={<></>} />
          <Route path=":id" element={<></>}>
            <Route path="photo/:id" element={<></>} />
          </Route>
        </Route>
        <Route path="to-do" element={<></>} />
        <Route path="" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
