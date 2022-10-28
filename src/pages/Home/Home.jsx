import { search } from "../../assets";
import Tab from "./Tab";
import PerpustakaanFatwa from "./PerpustakaanFatwa";
import PostList from "./PostList";

import { useEffect, useState } from "react";
import { getFatwas, getPosts } from "../../services/fetch";

const Home = () => {
  const [active, setActive] = useState("Beranda");
  const [posts, setPosts] = useState([]);
  const [fatwas, setFatwas] = useState([]);

  const handleTabActive = (item) => {
    setActive(item);
  };

  useEffect(() => {
    getPosts(setPosts);
    getFatwas(setFatwas);
  }, []);

  return (
    <section className="mx-auto h-screen overflow-hidden px-8 md:w-3/4 lg:w-1/2">
      <div className="mt-12 flex flex-row justify-between">
        <h1 className="font-roboto text-[18px] leading-5 text-[#535353]">
          <span className="font-bold">hi,</span> Fulan
        </h1>
        <img src={search} alt="searchbar" />
      </div>
      <div className="my-4 flex w-full rounded-2xl bg-gray">
        {["Beranda", "Perpustakaan Fatwa"].map((item, index) => (
          <Tab key={index} active={active} onClick={handleTabActive} item={item}>
            {item}
          </Tab>
        ))}
      </div>
      {active === "Beranda" ? <PostList posts={posts} /> : <PerpustakaanFatwa fatwas={fatwas} />}
    </section>
  );
};

export default Home;
