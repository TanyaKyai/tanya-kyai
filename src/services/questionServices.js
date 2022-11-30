import { format } from "date-fns";

import api from "./baseUrl";

export const createQuestion = async (data) => {
  try {
    const datetime = format(new Date(), "dd MMM yyyy p");
    const newQuestion = { ...data, datetime };
    const response = await api.post("/questions", newQuestion);
  } catch (error) {
    console.log(error);
  }
};

export const getQuestions = async (setQuestionsList) => {
  try {
    const response = await api.get("/questions", {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    });
    setQuestionsList(response.data);
  } catch (error) {
    console.log(error);
  }
};
