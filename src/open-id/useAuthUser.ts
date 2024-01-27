import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { addId, addName } from "../redux/user/userSlice";

interface AuthUser {
    given_name: string | undefined;
    family_name: string | undefined;
    email: string;
    sub: string;
    roles: string[];
    bffLogoutUrl: string;
}

const config = {
    headers: {
        "X-CSRF": "1",
    },
};

export const fetchClaims = async () => {
  const response = await axios.get("/bff/user", config);

  return response.data;
};

// function useClaims() {
//   const { isLoading, error, data } = useQuery("claims", fetchClaims, {
//     retry: false,
//   });
//   return { isLoading, error, data };
// }

export function useAuthUser() {
    const dispatch = useDispatch()
    const { isLoading, error, data } = useQuery({
      queryKey: ["claims"],
      queryFn: () => fetchClaims(),
      onSuccess: (data) => {
        dispatch(addId(data?.find((c:any) => c.type === "sub")?.value))
      }
    });
    
    
    const claims = data as [{ type: string; value: string }];
  
    const [user, setUser] = useState<AuthUser | null>(null);
    let sub = "";
    useEffect(() => {
        if (claims) {
            const given_name = claims.find((c) => c.type === "given_name")?.value ?? "";
            const family_name = claims.find((c) => c.type === "family_name")?.value ?? "";
            const email = claims.find((c) => c.type === "email")?.value ?? "";
            sub = claims.find((c) => c.type === "sub")?.value ?? "";
            const roles = claims.filter((c) => c.type === "role").map((c) => c.value);
            const bffLogoutUrl = claims.find((c) => c.type === "bff:logout_url")?.value ?? "";
            setUser({ given_name, family_name, email, sub, roles, bffLogoutUrl });
            console.log("response1", sub)
            dispatch(addId(sub))
            // dispatch(addName(sub))

        }
    }, [claims]);

    return { isLoading, error, claims, user, sub };
}

