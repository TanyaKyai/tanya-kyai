import { useForm } from "react-hook-form";
import { useState } from "react";
import QuestionSuccess from "./QuestionSuccess";
import { createQuestion } from "../../services/crudServices";

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
          <div className="pt-6 text-center font-roboto text-xl font-bold">
            Tanya Kyai
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-12 flex flex-col gap-4"
          >
            <div className="flex flex-col">
              <textarea
                className="h-[200px] rounded-2xl bg-gray py-2 px-4 outline-none"
                type="text"
                placeholder="Isi pertanyaan"
                {...register("question", { required: true })}
              />
              {errors.question && (
                <span className="mt-2 font-roboto text-red-500">
                  Pertanyaan tidak bisa kosong
                </span>
              )}
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
