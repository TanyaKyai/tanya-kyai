import api from "./baseUrl";

export const getFatwas = async (setFatwas) => {
  try {
    const response = await api.get("/fatwas");
    setFatwas(response.data.data);
  } catch (error) {
    console.log(error);
  }
};

export const createFatwa = async (setFatwas) => {
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
        "content-type": "multipart/form-data",
      },
    });
    console.log(response);
    getFatwas(setFatwas);
  } catch (error) {
    console.log(error);
  }
};
