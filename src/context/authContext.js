import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";

const InitialAuthData = {
  authData: {},
  authErrorMsg: "",
};
import { useToast } from "./toastContext";

const AuthReducer = (state, { type, payload }) => {
  switch (type) {
    case "SIGN_UP":
      return { ...state, authData: payload };
    case "SIGN_UP_ERROR":
      return { ...state, authErrorMsg: payload };
    case "LOGIN":
      return { ...state, authData: payload };
    case "LOGIN_ERROR":
      return { ...state, authErrorMsg: payload };
    case "REMOVE_ERROR_MSG":
      return { ...state, authErrorMsg: payload };
    case "LOGOUT":
      return { ...state, authData: payload };
    default:
      return state;
  }
};

const AuthContext = createContext(InitialAuthData);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, InitialAuthData);
  const { authData, authErrorMsg } = authState;
  const { addToast } = useToast();

  useEffect(() => {
    if (authErrorMsg) {
      const timeoutID = setTimeout(() => {
        authDispatch({ type: "REMOVE_ERROR_MSG", payload: "" });
      }, 3000);

      return () => clearTimeout(timeoutID);
    }
  }, [authErrorMsg]);

  const signup = async (userDetails) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        email: userDetails.email,
        password: userDetails.password,
      });
      if (response.status === 201) {
        localStorage.setItem("videoToken", response.data.encodedToken);
        authDispatch({ type: "SIGN_UP", payload: response.data.createdUser });
        addToast({ status: "added", msg: "Signed Up" });
      }
    } catch (error) {
      console.error(error);
      if (error.response.status === 422) {
        authDispatch({
          type: "SIGN_UP_ERROR",
          payload: "The email already exists",
        });
      }
    }
  };

  const login = async (userDetails) => {
    try {
      const response = await axios.post("/api/auth/login", {
        email: userDetails.email,
        password: userDetails.password,
      });
      if (response.status === 200) {
        localStorage.setItem("videoToken", response.data.encodedToken);
        authDispatch({ type: "LOGIN", payload: response.data.foundUser });
        addToast({ status: "added", msg: "Logged in" });
      }
    } catch (error) {
      console.error(error.response);
      if (error.response.status === 404) {
        authDispatch({
          type: "LOGIN_ERROR",
          payload: "The email you entered is not Registered",
        });
      } else if (error.response.status === 401) {
        authDispatch({
          type: "LOGIN_ERROR",
          payload: "The credentials you entered are invalid",
        });
      }
    }
  };

  const testLogin = async () => {
    const userEmail = "testuser@gmail.com";
    const userPass = "testuser123";
    try {
      const response = await axios.post("/api/auth/login", {
        email: userEmail,
        password: userPass,
      });
      if (response.status === 200) {
        localStorage.setItem("videoToken", response.data.encodedToken);
        authDispatch({ type: "LOGIN", payload: response.data.foundUser });
        addToast({ status: "added", msg: "Logged in" });
      }
    } catch (error) {
      console.error(error.response);
      if (error.response.status === 404) {
        authDispatch({
          type: "LOGIN_ERROR",
          payload: "The email you entered is not Registered",
        });
      } else if (error.response.status === 401) {
        authDispatch({
          type: "LOGIN_ERROR",
          payload: "The credentials you entered are invalid",
        });
      }
    }
  };

  const logout = () => {
    authDispatch({ type: "LOGOUT", payload: "" });
    localStorage.clear();
    addToast({ status: "removed", msg: "Logged out" });
  };

  return (
    <AuthContext.Provider
      value={{ signup, login, testLogin, logout, authData, authErrorMsg }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
