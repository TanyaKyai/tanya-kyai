import api from "./baseUrl";

export const getComments = async (setComments) => {
  try {
    const response = await api.get("/comments");
    setComments(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const createComment = async (data, id, comments, setComments) => {
  try {
    const newComment = { ...data, postId: id };
    const response = await api.post("/comments", newComment);
    setComments([...comments, response.data]);
  } catch (error) {
    console.log(error);
  }
};
