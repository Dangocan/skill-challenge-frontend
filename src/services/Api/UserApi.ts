import axios from "axios";
import { IUser } from "../../interfaces/IUser";

const axiosInstance = axios.create({
  baseURL: `${process.env.API_URL || "http://localhost"}:${
    process.env.API_PORT || "3000"
  }`,
});

// Alter defaults after axiosInstance has been created
//axiosInstance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const login = async (params: Omit<IUser, "name">) => {
  // setLoading(true);
  try {
    const userApiResponse = await axiosInstance.post("/auth/login", {
      ...params,
    });
    return userApiResponse.data;
  } catch (error: any) {
    console.log({
      message: "Falha ao efetuar o login",
      error: error.message,
    });
  }
  //setLoading(false);
};

const userCreate = async (params: IUser) => {
  // setLoading(true);
  try {
    const userApiResponse = await axiosInstance.post("/user", {
      ...params,
    });
    return userApiResponse.data;
  } catch (error: any) {
    console.log({
      message: "Falha ao criar novo usuario",
      error: error.message,
    });
  }
  //setLoading(false);
};

const api = { userCreate, login };

export default api;
