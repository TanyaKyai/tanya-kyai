import axios from "axios";

export const userLogin = async (response, navigate) => {
  try {
    const result = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: {
        Authorization: `Bearer ${response?.access_token}`,
      },
    });

    const userRole = result.data.email === "tanya.kyai.demo@gmail.com" ? "admin" : "user";
    const userCredential = { ...result.data, userRole: userRole };
    navigate("/home");

    localStorage.setItem("userCredential", JSON.stringify(userCredential));
  } catch (err) {
    console.log(err);
  }
};

export const userRole = () => {
  const user = JSON.parse(localStorage.getItem("userCredential"));
  const userRole = user?.userRole;

  return userRole;
};
