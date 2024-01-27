import usePostToken from "./api/usePostToken";
import discounts from "./api/getDiscount";

import React, { useEffect } from "react";
import Routes from "./routes/routes";
import "react-datepicker/dist/react-datepicker.css";
export default function App() {
  // const authUser = useAuthUser();
  const getdiscounts = discounts();
  // const { mutate: postTokenMutation, data: token, error } = usePostToken();
  // useEffect(() => {
  //   // Trigger the mutation when the component mounts
  //   postTokenMutation();
  // }, [postTokenMutation]);
  // if (token) {
  //   console.log("Access Token:", token);
  // }
  // if (error) {
  //   console.error("Error fetching token:", error);
  // }
  return (
    <>
      <Routes></Routes>
      {/* <div>
        {authUser.user ? (
          <>{<Logout></Logout>}</>
        ) : (
          <>
            <Login></Login>
          </>
        )}
      </div> */}
    </>
  );
}
