import axios from "axios";

// axios 생성
const request = axios.create({
  baseURL: "https://frontend.tabling.co.kr",
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
request.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
request.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
