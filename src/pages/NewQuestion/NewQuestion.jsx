import { useForm } from "react-hook-form";
import { useState } from "react";
import QuestionSuccess from "./QuestionSuccess";
import { postQuestions } from "../../services/fetch";

const NewQuestion = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => {
    postQuestions(data);
    setIsToggled(true);
  };
  const [isToggled, setIsToggled] = useState(false);

  // console.log(watch("question"));

  const handleSuccess = () => {
    handleSubmit(onSubmit);
    setIsToggled(true);
  };

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
