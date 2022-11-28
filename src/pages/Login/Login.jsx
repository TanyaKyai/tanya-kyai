import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

import { logoGreen, bookGreen, logoHijau } from "../../assets";
import { Button } from "../../components";
import { userLogin } from "../../services/auth";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = useGoogleLogin({
    onSuccess: (response) => {
      userLogin(response, navigate);
    },
  });

  return (
    <section className="h-screen w-full">
      <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4">
        <img src={logoHijau} alt="book-logo" className=" mb-12 w-[150px]" />

        <Button
          styles={`px-8 py-1 rounded-md text-[13px]`}
          onClick={() => handleLogin()}
        >
          Login dengan Google
        </Button>
      </div>
    </section>
  );
};

export default Login;
