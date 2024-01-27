import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { get, put } from ".";
import { Profile } from "../model/profile";
import { useDispatch, useSelector } from "react-redux";
import { addId, userState } from "../redux/user/userSlice";
import { dataUser } from "../model/user";

const config = {
    headers: {
        "X-CSRF": "1",
    },
};

const getProfile = async (idUser:String) => {
  const data = await get(`/api/UserProfile/${idUser}`,config)
  return  data
}
  
const changeProfile = (data: Profile) =>  put(`/change-user-info/${data.Email}`, data)


const useProfile = () => {
  const idUser= useSelector((state:any) => (state.user.id))
  const { isLoading, error, data } = useQuery<dataUser>(
    { 
      queryKey:  ["profile",idUser],
      queryFn:() =>  getProfile(idUser),
      enabled: !!idUser,
    }
  )
  
    
  //   ["profile",idUser], () =>  getProfile(idUser), {
  //   retry: false,
  // });
  const addNoteMutation = useMutation({
    mutationFn:(data:Profile)=> changeProfile(data) 
  })
  return {isLoading, error, data,  addNoteMutation };
};





export default useProfile;

