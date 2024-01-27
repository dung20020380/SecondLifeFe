import { Button } from "@mui/material";

export default function Login() {
  return (
    <Button
      href="/bff/login?returnUrl=/"
      variant="outlined"
      size="large"
      color="info"
    >
      Đăng nhập
    </Button>
  );
}
