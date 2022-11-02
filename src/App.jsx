import { Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { Button, Card, Navbar } from "./components";

import {
  BathulMasail,
  Home,
  Login,
  NewPost,
  NewQuestion,
  Notification,
  Profile,
  Splash,
} from "./pages";
import QuestionConfirm from "./pages/NewQuestion/QuestionConfirm";

const App = () => {
  return (
    <>
      <GoogleOAuthProvider clientId="262788619795-odstb3g9l2l5i265rkrisqf2m6kd4dl3.apps.googleusercontent.com">
        <Navbar />
        <Routes>
          <Route index path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/new-question" element={<NewQuestion />} />
        </Routes>
      </GoogleOAuthProvider>
    </>
  );
};

export default App;
