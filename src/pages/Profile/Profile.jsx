import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("userCredential"));
  const { name, picture } = user;

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userCredential");
    navigate("/login");
  };

  return (
    <section className="mx-auto w-full px-4 md:w-1/2">
      <h1 className="mt-6 text-center font-roboto text-xl font-bold ">
        Profile
      </h1>
      {/* Card */}
      <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-3xl bg-gray py-5 shadow-[0_7px_2px_0_rgba(0,0,0,0.1)]">
        <img
          src={picture}
          alt="avatar"
          className="h-[94px] w-[94px] rounded-full"
        />
        <h2 className="font-roboto text-lg font-bold text-primary">{name}</h2>
        <button
          className="rounded-lg bg-red-600 px-4 py-1 font-roboto text-base font-bold text-white transition-all"
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      </div>
    </section>
  );
};

export default Profile;
