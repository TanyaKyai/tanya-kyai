import { Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect, useState } from "react";

import { Navbar } from "./components";
import {
  BahtsulMasail,
  Home,
  Login,
  NewPost,
  NewQuestion,
  Notification,
  Profile,
  QuestionList,
  Splash,
  PostDetail,
} from "./pages";
import { ProtectedRoutes, PublicRoutes } from "./routes";
import { getPosts } from "./services/fetch";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  return (
    <>
      <GoogleOAuthProvider clientId="262788619795-odstb3g9l2l5i265rkrisqf2m6kd4dl3.apps.googleusercontent.com">
        <Routes>
          <Route index path="/" element={<Splash />} />
          <Route element={<PublicRoutes />}>
            <Route index path="/login" element={<Login />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route element={<Navbar />}>
              <Route index path="/home" element={<Home posts={posts} />} />
              <Route path="/new-post" element={<NewPost />} />
              <Route path="/post/:id" element={<PostDetail posts={posts} />} />
              <Route path="/bahtsul-masail" element={<BahtsulMasail />} />
              <Route path="/new-question" element={<NewQuestion />} />
              <Route path="/question-list" element={<QuestionList />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </GoogleOAuthProvider>
    </>
  );
};

export default App;
