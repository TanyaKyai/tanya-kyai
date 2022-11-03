import { Link, Outlet } from "react-router-dom";

import { book, create, home, notification, profile } from "../assets";
import { userRole } from "../services/auth";

const userNav = [
  {
    link: "/home",
    name: "Home",
    img: home,
  },
  {
    link: "/bahtsul-masail",
    name: "Bahtsul Masail",
    img: book,
  },
  {
    link: "/new-question",
    name: "Tanya Kyai",
    img: create,
  },
  {
    link: "/notification",
    name: "Pemberitahuan",
    img: notification,
  },
  {
    link: "/profile",
    name: "Profil",
    img: profile,
  },
];

const adminNav = [
  {
    link: "/home",
    name: "Home",
    img: home,
  },
  {
    link: "/bahtsul-masail",
    name: "Bahtsul Masail",
    img: book,
  },
  {
    link: "/question-list",
    name: "Daftar Pertanyaan",
    img: create,
  },
  {
    link: "/notification",
    name: "Pemberitahuan",
    img: notification,
  },
  {
    link: "/profile",
    name: "Profil",
    img: profile,
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="z-50 flex justify-center">
        <div className="fixed bottom-0 flex w-full  justify-evenly rounded-t-3xl bg-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] sm:w-[476px]">
          {userRole() === "admin"
            ? adminNav.map((item, index) => (
                <Link to={item.link} key={index}>
                  <button className="flex flex-col items-center justify-center pt-2">
                    <img className="h-[25px] w-[25px]" src={item.img} />
                    <p className="text-[12px]">{item.name}</p>
                  </button>
                </Link>
              ))
            : userNav.map((item, index) => (
                <Link to={item.link} key={index}>
                  <button className="flex flex-col items-center justify-center pt-2">
                    <img className="h-[25px] w-[25px]" src={item.img} />
                    <p className="text-[12px]">{item.name}</p>
                  </button>
                </Link>
              ))}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
