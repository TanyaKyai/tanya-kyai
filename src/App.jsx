import { Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { Button, Card, Navbar } from "./components";
<<<<<<< HEAD

import {
  BathulMasail,
  Home,
=======
import {
  BathulMasail,
>>>>>>> feats/new-question
  Login,
  NewPost,
  NewQuestion,
  Notification,
  Profile,
  Splash,
} from "./pages";
<<<<<<< HEAD
=======
// import QuestionConfirm from "./pages/NewQuestion/QuestionConfirm";
>>>>>>> feats/new-question

const App = () => {
  return (
    <>
<<<<<<< HEAD
      <GoogleOAuthProvider clientId="262788619795-odstb3g9l2l5i265rkrisqf2m6kd4dl3.apps.googleusercontent.com">
        <Splash />
        <Navbar />
        {/* <Login /> */}
        {/* <Home /> */}
        <Profile />
      </GoogleOAuthProvider>
=======
      <NewQuestion />
>>>>>>> feats/new-question
    </>
  );
};

export default App;
