import { book, create, home, notification, profile } from "../assets";

const Navbar = () => {
  return (
    <nav className="z-50 flex justify-center">
      <div className="fixed bottom-0 flex w-full  justify-evenly rounded-t-3xl bg-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] sm:w-[476px]">
        <button className="flex flex-col items-center justify-center pt-2">
          <img className="h-[25px] w-[25px]" src={home} />
          <p className="text-[12px]">Home</p>
        </button>
        <button className="flex flex-col items-center justify-center pt-2">
          <img className="h-[25px] w-[25px]" src={book} />
          <p className="text-[12px]">Bahtsul Masail</p>
        </button>
        <button className="flex flex-col items-center justify-center pt-2">
          <img className="h-[25px] w-[25px]" src={create} />
          <p className="text-[12px]">Tanya Kyai</p>
        </button>
        <button className="flex flex-col items-center justify-center pt-2">
          <img className="h-[25px] w-[25px]" src={notification} />
          <p className="text-[12px]">Pemberitahuan</p>
        </button>
        <button className="flex flex-col items-center justify-center pt-2">
          <img className="h-[25px] w-[25px]" src={profile} />
          <p className="text-[12px]">Profil</p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
