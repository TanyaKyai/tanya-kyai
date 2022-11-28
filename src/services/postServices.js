import api from "./baseUrl";

export const getPosts = async (setPosts) => {
  try {
    const response = await api.get("/posts", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Credentials": "*",
        // "Access-Control-Allow-Headers": "Content-Type",
      },
    });
    setPosts(response.data.data);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const getFatwas = async (setFatwas) => {
  try {
    const response = await api.get("/fatwas");
    // setFatwas(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (data, posts, setPosts, question) => {
  try {
    const newPost = { ...data, question };
    const response = await api.post("/posts", newPost);
    setPosts([...posts, response.data]);
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (id, setPosts, navigate) => {
  try {
    await api.delete(`/posts/${id}`);
    getPosts(setPosts);
    navigate("/home");
  } catch (error) {}
};
