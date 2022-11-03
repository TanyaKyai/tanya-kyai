import axios from "axios";

export const login = async (response, navigate) => {
  try {
    const result = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: {
        Authorization: `Bearer ${response?.access_token}`,
      },
    });

    const userCredential = { ...result.data, role: "user" };
    navigate("/home");

    localStorage.setItem("userCredential", JSON.stringify(userCredential));
  } catch (err) {
    console.log(err);
  }
};
