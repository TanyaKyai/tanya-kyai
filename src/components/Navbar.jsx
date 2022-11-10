import { NavLink, Outlet } from "react-router-dom";
import { RiHome7Fill } from "react-icons/ri";
import { TbBook } from "react-icons/tb";
import { FiEdit } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { book, create, home, notification, profile } from "../assets";
import { userRole } from "../services/auth";

const userNav = [
  {
    link: "/home",
    name: "Home",
    Img: <RiHome7Fill />,
  },
  {
    link: "/bahtsul-masail",
    name: "Bahtsul Masail",
    Img: <TbBook />,
  },
  {
    link: "/new-question",
    name: "Tanya Kyai",
    Img: <FiEdit />,
  },
  {
    link: "/notification",
    name: "Pemberitahuan",
    Img: <IoNotifications />,
  },
  {
    link: "/profile",
    name: "Profil",
    Img: <CgProfile />,
  },
];

const adminNav = [
  {
    link: "/home",
    name: "Home",
    Img: <RiHome7Fill />,
  },
  {
    link: "/bahtsul-masail",
    name: "Bahtsul Masail",
    Img: <TbBook />,
  },
  {
    link: "/question-list",
    name: "Daftar Pertanyaan",
    Img: <FiEdit />,
  },
  {
    link: "/notification",
    name: "Pemberitahuan",
    Img: <IoNotifications />,
  },
  {
    link: "/profile",
    name: "Profil",
    Img: <CgProfile />,
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="z-50 flex justify-center">
        <div className="fixed bottom-0 flex w-full  justify-evenly rounded-t-3xl bg-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] sm:w-[476px]">
          {userRole() === "admin"
            ? adminNav.map((item, index) => {
                console.log(item.Img);
                return (
                  <NavLink
                    to={item.link}
                    key={index}
                    className={({ isActive }) =>
                      isActive ? "text-primary" : "text-black"
                    }
                  >
                    <button className="flex flex-col items-center justify-center pt-2">
                      {item.Img}
                      <p className="text-[12px]">{item.name}</p>
                    </button>
                  </NavLink>
                );
              })
            : userNav.map((item, index) => (
                <NavLink
                  to={item.link}
                  key={index}
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "text-black"
                  }
                >
                  <button className="flex flex-col items-center justify-center pt-2">
                    {item.Img}
                    <p className="text-[12px]">{item.name}</p>
                  </button>
                </NavLink>
              ))}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
