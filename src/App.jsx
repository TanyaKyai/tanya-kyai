import { Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { Navbar } from "./components";
import { BahtsulMasail, Home, Login, NewPost, NewQuestion, Notification, Profile, Splash } from "./pages";
import { ProtectedRoutes, PublicRoutes } from "./routes";

const App = () => {
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
              <Route index path="/home" element={<Home />} />
              <Route path="/bahtsul-masail" element={<BahtsulMasail />} />
              <Route path="/new-question" element={<NewQuestion />} />
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
