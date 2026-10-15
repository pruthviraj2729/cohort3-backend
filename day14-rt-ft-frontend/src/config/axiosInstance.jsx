import axios from "axios";
import { useAuthContext } from "../module/auth/context/AuthProvider";

export default function useApi () {

    const authContext = useAuthContext()

    const AxiosInstanse = axios.create({
        baseURL: "http://localhost:5173/api",
        withCredentials: true ,
    })

    AxiosInstanse.interceptors.request.use(config => {
       if(authContext.accessToken) {
         config.headers.Authorization = `Bearer ${authContext.accessToken}`
       }
       return config
    })

    AxiosInstanse.interceptors.response.use(
        response => response,
        async(error) => {
            if(error.response?.status === 401) {
                const res = await  axios.post("http://localhost:5173/api/auth/refresh-token")
            

                authContext.setAccessToken(res.data.accessToken);

                error.config.headers.Authorization = `Bearer ${res.data.accessToken}`
                
                return AxiosInstanse(error.config)

            }
             return Promise.reject(error)
        } 
    )

    return AxiosInstanse
}


// export default function 