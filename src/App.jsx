import { Routes, Route, useLocation } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect, useState } from "react";

import { Missing, Navbar } from "./components";
import {
  BahtsulMasail,
  EditPost,
  Home,
  Login,
  NewPost,
  NewQuestion,
  NotificationList,
  Profile,
  QuestionList,
  Splash,
  PostDetail,
} from "./pages";
import { ProtectedRoutes, PublicRoutes } from "./routes";
import { getPosts } from "./services/postServices";
import { getFatwas } from "./services/fatwaServices";
import { UserContextProvider } from "./context/UserContext";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [fatwas, setFatwas] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const location = useLocation();

  useEffect(() => {
    getPosts(setPosts);
    getFatwas(setFatwas);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/new-post") {
      setActiveQuestion("");
    }
  }, [location]);

  return (
    <div className="h-full">
      <GoogleOAuthProvider clientId="262788619795-odstb3g9l2l5i265rkrisqf2m6kd4dl3.apps.googleusercontent.com">
        <UserContextProvider>
          <Routes>
            <Route element={<Navbar />}>
              <Route path="/post/:id" element={<PostDetail posts={posts} setPosts={setPosts} />} />
            </Route>
            <Route element={<PublicRoutes />}>
              <Route index path="/" element={<Splash />} />
              <Route index path="/login" element={<Login />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
              <Route element={<Navbar />}>
                <Route
                  index
                  path="/home"
                  element={
                    <Home
                      posts={posts}
                      setPosts={setPosts}
                      fatwas={fatwas}
                      setFatwas={setFatwas}
                      activeQuestion={activeQuestion}
                    />
                  }
                />
                <Route path="/edit-post/:id" element={<EditPost posts={posts} setPosts={setPosts} />} />
                <Route
                  path="/new-post"
                  element={
                    <NewPost
                      posts={posts}
                      setPosts={setPosts}
                      activeQuestion={activeQuestion}
                      setActiveQuestion={setActiveQuestion}
                    />
                  }
                />
                <Route path="/bahtsul-masail" element={<BahtsulMasail setFatwas={setFatwas} />} />
                <Route path="/new-question" element={<NewQuestion />} />
                <Route path="/question-list" element={<QuestionList setActiveQuestion={setActiveQuestion} />} />
                <Route path="/notification" element={<NotificationList />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Route>
            <Route path="*" element={<Missing />} />
          </Routes>
        </UserContextProvider>
      </GoogleOAuthProvider>
    </div>
  );
};

export default App;
