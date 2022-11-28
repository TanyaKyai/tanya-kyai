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
  const [searchResults, setSearchResults] = useState({ post: [], fatwa: [] });
  const [search, setSearch] = useState({ post: "", fatwa: "" });

  const user = JSON.parse(localStorage.getItem("userCredential"));
  const { name } = user;

  const handleTabActive = (item) => {
    setActive(item);
  };

  useEffect(() => {
    getFatwas(setFatwas);
  }, []);

  useEffect(() => {
    const filteredResults = posts.filter((post) => {
      return post.isi?.toLowerCase().includes(search.post.toLowerCase());
      // post.question?.toLowerCase().includes(search.post.toLowerCase())
    });

    setSearchResults((prevState) => ({ ...prevState, post: filteredResults }));
  }, [search.post, posts]);

  useEffect(() => {
    const filteredResults = fatwas.filter((fatwa) => {
      return (
        fatwa.title?.toLowerCase().includes(search.fatwa.toLowerCase()) ||
        fatwa.topic?.toLowerCase().includes(search.fatwa.toLowerCase())
      );
    });

    setSearchResults((prevState) => ({ ...prevState, fatwa: filteredResults }));
  }, [search.fatwa, fatwas]);

  return (
    <section className="mx-auto h-screen overflow-hidden px-4 md:w-3/4 lg:w-1/2">
      <div className="mt-6 flex flex-row items-center justify-between">
        <h1 className="font-roboto text-[18px] leading-5 text-[#535353]">
          <span className="font-bold">hi,</span> {name}
        </h1>
        {active === "Beranda" ? (
          <div className="ml-4 flex flex-1 items-center gap-4 md:flex-[0.5]">
            <form onSubmit={(e) => e.preventDefault()} className="flex-1">
              <input
                type="text"
                className="w-full flex-1 rounded-2xl border-2 border-gray px-2 py-2 text-xs outline-none"
                value={search.post}
                onChange={(e) => setSearch((prevState) => ({ ...prevState, post: e.target.value }))}
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
          <div className="ml-4 flex flex-1 items-center gap-4 md:flex-[0.5]">
            <form onSubmit={(e) => e.preventDefault()} className="flex-1">
              <input
                type="text"
                className="w-full flex-1 rounded-2xl border-2 border-gray px-2 py-2 text-xs outline-none"
                value={search.fatwa}
                onChange={(e) => {
                  setSearch((prevState) => ({ ...prevState, fatwa: e.target.value }));
                }}
              />
            </form>
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
        <PostList posts={searchResults.post} setPosts={setPosts} activeQuestion={activeQuestion} />
      ) : (
        <PerpustakaanFatwa fatwas={searchResults.fatwa} />
      )}
    </section>
  );
};

export default Home;
