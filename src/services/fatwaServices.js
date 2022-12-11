import api from "./baseUrl";

export const getFatwas = async (setFatwas) => {
  try {
    // const response = await api.get("/fatwas");
    // setFatwas(response.data);
  } catch (error) {
    console.log(error);
  }
};
