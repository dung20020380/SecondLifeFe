import axios from "axios";
import { useMutation } from "react-query";

const config = {
    headers: {
        "X-CSRF": "1",
    },
};

const postToken = async () => {
    try {
        const response = await axios.post("/api/Token", {}, config);
        return response.data.AccessToken;
        console.log("Access Token:", response.data.AccessToken);
    } catch (error) {
        throw error;
    }
};

const usePostToken = () => {
    const mutation = useMutation(postToken, {
        retry: false,
    });

    return mutation;
};

export default usePostToken;

