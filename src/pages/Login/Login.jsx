import { logoGreen, bookGreen } from "../../assets";
import { Button } from "../../components";

import { useGoogleLogin } from "@react-oauth/google";
import { login } from "../../services/login";

const Login = () => {
  const handleLogin = useGoogleLogin({
    onSuccess: (response) => {
      login(response);
    },
  });

  return (
    <section className="relative h-screen w-full">
      <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4">
        <img src={bookGreen} alt="book-logo" className="h-[98px] w-[95px]" />
        <img src={logoGreen} alt="al-bahtsu" className="h-[64px] w-[209px]" />
        <p className="text-[21px] leading-5 text-primary">Tanya Kyai</p>
        <Button styles={`px-8 py-1 rounded-md text-[13px]`} onClick={() => handleLogin()}>
          Login dengan Google
        </Button>
      </div>
    </section>
  );
};

export default Login;
