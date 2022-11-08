import { useEffect, useState } from "react";
import Question from "./Question";
import { getQuestions } from "../../services/crudServices";

const QuestionList = () => {
  const [questionsList, setQuestionsList] = useState([]);

  useEffect(() => {
    getQuestions(setQuestionsList);
  }, []);

  return (
    <div className=" flex flex-col items-center justify-center ">
      <h1 className="mt-12  pb-8 font-roboto text-xl font-bold">Daftar Pertanyaan</h1>

      <div>
        {questionsList.length
          ? questionsList.map((question) => <Question key={question.id} questionItem={question} />)
          : "Belum ada pertanyaan"}
      </div>
    </div>
  );
};

export default QuestionList;
