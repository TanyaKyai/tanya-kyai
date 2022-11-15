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

export const createPost = async (data, posts, setPosts, question) => {
  try {
    const newPost = { ...data, question };
    console.log(newPost);
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
