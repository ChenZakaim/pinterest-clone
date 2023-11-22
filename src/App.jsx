import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import ressetDB from "./resetDB";
import { UserProvider } from "./context/UserContext";
import Login from "./components/login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Albums from "./components/Albums/Albums";
import Photo from "./components/Albums/Photo";

function App() {
  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/*" element={<Header />}>
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="posts" element={<></>}>
              <Route index element={<></>} />
              <Route path="post/:id" element={<></>} />
            </Route>
            <Route path="albums" element={<Albums />}>
              <Route index element={<></>} />
              <Route path=":id" element={<></>}></Route>
            </Route>
            <Route path="photo/:id" element={<Photo />} />
          </Route>
          <Route path="to-do" element={<></>} />
          <Route path="" element={<></>} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
