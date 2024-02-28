import { useQuery } from "react-query";
import { get } from ".";


const fetchProduct = async () => {
    const response = await get("/api/basecatalog?pageNumber=1&pageSize=3", {});
    return response;
};

const useProductByCatelory = () => {
    const { isLoading, error, data } = useQuery("useProductByCatelory", fetchProduct, {
        retry: false,
    });
    return { isLoading, error, data };
};

export default useProductByCatelory;