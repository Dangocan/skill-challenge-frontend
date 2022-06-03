import axios from "axios";
import { IUser } from "../../interfaces/IUser";

const axiosInstance = axios.create({
  baseURL: `${process.env.API_URL || "http://localhost"}:${
    process.env.API_PORT || "3000"
  }`,
});

axiosInstance.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjNWYwNmEyZi0wNjUxLTRlNDItOGEwMC03Njg0ZDlhMWRkZDkiLCJlbWFpbCI6ImRhbmlsbzNAdGVzdGUuY29tIiwiaWF0IjoxNjU0MjI1MzE0LCJleHAiOjE2NTQyNTQxMTR9.3emrs3nXn0UBxY_Nw5OVa7DNs_U48RaslGZuXsM3_z4";

const placeGetAll = async () => {
  // setLoading(true);
  try {
    const userApiResponse = await axiosInstance.get("/place");
    return userApiResponse.data;
  } catch (error: any) {
    console.log({
      message: "Falha ao carregar lista de locais",
      error: error.message,
    });
  }
  //setLoading(false);
};

const placeGetById = async (id: string) => {
  // setLoading(true);
  try {
    const userApiResponse = await axiosInstance.get(`/place/${id}`);
    return userApiResponse.data;
  } catch (error: any) {
    console.log({
      message: "Falha ao carregar local",
      error: error.message,
    });
  }
  //setLoading(false);
};
const api = { placeGetAll, placeGetById };

export default api;
