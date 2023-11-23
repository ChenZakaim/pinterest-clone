import { NavLink, Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <NavLink to="/profile">profile</NavLink>- - -
        <NavLink to="/coments">coments</NavLink>- - -
        <NavLink to="/posts">posts</NavLink>- - -
        {/* <NavLink to="/search">profile</NavLink> */}
        <NavLink to="/albums">albums</NavLink>- - -
        <NavLink to="/todos">todos</NavLink>- - -
        <NavLink to="/home">home</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default Header;
