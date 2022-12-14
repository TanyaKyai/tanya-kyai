import { useForm } from "react-hook-form";
import { useState } from "react";
import QuestionSuccess from "./QuestionSuccess";
import { createQuestion } from "../../services/questionServices";

const NewQuestion = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createQuestion(data);
    setIsToggled(true);
  };
  const [isToggled, setIsToggled] = useState(false);

  return (
    <section>
      {!isToggled ? (
        <div className="mx-auto px-4 md:w-3/4 lg:w-1/2">
          <div className="pt-6 text-center font-roboto text-xl font-bold">Tanya Kyai</div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-12 flex flex-col gap-4">
            <div className="flex flex-col">
              <textarea
                className="h-[200px] rounded-2xl bg-gray py-2 px-4 outline-none"
                type="text"
                placeholder="Isi pertanyaan"
                {...register("isi", { required: true })}
              />
              {errors.isi && <span className="mt-2 font-roboto text-red-500">Pertanyaan tidak bisa kosong</span>}
              <span className="mt-4 mb-3 text-[10px]">Ketentuan pengiriman pertanyaan</span>

              <ul className=" list-decimal pl-4 text-justify text-[10px]">
                <li>
                  Nama penanya akan tampil secara anonim, pihak LBM PWNU DIY selaku penjawab pertanyaan tidak akan
                  mengetahui identitas penanya.
                </li>
                <li>
                  Setiap akun tanyakyai.id dapat memberikan tanggapan pada kolom komentar setiap jawaban dan postingan
                  dari Admin tanyakyai.id. Nama pemberi tanggapan (komentar) akan muncul sesuai dengan akun google yang
                  digunakan.
                </li>
                <li>
                  Setiap pertanyaan akan dijawab dalam kurun waktu 3 - 7 hari setelah pertanyaan diajukan melalui fitur
                  pertanyaan ini. Mohon rutin membuka aplikasi untuk memantau jawaban atas pertanyaan yang telah
                  diajukan.
                </li>
              </ul>
            </div>
            <button
              className="mx-auto mt-2 rounded-md bg-primary px-8 py-1 font-roboto text-base font-bold text-white"
              onClick={() => handleSubmit()}
              type="submit"
            >
              Kirim Pertanyaan
            </button>
          </form>
        </div>
      ) : (
        <QuestionSuccess />
      )}
    </section>
  );
};

export default NewQuestion;
