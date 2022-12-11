import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { imgPlaceholder, leftArrow } from "../../assets";
import { createFatwa } from "../../services/fatwaServices";

const BahtsulMasail = ({ setFatwas }) => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    createFatwa(setFatwas, data, navigate);
  };

  // useEffect(() => {
  //   const fileSize = watch(["file"]);
  //   if (!watch("file") || watch("file").length !== 0) {
  //     if (fileSize[0][0].size > 2048000) {
  //       alert("File terlalu besar");
  //       resetField("file");
  //       location.reload();
  //     }
  //   }
  // }, [watch("file")]);

  return (
    <section className="h-full w-full bg-white pb-16">
      <div className="mx-auto px-4 md:w-3/4 lg:w-1/2">
        <div className="flex items-center pt-6">
          <Link to="/home">
            <img src={leftArrow} alt="left-arrow" />
          </Link>
          <h1 className="mx-auto font-roboto text-xl font-bold">Bahtsul Masail</h1>
        </div>
        <form className="mt-10 flex flex-col gap-4 rounded-xl bg-gray px-4 pt-5 pb-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label className="mb-2">Judul *</label>
            <input {...register("judul", { required: true })} className="rounded-2xl py-2 px-4 outline-none" />
            {errors.judul && <span className="mt-2 font-roboto text-red-500">Judul tidak bisa kosong</span>}
          </div>
          <div className="flex flex-col">
            <label className="mb-2">Tema *</label>
            <input {...register("tema", { required: true })} className="rounded-2xl py-2 px-4 outline-none" />
            {errors.tema && <span className="mt-2 font-roboto text-red-500">Tema tidak bisa kosong</span>}
          </div>
          {/* <div className="flex flex-col">
            <label className="mb-2">Keterangan (opsional)</label>
            <textarea {...register("description")} className="h-[100px] rounded-2xl py-2 px-4 outline-none" />
          </div> */}
          <div className="flex flex-col">
            <label className="mb-2">Unggah dokumen</label>
            <div className="flex min-h-[100px] w-full items-center justify-center rounded-2xl bg-white p-7">
              <label htmlFor="file" className="flex cursor-pointer flex-col items-center gap-2 text-[#a9a9a9]">
                <img src={imgPlaceholder} alt="placeholder" className="h-[35px] w-[44px]" />
                {!watch("file") || watch("file").length === 0 ? (
                  <>
                    <p className="mt-5 font-[11px] leading-[12.89px]">Unggah dokumen (maksimum 2 MB)</p>
                  </>
                ) : (
                  <p>{watch("file")[0].name}</p>
                )}
              </label>
              <input {...register("file")} id="file" type="file" className="hidden" />
            </div>
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
