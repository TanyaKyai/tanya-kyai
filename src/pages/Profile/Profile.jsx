const Profile = () => {
  return (
    <section className="mx-auto w-1/2">
      <h1 className="mt-12 text-center font-roboto text-xl font-bold ">Profile</h1>
      {/* Card */}
      <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-3xl bg-gray py-5 shadow-[0_7px_2px_0_rgba(0,0,0,0.1)]">
        <img src="https://i.pravatar.cc/300" alt="avatar" className="h-[94px] w-[94px] rounded-full" />
        <h2 className="font-roboto text-lg font-bold text-primary">John Doe</h2>
        <button className="rounded-lg bg-white px-4 py-1 font-roboto text-xs font-bold text-primary">
          Edit Profile
        </button>
      </div>
    </section>
  );
};

export default Profile;
