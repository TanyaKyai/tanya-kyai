import { useForm } from "react-hook-form";
import { useState } from "react";
import QuestionSuccess from "./QuestionSuccess";
import { createQuestion } from "../../services/fetch";

const NewQuestion = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    createQuestion(data);
    setIsToggled(true);
  };
  const [isToggled, setIsToggled] = useState(false);

  return (
    <section>
      {!isToggled ? (
        <div className=" flex flex-col items-center justify-center ">
          <div className="pt-4 pb-8 font-roboto text-xl font-bold">Tanya Kyai</div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start justify-center">
            <label className="block">Pertanyaan</label>
            <textarea
              className="h-[200px] w-[340px] rounded-md bg-gray p-1"
              type="text"
              {...register("question", { required: true })}
            />
            <button
              className="mt-[20px] rounded-md bg-primary py-2 px-[152px] text-white "
              onClick={() => handleSubmit()}
              type="submit"
            >
              Kirim
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
