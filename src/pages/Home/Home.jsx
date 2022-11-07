import { search, plus } from "../../assets";
import Tab from "./Tab";
import PerpustakaanFatwa from "./PerpustakaanFatwa";
import PostList from "./PostList";
import { getFatwas } from "../../services/fetch";
import { userRole } from "../../services/auth";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ posts, setPosts }) => {
  const [active, setActive] = useState("Beranda");
  const [fatwas, setFatwas] = useState([]);
  const user = JSON.parse(localStorage.getItem("userCredential"));
  const { name, picture } = user;
  const handleTabActive = (item) => {
    setActive(item);
  };

  useEffect(() => {
    getFatwas(setFatwas);
  }, []);

  return (
    <section className="mx-auto h-screen overflow-hidden px-8 md:w-3/4 lg:w-1/2">
      <div className="mt-12 flex flex-row justify-between">
        <h1 className="font-roboto text-[18px] leading-5 text-[#535353]">
          <span className="font-bold">hi,</span> {name}
        </h1>
        <div className="flex gap-4">
          <div className="h-[24px] w-[24px]">
            <img
              src={search}
              alt="searchbar"
              className="h-full w-full object-contain"
            />
          </div>
          {userRole() === "admin" ? (
            <Link to="/new-post">
              <div className="h-[24px] w-[24px]">
                <img
                  src={plus}
                  alt="add-post"
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="my-4 flex w-full rounded-2xl bg-gray">
        {["Beranda", "Perpustakaan Fatwa"].map((item, index) => (
          <Tab
            key={index}
            active={active}
            onClick={handleTabActive}
            item={item}
          >
            {item}
          </Tab>
        ))}
      </div>
      {active === "Beranda" ? (
        <PostList posts={posts} setPosts={setPosts} />
      ) : (
        <PerpustakaanFatwa fatwas={fatwas} />
      )}
    </section>
  );
};

export default Home;
