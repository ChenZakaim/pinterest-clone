// import NavigateButton from "./NavigateButton";
import { NavLink } from "react-router-dom";
function NavigateBur() {
  return (
    <nav>
      <NavLink to="/profile">profile</NavLink>
      <NavLink to="/coments">profile</NavLink>
      <NavLink to="/posts">profile</NavLink>
      {/* <NavLink to="/search">profile</NavLink> */}
      <NavLink to="/home">profile</NavLink>
    </nav>
  );
}
