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
import { LikedVideoProvider } from "./context/likedVideoContext";
import { HistoryProvider } from "./context/historyContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CategoryProvider>
          <LikedVideoProvider>
            <HistoryProvider>
              <WatchLaterProvider>
                <ThemeProvider>
                  <VideoProvider>
                    <SingleVideoProvider>
                      <App />
                    </SingleVideoProvider>
                  </VideoProvider>
                </ThemeProvider>
              </WatchLaterProvider>
            </HistoryProvider>
          </LikedVideoProvider>
        </CategoryProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
