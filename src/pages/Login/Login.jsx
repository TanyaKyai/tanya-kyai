import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

import { logoHijau } from "../../assets";
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
      <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
        <img src={logoHijau} alt="book-logo" className="  w-[150px]" />
        <p className="  font-roboto text-[23px] font-bold text-primary">Tanya Kyai</p>
        <p className="mb-5 font-roboto text-[9px] text-primary">
          Powered <span className="font-bold">By LBM PWNU DIY</span>
        </p>
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
