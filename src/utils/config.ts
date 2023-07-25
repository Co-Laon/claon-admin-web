import axios from 'axios';

// axios header set 함수
export const axiosSetAuthHeader = (refreshkey: string, token?: string) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
  axios.defaults.headers.refreshkey = refreshkey;
  axios.defaults.headers.common.Origin = process.env.NEXT_PUBLIC_ORIGIN;
};

export const getRefreshToken = async () => {
  try {
    const response = await axios.post('/auth/reissue');
    return {
      accessToken: response.data.accessToken,
      refreshKey: response.data.refreshKey,
    };
  } catch (error: any) {
    throw error.response.data;
  }
};

// axios 디폴트 설정,  url, token 만료 시 자동 갱신에 사용
export const axiosConfig = () => {
  axios.defaults.baseURL =
    process.env.NEXT_PUBLIC_MOCK_SERVER === 'true'
      ? process.env.NEXT_PUBLIC_MOCK_SERVER_API
      : process.env.NEXT_PUBLIC_API;

  axios.interceptors.request.use(
    (config) => {
      return config;
    },
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 40105 && !originalRequest._retry) {
        originalRequest._retry = true;
        const { accessToken, refreshKey } = await getRefreshToken();
        axiosSetAuthHeader(accessToken, refreshKey);
        return axios(originalRequest);
      }
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 40105 && !originalRequest._retry) {
        originalRequest._retry = true;
        const { accessToken, refreshKey } = await getRefreshToken();
        axiosSetAuthHeader(accessToken, refreshKey);
        return axios(originalRequest);
      }
      return Promise.reject(error);
    }
  );
};
