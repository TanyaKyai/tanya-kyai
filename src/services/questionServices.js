import { format } from "date-fns";

import api from "./baseUrl";

export const createQuestion = async (data) => {
  try {
    const newDate = format(new Date(), "dd MMM yyyy p");
    const newQuestion = { ...data, newDate };
    const response = await api.post("/questions", newQuestion);
  } catch (error) {
    console.log(error);
  }
};

export const getQuestions = async (setQuestionsList) => {
  try {
    const response = await api.get("/questions");
    setQuestionsList(response.data);
  } catch (error) {
    console.log(error);
  }
};
