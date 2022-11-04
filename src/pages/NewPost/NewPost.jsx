import { Link } from "react-router-dom";

import { leftArrow } from "../../assets";

const NewPost = () => {
  return (
    <section className="mx-auto h-screen overflow-hidden px-8 md:w-3/4 lg:w-1/2">
      <div className="mt-12 flex items-center justify-between">
        <Link to="/home">
          <img src={leftArrow} alt="left-arrow" />
        </Link>
        <h1 className="font-roboto text-base font-bold">Kirim Post</h1>
        <button className="rounded-md bg-[#DBDBDB] px-3 py-1 font-roboto text-base font-bold">Post</button>
      </div>
    </section>
  );
};

export default NewPost;
