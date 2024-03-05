import { useMutation, useQuery } from "react-query";
import { get } from ".";
import { useState } from "react";


const fetchProduct = async (page: number) => {
    const response = await get(`/api/basecatalog?pageNumber=${page}&pageSize=3`, {});
    return response;
};



const useProductByCatelory = () => {
    const [page, handleApiChangePage] = useState(1)
    const { isLoading, error, data } = useQuery(
        { 
          queryKey:  ["useProductByCatelory", page],
          queryFn:() =>  fetchProduct(page),
          retry: false,
        }
    )
    // const handleChangePageMutaion = useMutation({
    //     mutationFn: (page:number)=> handleChangePage(page),
    // })
    return { isLoading, error, data, handleApiChangePage };
};

export default useProductByCatelory;