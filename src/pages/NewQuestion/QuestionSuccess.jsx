import React from "react";
import { Link } from "react-router-dom";
import { circledCheck } from "../../assets";

const QuestionConfirm = () => {
  return (
    <div className=" flex flex-col items-center justify-center ">
      <div className="mt-12 pb-32 font-roboto text-xl font-bold">
        Tanya Kyai
      </div>
      <img src={circledCheck} />
      <p className="mt-2 text-primary">Pertanyaan Terkirim!</p>

      <Link to="/home">
        <button
          className="mt-[20px] rounded-md bg-primary py-2 px-[60px] text-white "
          // onClick={() => setIsToggled(!isToggled)}
        >
          Home
        </button>
      </Link>
    </div>
  );
};

export default QuestionConfirm;
