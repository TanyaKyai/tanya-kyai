import { useEffect, useState } from "react";
import Question from "./Question";
import { getQuestions } from "../../services/questionServices";

const QuestionList = ({ setActiveQuestion }) => {
  const [questionsList, setQuestionsList] = useState([]);

  useEffect(() => {
    getQuestions(setQuestionsList);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center pb-12">
      <h1 className="pt-6 font-roboto text-xl font-bold">Daftar Pertanyaan</h1>
      <div className="mt-12">
        {questionsList.length
          ? questionsList.map((question) => (
              <Question key={question.id} questionItem={question} setActiveQuestion={setActiveQuestion} />
            ))
          : "Belum ada pertanyaan"}
      </div>
    </section>
  );
};

export default QuestionList;
