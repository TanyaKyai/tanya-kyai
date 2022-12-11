import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { AiOutlineEdit } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { userLogout } from "../../services/auth";

const Profile = () => {
  const [bio, setBio] = useState("Bio Anda");
  const [isEditing, setIsEditing] = useState(false);

  const user = JSON.parse(Cookies.get("userCredential"));
  const { name, picture } = user;

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsEditing(false);
    setBio(data.bio);
  };

  return (
    <section className="mx-auto w-full px-4 md:w-1/2">
      <h1 className="pt-6 text-center font-roboto text-xl font-bold ">Profile</h1>
      {/* Card */}
      <div className="mt-12 flex flex-col items-center justify-center rounded-3xl bg-gray py-5 shadow-[0_7px_2px_0_rgba(0,0,0,0.1)]">
        <img src={picture} alt="avatar" className="h-[94px] w-[94px] rounded-full" />
        <h2 className="font-roboto text-lg font-bold text-primary">{name}</h2>
        <div className="mt-1 flex items-center justify-center gap-1">
          <p className={`font-roboto text-sm text-black ${isEditing ? "hidden" : "block"}`}>{bio}</p>
          <form onSubmit={handleSubmit(onSubmit)} className={`flex gap-2 ${isEditing ? "block" : "hidden"}`}>
            <input
              type="text"
              className="rounded-xl bg-white p-1 outline-none"
              {...register("bio")}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
            <button className="rounded-xl bg-primary px-4 py-1 font-roboto text-sm font-bold text-white transition-all">
              Selesai
            </button>
          </form>
          <AiOutlineEdit
            className={`cursor-pointer ${isEditing ? "hidden" : "block"}`}
            onClick={() => setIsEditing(true)}
          />
        </div>
        <button
          className="mt-4 rounded-lg bg-primary px-4 py-1 font-roboto text-base font-bold text-white transition-all"
          onClick={() => userLogout(navigate)}
        >
          Logout
        </button>
      </div>
    </section>
  );
};

export default Profile;
