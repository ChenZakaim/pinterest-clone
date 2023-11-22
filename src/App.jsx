import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ressetDB from "./resetDB";

function App() {
  // useEffect(() => {
  //  ressetDB("users");
  // ressetDB("posts");
  // await ressetDB("comments");
  //  ressetDB("albums");
  //  ressetDB("photos");
  // ressetDB("todos");
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<h1>Log In</h1>} />
        <Route path="login" element={<></>} />
        <Route path="register" element={<></>} />
        <Route path="home" element={<></>} />
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
