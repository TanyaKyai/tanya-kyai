import { Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { Button, Card, Navbar } from "./components";
import { BathulMasail, Home, Login, NewPost, NewQuestion, Notification, Profile, Splash } from "./pages";

const App = () => {
  return (
    <>
      <GoogleOAuthProvider clientId="262788619795-odstb3g9l2l5i265rkrisqf2m6kd4dl3.apps.googleusercontent.com">
        <Login />
        {/* <Home /> */}
        <Profile />
      </GoogleOAuthProvider>
    </>
  );
};

export default App;
