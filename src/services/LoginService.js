import { API } from "./API"

export const requestService = (data)=>{
  return  API.post("/auth/request",data);
}
export const passwordService = (data)=>{
  return API.post("/auth/password",data)
}
export const otpService = (data) => {
  return API.post("/auth/otp", data);
};