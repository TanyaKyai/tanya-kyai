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
