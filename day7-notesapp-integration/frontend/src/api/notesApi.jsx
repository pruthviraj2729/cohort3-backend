import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export const noteCreateApi = async (data) => {
  const res = await axiosInstance.post("/notes/create", data);

  return res.data;
};

export const getNotes = async () => {
  const res = await axiosInstance.get("/notes/allNotes");

  return res.data.data;
};

// import { axiosInstence } from "../config/axiosInstence"

// export const noteCreateApi = async(data) => {
//     try {
//         const res = await axiosInstence.post('/create', data)
//         console.log(res)
//         return res.data.data
//     } catch (error) {
//         console.log(error)
//     }
// }


// export const getNotes = async() => {
//     try {
//         const res = axiosInstence.get('/notes');
//         return (await res).data.data
//     } catch (error) {
//         console.log(error)
//     }
// }
