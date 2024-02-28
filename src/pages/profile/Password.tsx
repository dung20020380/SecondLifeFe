import { Box, Button, Grid } from "@mui/material";
import {
  HeaderAddress,
  SpanText,
  SpanTextRegister,
  TitleHeader,
  Input,
} from "./Profile.styles";
import { FlexCenter } from "../../theme/icons/theme";
import { Controller, useForm } from "react-hook-form";
import useProfile from "../../api/useProfile";

import { FormValuesPass } from "../../model/changePass";

function Password() {
  const { changePassword } = useProfile();

  const {
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    setValue,
  } = useForm<FormValuesPass>({
    defaultValues: {
      OldPassword: "",
      NewPassword: "",
      ConfirmNewPassword: "",
    },
  });
  function validatePassword(password: string) {
    if (password.length < 8) {
      return "Ít nhất 8 ký tự";
    }

    const hasNumber = /\d/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[^a-zA-Z0-9]/.test(password); // Kiểm tra ký tự đặc biệt

    if (hasNumber && hasLowerCase && hasUpperCase && hasSpecialChar) {
      return true;
    }
    return "Mật khẩu phải chứa ít nhất một ký tự số, một ký tự thường, một ký tự hoa và một ký tự đặc biệt";
  }
  function isPassword(value: any) {
    // Kiểm tra nếu giá trị là số hoặc là địa chỉ email hợp lệ
    if (value.length < 8) return "Ít nhất 8 ký tự";
    if (value === getValues("NewPassword")) {
      return true;
    }
    return "Mật khẩu và mật khẩu xác nhận không khớp.";
  }

  const onSubmit = (data: FormValuesPass) => {
    changePassword.mutate(data);
  };
  return (
    <>
      <Box className="bodyBox" sx={{ width: "100%", marginLeft: "50px" }}>
        <HeaderAddress>
          <FlexCenter justifyContent="space-between" alignItems="baseline">
            <TitleHeader>Thay đổi mật khẩu </TitleHeader>
          </FlexCenter>

          <Grid container spacing={2} marginY={1}>
            <Grid item sm={12}>
              <Grid container>
                <Grid sm={2.5} display={"flex"} alignItems={"center"}>
                  <SpanTextRegister>Mật khẩu hiện tại</SpanTextRegister>
                </Grid>
                <Grid sm={7}>
                  <Controller
                    control={control}
                    name="OldPassword"
                    rules={{
                      required: "Vui lòng nhập mật khẩu",
                      validate: validatePassword,
                    }}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <Input
                        type="password"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        // className="form-control"
                        placeholder="Vui lòng nhập mật khẩu"
                      />
                    )}
                  />
                  <SpanText isCheckValidateUser>
                    {errors?.OldPassword && (
                      <span> &#160; {errors.OldPassword.message}</span>
                    )}
                  </SpanText>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={12}>
              <Grid container>
                <Grid sm={2.5} display={"flex"} alignItems={"center"}>
                  <SpanTextRegister>Mật khẩu mới</SpanTextRegister>
                </Grid>
                <Grid sm={7}>
                  <Controller
                    control={control}
                    name="NewPassword"
                    rules={{
                      required: "Vui lòng nhập mật khẩu mới",
                      minLength: {
                        value: 8,
                        message: "Ít nhất 8 ký tự",
                      },
                      validate: validatePassword,
                    }}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <Input
                        type="password"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        // className="form-control"
                        placeholder="Vui lòng nhập mật khẩu mới"
                      />
                    )}
                  />
                  <SpanText isCheckValidateUser>
                    {errors?.NewPassword && (
                      <span> &#160; {errors.NewPassword.message}</span>
                    )}
                  </SpanText>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={12}>
              <Grid container>
                <Grid sm={2.5} display={"flex"} alignItems={"center"}>
                  <SpanTextRegister>Nhập lại mật khẩu mới</SpanTextRegister>
                </Grid>
                <Grid sm={7}>
                  <Controller
                    control={control}
                    name="ConfirmNewPassword"
                    rules={{
                      required: "Vui lòng nhập lại mật khẩu ",

                      validate: isPassword,
                    }}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <Input
                        type="password"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className="form-control"
                        placeholder="Nhập lại mật khẩu"
                      />
                    )}
                  />

                  <SpanText isCheckValidateUser>
                    {errors?.ConfirmNewPassword && (
                      <span> &#160; {errors.ConfirmNewPassword.message}</span>
                    )}
                  </SpanText>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            variant="outlined"
            style={{
              marginTop: "1rem",
              fontSize: 14,
              float: "right",
              right: "20.8%",
            }}
          >
            Cập nhật
          </Button>
        </HeaderAddress>
      </Box>
    </>
  );
}

export default Password;
