import { useNavigate } from "react-router-dom";

const Missing = () => {
  const navigate = useNavigate();

  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-center font-roboto text-5xl font-bold uppercase text-primary">
        Error 404 <br /> Page Not Found
      </h1>
      <h1 className="mt-4 text-center font-roboto text-xl font-bold uppercase text-primary">
        Mohon login apabila Anda belum login
      </h1>
      <button
        className="mx-auto mt-6 rounded-md bg-primary px-8 py-1 font-roboto text-base font-bold text-white"
        onClick={() => navigate("/home")}
      >
        Home
      </button>
    </section>
  );
};

export default Missing;
