import { searchImage, plus } from "../../assets";
import Tab from "./Tab";
import PerpustakaanFatwa from "./PerpustakaanFatwa";
import PostList from "./PostList";
import { getFatwas } from "../../services/postServices";
import { userRole } from "../../services/auth";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ activeQuestion, posts, setPosts }) => {
  const [active, setActive] = useState("Beranda");
  const [fatwas, setFatwas] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const user = JSON.parse(localStorage.getItem("userCredential"));
  const { name } = user;

  const handleTabActive = (item) => {
    setActive(item);
  };

  useEffect(() => {
    getFatwas(setFatwas);
  }, []);

  return (
    <section className="mx-auto h-screen overflow-hidden px-4 md:w-3/4 lg:w-1/2">
      <div className="mt-6 flex flex-row items-center justify-between">
        <h1 className="font-roboto text-[18px] leading-5 text-[#535353]">
          <span className="font-bold">hi,</span> {name}
        </h1>
        {active === "Beranda" ? (
          <div className="flex flex-[0.5] items-center gap-4">
            <form onSubmit={(e) => e.preventDefault()} className="flex-1">
              <input
                type="text"
                className="w-full flex-1 rounded-2xl border-2 border-gray px-2 py-2 text-xs outline-none"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  console.log(search);
                }}
              />
            </form>
            <div className="h-[16px] w-[16px]">
              <img src={searchImage} alt="searchbar" className="h-full w-full object-contain" />
            </div>
            {userRole() === "admin" ? (
              <Link to="/new-post">
                <div className="h-[16px] w-[16px]">
                  <img src={plus} alt="add-post" className="h-full w-full object-contain" />
                </div>
              </Link>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div className="flex items-center justify-end gap-4">
            <div className="h-[16px] w-[16px]">
              <img src={searchImage} alt="searchbar" className="h-full w-full object-contain" />
            </div>
            {userRole() === "admin" ? (
              <Link to="/bahtsul-masail">
                <div className="h-[16px] w-[16px]">
                  <img src={plus} alt="add-post" className="h-full w-full object-contain" />
                </div>
              </Link>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
      <div className="mt-4 flex w-full rounded-2xl bg-gray">
        {["Beranda", "Perpustakaan Fatwa"].map((item, index) => (
          <Tab key={index} active={active} onClick={handleTabActive} item={item}>
            {item}
          </Tab>
        ))}
      </div>
      {active === "Beranda" ? (
        <PostList posts={posts} setPosts={setPosts} activeQuestion={activeQuestion} />
      ) : (
        <PerpustakaanFatwa fatwas={fatwas} />
      )}
    </section>
  );
};

export default Home;
