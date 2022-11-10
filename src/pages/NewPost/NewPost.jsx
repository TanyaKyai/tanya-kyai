import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { leftArrow } from "../../assets";
import { createPost } from "../../services/crudServices";

const NewPost = ({ posts, setPosts }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createPost(data, posts, setPosts);
    navigate("/home");
    reset();
  };

  return (
    <section className="h-screen w-full bg-gray">
      <div className="mx-auto px-8 md:w-3/4 lg:w-1/2">
        <div className="flex items-center pt-12">
          <Link to="/home">
            <img src={leftArrow} alt="left-arrow" />
          </Link>
          <h1 className="mx-auto font-roboto text-base font-bold">Kirim Post</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-12 flex flex-col gap-4">
          <div className="flex flex-col">
            <input
              {...register("title", { required: true })}
              className="rounded-2xl py-2 px-4 outline-none"
              placeholder="Judul post"
            />
            {errors.title && <span className="mt-2 font-roboto text-red-500">Judul tidak bisa kosong</span>}
          </div>
          <div className="flex flex-col">
            <textarea
              {...register("body", { required: true })}
              className="h-[200px] rounded-2xl py-2 px-4 outline-none"
              placeholder="Isi post"
            />
            {errors.body && <span className="mt-2 font-roboto text-red-500">Konten tidak bisa kosong</span>}
          </div>
          <button
            type="submit"
            className="mx-auto mt-6 rounded-md bg-[#DBDBDB] px-8 py-1 font-roboto text-base font-bold"
          >
            Post
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewPost;
