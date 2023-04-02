import axios from 'axios';

// axios header set 함수
export const axiosSetHeader = (accessToken?: string, refreshToken?: string) => {
  axios.defaults.headers.common['access-token'] = accessToken;
  axios.defaults.headers.common['refresh-token'] = refreshToken;
};

// axios 디폴트 설정,  url, token 만료 시 자동 갱신에 사용
export const axiosConfig = () => {
  axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_API}`;
  axios.interceptors.response.use((response) => {
    if ('access-token' in response.headers) {
      const accessToken = response.headers['access-token'];
      const refreshToken = response.headers['refresh-token'];
      axiosSetHeader(accessToken, refreshToken);
    }
    return response;
  });
};
