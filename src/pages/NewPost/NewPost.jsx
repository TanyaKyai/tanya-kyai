import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { leftArrow, imgPlaceholder } from "../../assets";
import { createPost, uploadImage } from "../../services/postServices";

const NewPost = ({ activeQuestion, setActiveQuestion, posts, setPosts }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();
  const { isi: pertanyaan } = activeQuestion || {};

  const navigate = useNavigate();

  const onSubmit = (data) => {
    createPost(data, posts, setPosts, pertanyaan);
    uploadImage(data);
    setActiveQuestion(null);

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
        {pertanyaan?.length > 0 ? (
          <div className="mt-12">
            <h2 className="mx-auto font-roboto text-sm font-semibold">Pertanyaan</h2>
            <p className="mt-4 rounded-2xl bg-white py-4 px-4 outline-none">
              {pertanyaan?.length > 0 ? pertanyaan : ""}
            </p>
          </div>
        ) : (
          ""
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 flex flex-col gap-4">
          <div className="flex flex-col gap-1 rounded-2xl bg-white p-4">
            <textarea
              {...register("isi", { required: true })}
              className="h-[200px] resize-none py-2 px-4 outline-none"
              placeholder="Isi post"
            />
            {errors.isi && <span className="mt-2 p-4 font-roboto text-red-500">Konten tidak bisa kosong</span>}
            <div className="flex w-full items-center justify-start px-4">
              <label htmlFor="imageUpload" className="flex cursor-pointer items-center gap-2 text-[#a9a9a9]">
                <img src={imgPlaceholder} alt="placeholder" />
                {!watch("gambar") || watch("gambar").length === 0 ? (
                  <>
                    <p>Unggah gambar</p>
                  </>
                ) : (
                  <p>{watch("gambar")[0].name}</p>
                )}
              </label>
              <input {...register("gambar")} id="imageUpload" type="file" className="hidden" />
            </div>
          </div>
          <button
            type="submit"
            className="mx-auto mt-2 rounded-md bg-[#DBDBDB] px-8 py-1 font-roboto text-base font-bold"
          >
            Post
          </button>
        </form>
        {/* {image ? <img src={image} width="450" /> : ""} */}
      </div>
    </section>
  );
};

export default NewPost;
