import api from "./baseUrl";

export const getPosts = async (setPosts) => {
  try {
    const response = await api.get("/posts");
    setPosts(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const getFatwas = async (setFatwas) => {
  try {
    const response = await api.get("/fatwas");
    setFatwas(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const postQuestions = async (data) => {
  try {
    const newQuestion = data;
    const response = await api.post("/questions", newQuestion);
    console.log(response.data);
    console.log("data: ", data);
    // setQuestions(response.data);
  } catch (error) {
    console.log(error);
  }
};
