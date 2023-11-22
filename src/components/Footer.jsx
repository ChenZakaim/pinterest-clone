import { NavLink, Outlet } from "react-router-dom";

function Footer() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <nav>
        <NavLink to="/profile">profile</NavLink>
        <NavLink to="/coments">profile</NavLink>
        <NavLink to="/posts">profile</NavLink>
        {/* <NavLink to="/search">profile</NavLink> */}
        <NavLink to="/home">profile</NavLink>
      </nav>
    </>
  );
}
export default Footer;
