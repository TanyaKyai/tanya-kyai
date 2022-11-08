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

export const createPost = async (data, posts, setPosts) => {
  try {
    const newPost = data;
    const response = await api.post("/posts", newPost);
    setPosts([...posts, response.data]);
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (id, posts, setPosts) => {
  try {
    await api.delete(`/posts/${id}`);
    const postList = posts.filter((post) => post.id !== id);
    setPosts(postList);
  } catch (error) {}
};

export const createQuestion = async (data) => {
  try {
    const newQuestion = data;
    const response = await api.post("/questions", newQuestion);
    console.log(response.data);
    // setQuestions(response.data);
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
