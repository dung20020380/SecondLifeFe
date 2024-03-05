 import { useQuery } from "react-query";
import { get } from ".";


 const getDetailCategory = async () => {
     const response = await get("/api/category", {});
     return response;
 };

 const useAddProduct = () => {
    const { isLoading, error, data } = useQuery(
        { 
        queryKey:  ["useAddProduct"],
        queryFn:() =>  getDetailCategory(),
        retry: false,
        }
    )
    return { isLoading, error, data };
 };

 export default useAddProduct;
