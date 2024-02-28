import axios from "axios";
import { useQuery } from "react-query";
import { get } from ".";

const config = {
    headers: {
        "X-CSRF": "1",
    },
};

const fetchProduct = async () => {
    const response = await get("/api/basecatalog?pageNumber=1&pageSize=3", {});
    return response;
};

const listproduct = () => {
    const { isLoading, error, data } = useQuery("listproduct", fetchProduct, {
        retry: false,
    });
    return { isLoading, error, data };
};

export default listproduct;