import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

import { logoHijau } from "../../assets";
import { userLogin } from "../../services/auth";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = useGoogleLogin({
    onSuccess: (response) => {
      userLogin(response, navigate);
      console.log(response);
    },
  });

  return (
    <section className="h-screen w-full">
      <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4">
        <img src={logoHijau} alt="book-logo" className=" mb-12 w-[70px]" />

        <button
          className="rounded-md bg-primary px-8 py-1 font-roboto text-[13px] font-bold text-white"
          onClick={() => handleLogin()}
        >
          Login dengan Google
        </button>
      </div>
    </section>
  );
};

export default Login;
