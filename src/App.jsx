import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import ressetDB from "./resetDB";
import { UserProvider } from "./context/UserContext";
import Login from "./components/login";
import Register from "./components/Register";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route>
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
          </Route>
          <Route path="to-do" element={<></>} />
          <Route path="" element={<></>} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
