import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/user/userSlice";
import { AuthUser } from "../model/authUser";



const config = {
    headers: {
        "X-CSRF": "1",
    },
};

export const fetchClaims = async () => {
    const response = await axios.get("/bff/user", config);

    return response.data;
};

export function useAuthUser() {
    const dispatch = useDispatch()
    const { isLoading, error, data } = useQuery({
      queryKey: ["claims"],
      queryFn: () => fetchClaims(),
      onSuccess: (data) => {
        const claims = data as [{ type: string; value: string }];
        if (claims) {
          const given_name = claims.find((c) => c.type === "name")?.value ?? "";
          const family_name = claims.find((c) => c.type === "family_name")?.value ?? "";
          const email = claims.find((c) => c.type === "email")?.value ?? "";
          id = claims.find((c) => c.type === "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")?.value ?? "";
          const roles = claims.filter((c) => c.type === "role").map((c) => c.value);
          const bffLogoutUrl = claims.find((c) => c.type === "bff:logout_url")?.value ?? "";
          const userNewData = {
            given_name, family_name, email, id, roles, bffLogoutUrl
          }
          console.log("userNewData",userNewData)
          setUser({ given_name, family_name, email, id, roles, bffLogoutUrl });
          dispatch(addUser(userNewData))
      }
      }
    });

    const [user, setUser] = useState<AuthUser | null>(null);


    let id = "";
    // useEffect(() => {
    //     if (claims) {
    //         const given_name = claims.find((c) => c.type === "given_name")?.value ?? "";
    //         const family_name = claims.find((c) => c.type === "family_name")?.value ?? "";
    //         const email = claims.find((c) => c.type === "email")?.value ?? "";
    //         sub = claims.find((c) => c.type === "sub")?.value ?? "";
    //         const roles = claims.filter((c) => c.type === "role").map((c) => c.value);
    //         const bffLogoutUrl = claims.find((c) => c.type === "bff:logout_url")?.value ?? "";
    //         setUser({ given_name, family_name, email, sub, roles, bffLogoutUrl });
    //         dispatch(addId(sub))
    //     }
    // }, []);

    return { isLoading, error, user, id };
}


