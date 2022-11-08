import { Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect, useState } from "react";

import { Missing, Navbar } from "./components";
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
  NewFatwa,
} from "./pages";
import { ProtectedRoutes, PublicRoutes } from "./routes";
import { getPosts } from "./services/crudServices";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  return (
    <>
      <GoogleOAuthProvider clientId="262788619795-odstb3g9l2l5i265rkrisqf2m6kd4dl3.apps.googleusercontent.com">
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route index path="/" element={<Splash />} />
            <Route index path="/login" element={<Login />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route element={<Navbar />}>
              <Route index path="/home" element={<Home posts={posts} setPosts={setPosts} />} />
              <Route path="/new-post" element={<NewPost posts={posts} setPosts={setPosts} />} />
              <Route path="/post/:id" element={<PostDetail posts={posts} />} />
              <Route path="/bahtsul-masail" element={<BahtsulMasail />} />
              <Route path="/new-fatwa" element={<NewFatwa />} />
              <Route path="/new-question" element={<NewQuestion />} />
              <Route path="/question-list" element={<QuestionList />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Route>
          <Route path="*" element={<Missing />} />
        </Routes>
      </GoogleOAuthProvider>
    </>
  );
};

export default App;
