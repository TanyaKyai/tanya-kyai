import api from "./baseUrl";

export const getPosts = async (setPosts) => {
  try {
    const response = await api.get("/posts");
    setPosts(response.data.data);
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (data, posts, setPosts, question) => {
  try {
    const newPost = { isi: data.isi, tanya: question ? question : null };
    const response = await api.post("/posts", newPost, {
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
    setPosts([...posts, response.data.data]);
    getPosts(setPosts);
  } catch (error) {
    console.log(error);
  }
};

export const uploadImage = async (data) => {
  try {
    const fd = new FormData();
    fd.append("gambar", data.gambar[0]);
    console.log("Gambar: ", fd.get("gambar"));

    // const response = await api.post("/upload-file", fd, {
    //   headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    // });

    // console.log(response);
  } catch (error) {}
};

export const deletePost = async (id, setPosts, navigate) => {
  try {
    await api.delete(`/posts/${id}`);
    getPosts(setPosts);
    navigate("/home");
  } catch (error) {}
};
