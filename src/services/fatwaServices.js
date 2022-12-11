import api from "./baseUrl";

export const getFatwas = async (setFatwas) => {
  try {
    const response = await api.get("/file-upload");
    setFatwas(response.data.data);
  } catch (error) {
    console.log(error);
  }
};

export const createFatwa = async (setFatwas, data, navigate) => {
  try {
    const fd = new FormData();

    for (const [key, value] of Object.entries(data)) {
      if (typeof value === "object") {
        fd.append(key, value[0]);
      } else {
        fd.append(key, value);
        console.log(value);
      }
    }

    const response = await api.post("/file-upload", fd, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    getFatwas(setFatwas);
    navigate("/home");
  } catch (error) {
    console.log(error);
  }
};

export const deleteFatwa = async (id, setFatwas) => {
  try {
    const response = api.delete(`file-upload/${id}`);
    response.then(function () {
      getFatwas(setFatwas);
    });
  } catch (error) {
    console.log(error);
  }
};
