import axios from "axios";
import Cookies from "js-cookie";

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

    Cookies.set("userCredential", JSON.stringify(userCredential), { expires: 7 });
  } catch (err) {
    console.log(err);
  }
};

export const userLogout = (navigate) => {
  Cookies.remove("userCredential");
  navigate("/login");
};

export const userRole = () => {
  const user = JSON.parse(Cookies.get("userCredential"));
  const userRole = user?.userRole;

  return userRole;
};
