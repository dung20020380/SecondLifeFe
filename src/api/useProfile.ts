import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { ImageBase64, Profile } from "../model/profile";
import { useDispatch, useSelector } from "react-redux";
// import {  userState } from "../redux/user/userSlice";
import { dataUser } from "../model/user";
import { FormValuesPass } from "../model/changePass";
import { get, post, put } from ".";
import {toast} from 'react-toastify'
const config = {
    headers: {
        "X-CSRF": "1",
    },
};

const getProfile = async (idUser:String) => {
  const data = await get(`/api/UserProfile/${idUser}`,{})
  return  data;
}
  
const changeProfile = (data: Profile, idUser: string) =>  {
  return(
    put(`/api/UserProfile/${idUser}`, data)
  )
}

const changePass = (data: FormValuesPass, idUser: string) =>  {
  return(
    put(`api/UserProfile/changepassword/${idUser}`, data)
  )
}

const changeImg = (data: ImageBase64, idUser: string) =>  {
  return(
    post(`api/UserProfile/${idUser}`, data)
  )
}

const addArress = (data: {}, idUser: string) =>  {
  return(
    post(`/api/UserProfile/add-new-address-user/${idUser}`, data)
  )
}
  
const DedaultAddrress = (data: {}, idUser: string) =>  {
  return(
    post(`/api/UserProfile/set-addressdefault-user/${idUser}`, data)
  )
}

const useProfile = () => {
  const idUser= useSelector((state:any) => 
    (state.user.user.id)
  )
  const { isLoading, error, data } = useQuery<dataUser>(
    { 
      queryKey:  ["profile",idUser],
      queryFn:() =>  getProfile(idUser),
      enabled: !!idUser,
      retry: false,
    }
  )
  
  const addNoteMutation = useMutation({
    mutationFn:(data:Profile )=> changeProfile(data, idUser), 
    onSuccess: () => {
      toast.success("Thay đổi thành công")
    },
    onError:  () => {
      toast.error("Thay đổi thất bại")
    },
  })

  const changePassword = useMutation({
    mutationFn:(data:FormValuesPass )=> changePass(data, idUser) ,
    onSuccess: () => {
      toast.success("Thay đổi thành công")
    },
    onError:  () => {
      toast.error("Mật khẩu cũ không chính xác")
    },
  })
  const changeImgProfile = useMutation({
    mutationFn:(data:ImageBase64 )=> changeImg(data, idUser) ,
    onSuccess: () => {
      toast.success("Thay đổi thành công")
    },
    onError:  () => {
      toast.error("Thay đổi thất bại")
    },
  })
  const addArressApi = useMutation({
    mutationFn:(data:{} )=> addArress(data, idUser),
    onSuccess: () => {
      toast.success("Thêm địa chỉ thành công")
    },
    onError:  () => {
      toast.error("Thêm địa chỉ thất bại")
    },
  })
  const setDefaultAddrress = useMutation({
    mutationFn:(data:{} )=> DedaultAddrress(data, idUser),
    onSuccess: () => {
      toast.success("Đặt địa chỉ mặc định thành công")
    },
    onError:  () => {
      toast.error("Đặt địa chỉ mặc định thất bại")
    },
  })
  
  return {isLoading, error, data, addNoteMutation, changePassword, changeImgProfile,addArressApi,setDefaultAddrress };
};





export default useProfile;

