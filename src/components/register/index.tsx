import { Button } from "@mui/material";

export default function Register() {
  return (
    <Button
      href="/bff/login?returnUrl=/"
      variant="outlined"
      size="large"
      color="info"
    >
      Đăng ký
    </Button>
  );
}
