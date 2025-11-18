import axios from "axios";
const Server_address="https://heptagonal-king-subpleural.ngrok-free.dev/"
export const api=axios.create({
    baseURL:Server_address
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