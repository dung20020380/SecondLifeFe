import { useSelector } from "react-redux";

export default function Logout() {
  const authUser = useSelector((state: any) => state.user);
  const bffLogoutUrl = authUser?.bffLogoutUrl;
  return (
    <a
      style={{
        textDecoration: "none",
      }}
      href={bffLogoutUrl ? bffLogoutUrl : "/bff/logout"}
    >
      Đăng xuất
    </a>
  );
}
