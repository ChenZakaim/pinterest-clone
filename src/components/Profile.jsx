import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
  const { user, setCurrentUser } = useContext(UserContext);
  function handleChange(e, key) {
    setCurrentUser((prev) => {
      return { ...prev, [key]: e.target.value };
    });
  }
  function submitEditInfoForm() {

    
    alert("changes added successfully");
  }
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitEditInfoForm();
        }}
      >
        <h1>Profile</h1>
        <h4>Username: </h4>
        <span>{user.username}</span>

        <label htmlFor="name">name: </label>
        <input
          onChange={(e) => handleChange(e, "name")}
          type="text"
          id="name"
          value={user.name}
          name="name"
        />
        <br />
        <br />

        <label htmlFor="password">Password: </label>
        <input
          onChange={(e) => handleChange(e, "password")}
          type="text"
          id="password"
          value={user.password}
          name="password"
        />
        <br />
        <br />
        <label htmlFor="email">email: </label>
        <input
          onChange={(e) => handleChange(e, "email")}
          type="text"
          id="email"
          value={user.email}
          name="email"
        />

        <br />
        <br />
        <h4>Adress: </h4>

        <label htmlFor="street">street: </label>
        <input
          onChange={(e) => handleChange(e, "street")}
          type="text"
          id="street"
          value={user.street}
          name="street"
        />
        <br />
        <br />
        <label htmlFor="suite">suite: </label>
        <input
          onChange={(e) => handleChange(e, "suite")}
          type="text"
          id="suite"
          value={user.suite}
          name="suite"
        />
        <br />
        <br />
        <label htmlFor="city">city: </label>
        <input
          onChange={(e) => handleChange(e, "city")}
          type="text"
          id="city"
          value={user.city}
          name="city"
        />
        <br />
        <br />
        <label htmlFor="zipcode">zipcode: </label>
        <input
          onChange={(e) => handleChange(e, "zipcode")}
          type="text"
          id="zipcode"
          value={user.zipcode}
          name="zipcode"
        />
        <br />
        <br />
        <input type="submit" value="add changes" />
      </form>
    </>
  );
}
export default Profile;
