import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import ressetDB from "./resetDB";
import { UserProvider } from "./context/UserContext";
import Login from "./components/login";
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
      <UserProvider>
        <Routes>
          <Route index element={<Login />} />
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
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
