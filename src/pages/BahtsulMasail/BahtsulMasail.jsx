import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { leftArrow } from "../../assets";

const BahtsulMasail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className="h-full w-full bg-white pb-14">
      <div className="mx-auto px-8 md:w-3/4 lg:w-1/2">
        <div className="flex items-center pt-12">
          <Link to="/home">
            <img src={leftArrow} alt="left-arrow" />
          </Link>
          <h1 className="mx-auto font-roboto text-base font-bold">Bahtsul Masail</h1>
        </div>
        <form
          className="mt-12 flex flex-col gap-4 rounded-xl bg-gray px-4 pt-9 pb-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            <label className="mb-2">Judul *</label>
            <input {...register("title", { required: true })} className="rounded-2xl py-2 px-4 outline-none" />
            {errors.title && <span className="mt-2 font-roboto text-red-500">Judul tidak bisa kosong</span>}
          </div>
          <div className="flex flex-col">
            <label className="mb-2">Tema *</label>
            <input {...register("topic", { required: true })} className="rounded-2xl py-2 px-4 outline-none" />
            {errors.topic && <span className="mt-2 font-roboto text-red-500">Tema tidak bisa kosong</span>}
          </div>
          <div className="flex flex-col">
            <label className="mb-2">Keterangan (opsional)</label>
            <textarea
              {...register("description", { required: true })}
              className="h-[200px] rounded-2xl py-2 px-4 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2">Unggah dokumen</label>
            <input {...register("description")} className="h-[200px] rounded-2xl py-2 px-4 outline-none" />
          </div>
          <button
            type="submit"
            className="mx-auto mt-6 rounded-md bg-primary px-8 py-1 font-roboto text-base font-bold text-white"
          >
            Simpan
          </button>
        </form>
      </div>
    </section>
  );
};

export default BahtsulMasail;
