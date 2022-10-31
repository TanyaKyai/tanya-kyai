import { Routes, Route } from "react-router-dom";
import { Button, Card, Navbar } from "./components";
import {
  BathulMasail,
  Login,
  NewPost,
  NewQuestion,
  Notification,
  Profile,
  Splash,
} from "./pages";
// import QuestionConfirm from "./pages/NewQuestion/QuestionConfirm";

const App = () => {
  return (
    <>
      <NewQuestion />
    </>
  );
};

export default App;
