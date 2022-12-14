import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { leftArrow } from "../../assets";
import { editPost } from "../../services/postServices";

const EditPost = ({ posts, setPosts }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { id } = useParams();

  const post = posts.find((post) => post.id.toString() === id);
  const { isi } = post || {};

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    editPost(id, setPosts);
    navigate("/home");
  };

  return (
    <section className="min-h-screen w-full bg-gray">
      <div className="mx-auto px-8 md:w-3/4 lg:w-1/2">
        <div className="flex items-center pt-6">
          <Link to="/home">
            <img src={leftArrow} alt="left-arrow" />
          </Link>
          <h1 className="mx-auto font-roboto text-base font-bold">Kirim Post</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 flex flex-col gap-4">
          <div className="flex flex-col gap-1 rounded-2xl bg-white p-4">
            <textarea
              {...register("isi", { required: true })}
              className="h-[200px] resize-none outline-none"
              placeholder="Isi post"
              value={isi}
            />
            {errors.isi && <span className="mt-2 p-4 font-roboto text-red-500">Konten tidak bisa kosong</span>}
          </div>
          <button
            type="submit"
            className="mx-auto mt-2 rounded-md bg-[#DBDBDB] px-8 py-1 font-roboto text-base font-bold"
          >
            Post
          </button>
        </form>
      </div>
    </section>
  );
};
export default EditPost;
