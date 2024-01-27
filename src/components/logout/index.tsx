import { useAuthUser } from "../../open-id/useAuthUser";

export default function Logout() {
  const authUser = useAuthUser();
  const bffLogoutUrl = authUser?.user?.bffLogoutUrl;
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
