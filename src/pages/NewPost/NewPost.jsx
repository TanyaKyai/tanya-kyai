import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { leftArrow } from "../../assets";
import { createPost } from "../../services/crudServices";

const NewPost = ({ activeQuestion, setActiveQuestion, posts, setPosts }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { question } = activeQuestion || {};

  const navigate = useNavigate();

  const onSubmit = (data) => {
    createPost(data, posts, setPosts, question);
    setActiveQuestion(null);
    navigate("/home");
    reset();
  };

  return (
    <section className="min-h-screen w-full bg-gray">
      <div className="mx-auto px-8 md:w-3/4 lg:w-1/2">
        <div className="flex items-center pt-12">
          <Link to="/home">
            <img src={leftArrow} alt="left-arrow" />
          </Link>
          <h1 className="mx-auto font-roboto text-base font-bold">Kirim Post</h1>
        </div>
        {activeQuestion?.question?.length > 0 ? (
          <div className="mt-12">
            <h2 className="mx-auto font-roboto text-sm font-semibold">Pertanyaan</h2>
            <p className="mt-4 rounded-2xl bg-white py-4 px-4 outline-none">
              {activeQuestion?.question?.length > 0 ? activeQuestion.question : ""}
            </p>
          </div>
        ) : (
          ""
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-12 flex flex-col gap-4">
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
