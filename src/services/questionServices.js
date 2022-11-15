import api from "./baseUrl";

export const createQuestion = async (data) => {
  try {
    const newQuestion = data;
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
