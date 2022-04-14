import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const Signup = () => {
  // const { signup } = useAuth()
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: true,
  });

  const [error, setError] = useState({ isError: false, text: "" });

  const [toggleShowPassword, setToggleShowPassword] = useState(true);
  const [toggleShowConfirmPass, setToggleShowConfirmPass] = useState(true);

  // useEffect(() => {
  // 	const timeOutId = setTimeout(() => {
  // 		setError({ isError: false, text: '' })
  // 	}, 3000)
  // 	return () => clearTimeout(timeOutId);
  // }, [error])

  const submitHandler = (e) => {
    e.preventDefault();
    const passwordValidation = /^(?=.*\d)(?=.*[a-z]).{5,}$/;

    if (
      !userDetails.firstName ||
      !userDetails.lastName ||
      !userDetails.email ||
      !userDetails.password ||
      !userDetails.confirmPassword ||
      !userDetails.terms
    ) {
      setError({ isError: true, text: "Please Enter all the Fields!!" });
    } else if (!userDetails.email.includes("@")) {
      setError({ isError: true, text: "Invalid Email-Id" });
    } else if (!userDetails.password.match(passwordValidation)) {
      setError({
        isError: true,
        text: "The password must be alphanumberic and atleast 5 characters long!!",
      });
    } else if (userDetails.password !== userDetails.confirmPassword) {
      setError({
        isError: true,
        text: "Password and Confirm Password Not Match!!",
      });
    } else if (!userDetails.terms) {
      setError({ isError: true, text: "Please accept terms and conditions!!" });
    } else {
      setUserDetails({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: true,
      });
    }
  };
  return (
    <main className="main">
      <div className="wrapper">
        {error && <p className="error">{error.text}</p>}
        <h2>Sign-Up</h2>
        <form>
          <div className="input-box">
            <input
              value={userDetails.firstName}
              onChange={(e) =>
                setUserDetails({ ...userDetails, firstName: e.target.value })
              }
              name="first-name"
              type="text"
              placeholder="Enter your firstName"
            ></input>
          </div>
          <div className="input-box">
            <input
              value={userDetails.lastName}
              onChange={(e) =>
                setUserDetails({ ...userDetails, lastName: e.target.value })
              }
              name="last-name"
              type="text"
              placeholder="Enter your lastName"
            ></input>
          </div>
          <div className="input-box">
            <input
              value={userDetails.email}
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
              type="text"
              placeholder="Enter your email"
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
              value={userDetails.password}
              onChange={(e) =>
                setUserDetails({ ...userDetails, password: e.target.value })
              }
              placeholder="Create password"
            ></input>
          </div>
          <div className="input-box">
            {toggleShowConfirmPass ? (
              <i
                className="fas fa-eye icon"
                onClick={() => setToggleShowConfirmPass(!toggleShowConfirmPass)}
              ></i>
            ) : (
              <i
                className="fas fa-eye-slash icon"
                onClick={() => setToggleShowConfirmPass(!toggleShowConfirmPass)}
              ></i>
            )}
            <input
              value={userDetails.confirmPassword}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  confirmPassword: e.target.value,
                })
              }
              type={toggleShowConfirmPass ? "password" : "text"}
              placeholder="Confirm password"
            ></input>
          </div>

          <button className="button" onClick={(e) => submitHandler(e)}>
            {" "}
            Signup
          </button>
          <div className="text">
            <h3>
              Already have an account? <Link to="/login"> Login now </Link>{" "}
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

export default Signup;
