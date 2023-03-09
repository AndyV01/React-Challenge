import { useState } from "react";
import { useNavigate } from "react-router-dom";


import "./home.css";

const Home = () => {
  const history = useNavigate();

  const [user, setUser] = useState("");

  const login = () => {
    if (user === "admi@gmail.com") {
      history("adm");
    }
    if (user === "invitado@gmail.com") {
      history("inv");
    }
  };
  login();

  return (
    <div className="appBg">
      <div className="loginForm">
        <h1>Welcome</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setUser(e.target.myEmail.value);
          }}
        >
          <input name="myEmail" required="true" placeholder="enter your email" />


          <button className="butt" type="primary" htmlType="submit" block>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
