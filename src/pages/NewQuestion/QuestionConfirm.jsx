import React from "react";
import { circledCheck } from "../../assets";

const QuestionConfirm = () => {
  return (
    <div className=" flex flex-col items-center justify-center ">
      <div className="pt-4 pb-32 font-roboto text-xl font-bold">Tanya Kyai</div>
      <img src={circledCheck} />
      <p className="mt-2 text-primary">Pertanyaan Terkirim!</p>
      <button
        className="mt-[20px] rounded-md bg-primary py-2 px-[60px] text-white "
        // onClick={() => setIsToggled(!isToggled)}
      >
        Home
      </button>
    </div>
  );
};

export default QuestionConfirm;
