import axios from "axios";
const SERVER_ADDRESS=import.meta.env.VITE_SERVER_ADDRESS as string;
export const api=axios.create({
    baseURL:SERVER_ADDRESS
})

api.interceptors.request.use((config)=>{
    const token=localStorage.getItem("token");
    if (token){
        config.headers = config.headers ?? {};
        config.headers.Authorization=`Bearer ${token}`;
    }
    return config;
})

api.interceptors.response.use((response)=>response,(error)=>{
    if (error.response&& error.response.status===401){
        localStorage.removeItem("token");
        window.location.href="/login";
    }
    return Promise.reject(error);
})