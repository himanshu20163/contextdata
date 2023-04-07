import { useContext } from "react";
import { AuthrizationContext } from "./Context";
import "./Nav.css";

function Nav(props) {
  const { setlogin } = useContext(AuthrizationContext);
  return (
    <div className="nav">
      <div id="title">
        <h2>Geekster</h2>
      </div>
      <div id="menu">
        <a href="#">Home</a>
        <a href="#">Profile</a>
        <a href="#">Products</a>
        <a href="#">Support</a>
        <button
          onClick={() => {
            setlogin(false);
          }}
         style={{backgroundColor:"white"}}
        >
          Logout
        </button>
        <span style={{ marginLeft: "30px", color: "yellow", fontSize: "22px" }}>
          <b></b>
        </span>
      </div>
    </div>
  );
}

export default Nav;