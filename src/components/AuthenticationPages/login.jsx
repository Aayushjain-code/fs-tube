import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const Login = () => {
  // const { login, testLogin } = useAuth();

  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState({ isError: false, text: "" });
  const [toggleShowPassword, setToggleShowPassword] = useState(true);

  // useEffect(() => {
  // 	const timeOutId = setTimeout(() => {
  // 		setError({ isError: false, text: '' })
  // 	}, 3000)
  // 	return () => clearTimeout(timeOutId)
  // }, [error])

  const loginHandler = (e) => {
    e.preventDefault();
    if (!userDetails.email || !userDetails.password) {
      setError({ isError: true, text: "Please enter all the fields" });
    } else if (!userDetails.email.includes("@")) {
      setError({ isError: true, text: "Invalid Email-Id" });
    } else {
      // login(userDetails)
      setUserDetails({ email: "", password: "" });
    }
  };

  return (
    <main className="main">
      <div className="wrapper login-wrapper">
        <h2>Login</h2>
        <form>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your email"
              value={userDetails.email}
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
            ></input>
          </div>
          <div className="input-box">
            {toggleShowPassword ? (
              <i
                className="fas fa-eye icon"
                onClick={() => setToggleShowPassword(!toggleShowPassword)}
              ></i>
            ) : (
              <i
                className="fas fa-eye-slash icon"
                onClick={() => setToggleShowPassword(!toggleShowPassword)}
              ></i>
            )}

            <input
              type={toggleShowPassword ? "password" : "text"}
              placeholder="Create password"
              value={userDetails.password}
              onChange={(e) =>
                setUserDetails({ ...userDetails, password: e.target.value })
              }
            ></input>
          </div>
          <div className="button" onClick={(e) => loginHandler(e)}>
            Login Now
          </div>
          <div className="button">Test Login</div>
          <div className="text">
            <h3>
              Not having an account? <Link to="/signup"> Signup now </Link>{" "}
            </h3>
          </div>
          <div className="text">
            <h3>
              Back to HomePage <Link to="/"> HomePage </Link>{" "}
            </h3>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
