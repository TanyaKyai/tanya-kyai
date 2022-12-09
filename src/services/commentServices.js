import api from "./baseUrl";

export const getComments = async (post_id, setComments) => {
  try {
    const response = await api.get(`/comments_post/${post_id}`, {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    });
    setComments(response.data.data);
  } catch (error) {
    console.log(error);
  }
};

export const createComment = async (data, id, setComments, name, picture) => {
  try {
    const newComment = { ...data, post_id: id, name, picture };
    const response = await api.post("/comments_post", newComment);
    getComments(id, setComments);
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = async (post_id, id, setComments) => {
  try {
    await api.delete(`/comments/${id}`);
    getComments(post_id, setComments);
  } catch (error) {
    console.log(error);
  }
};
