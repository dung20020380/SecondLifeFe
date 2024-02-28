import axios from 'axios';

const API_URL = 'https://localhost:5173/'

const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    "X-CSRF": "1",
};

const instance = axios.create({
    headers: defaultHeaders,
});

let headers: any = { ...defaultHeaders };

instance.defaults.baseURL = API_URL;

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        console.log("123131312",error)
        //   if (error?.response?.data?.code === 'TOKEN_EXPIRED') {
        //     localStorage.removeItem(LOCAL_STORAGE_KEY_ACCESS_TOKEN);
        //     return history.replace('/auth/login', true);
        //   }
        //   if (error?.response?.data?.code === 'UNAUTHORIZED') {
        //     localStorage.removeItem(LOCAL_STORAGE_KEY_ACCESS_TOKEN);
        //     return history.replace('/auth/login', true);
        //   }

        //   if (error?.response?.status === ResponseCode.FAILED_VALIDATION) {
        //     const errors: Array<any> = Object.values(
        //       error?.response?.data?.error
        //     )[0] as Array<any>;
        //     return Promise.reject(errors[0]);
        //   }
        //   if (error?.response?.status === ResponseCode.INTERNAL_SERVER_ERROR) {
        //     return Promise.reject(error?.response?.data?.error?.message);
        //   }

        //   TODO: refresh token
        //   return Promise.reject(error);

        // return Promise.reject(error?.response?.data?.message);
        return Promise.reject(error);
    }
);

// const refreshToken = async () => {
//   const res = await post('refresh', {});
//   localStorage.setItem(LOCAL_STORAGE_KEY_ACCESS_TOKEN, res.access_token);
// };

export const get = async (path: string, params: any) => {
    // console.log('url', API_URL,"------",instance.defaults.baseURL)
    const res = await instance.get(path, { params });
    return res.data
};

export const post = async (path: string, params: any) => {
    // console.log('API_URL 2 = ', API_URL, instance.defaults.baseURL);
    const res = await instance.post(path, params);
    return res.data
};

export const postFormData = async (path: string, formData: FormData) => {
    const res = await instance.post(path, formData, {
        headers: { ...headers, 'Content-Type': 'multipart/form-data' },
    });
    return res.data
};

export const put = async (path: string, params: any) => {
    const res = await instance.put(path, params);
    return res.data
};

export const putFormData = async (path: string, formData: FormData) => {
    const f = formData;
    f.append('_method', 'PUT');

    const res = await instance.post(path, f, {
        headers: {
            ...headers,
            'Content-Type': 'multipart/form-data',
        },
    });
    return res.data
};

export const del = async (path: string, params: any) => {
    const res = await instance.delete(path, { params });
    return res.data
};
