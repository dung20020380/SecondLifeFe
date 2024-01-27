import axios from "axios";
import { useQuery } from "react-query";

const config = {
    headers: {
        "X-CSRF": "1",
    },
};

const fetchDiscounts = async () => {
    const response = await axios("/api/UserProfile/e773b46c-ce12-442f-9406-c497deaf5042", config);
    return response.data;
};

const discounts = () => {
    const { isLoading, error, data } = useQuery("discounts", fetchDiscounts, {
        retry: false,
    });
    return { isLoading, error, data };
};

export default discounts;