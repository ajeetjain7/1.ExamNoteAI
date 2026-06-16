import { serverURL } from "../config.js"
import { setUserData } from "../redux/userSlice.js"
import axios from "axios"

const api = axios.create({
  baseURL: serverURL,
  withCredentials: true,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    }
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      localStorage.removeItem("token")
    }
    return Promise.reject(error)
  }
)

export const getCurrentUser = async (dispatch) => {
     try {
        console.log("API called")
        const result = await api.get("/api/user/currentuser")
        dispatch(setUserData(result.data))
     } 
     catch (error) {
        console.log("User not authenticated or session expired", error.response?.status)
     }
}

export const generateNotes = async (payload) => {
    try {
        const result = await api.post("/api/notes/genrate-notes" , payload)
        console.log(result.data)
        return result.data
    } 
    catch (error) {
        console.log(error.response?.data || error.message)
        throw error
    }
}

export const downloadPdf = async (result) => {
    try {
        const response = await api.post("/api/pdf/generate-pdf", { result }, {
            responseType: "blob",
        })

        const blob = new Blob([response.data], {
            type: "application/pdf",
        });

        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "ExamNotesAI.pdf";
        link.click();

        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error("PDF download error:", error.response?.data || error.message);
        throw new Error("PDF download failed");
    }
}