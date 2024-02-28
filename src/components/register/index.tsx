import { Button } from "@mui/material";

export default function Register() {
  return (
    <Button
      href="/bff/register?returnUrl=/"
      variant="outlined"
      size="large"
      color="info"
    >
      Đăng ký
    </Button>
  );
}
