import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { ThemeProvider } from "./context/themeContext";
import { VideoProvider } from "./context/videoContext";
import { CategoryProvider } from "./context/categoryContext";
import { WatchLaterProvider } from "./context/watchLaterContext";
import { SingleVideoProvider } from "./context/singleVideoContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CategoryProvider>
          <WatchLaterProvider>
            <ThemeProvider>
              <VideoProvider>
                <SingleVideoProvider>
                  <App />
                </SingleVideoProvider>
              </VideoProvider>
            </ThemeProvider>
          </WatchLaterProvider>
        </CategoryProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
