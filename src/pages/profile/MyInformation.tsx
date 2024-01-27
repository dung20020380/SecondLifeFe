import {
  FormControlLabel,
  Grid,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/joy";
// import Button from '@mui/material/Button';
import { useForm, Controller } from "react-hook-form";
import {
  Button,
  CloseImage,
  Input,
  SpanText,
  SpanTextRegister,
  FormRow,
  ModalBody,
  TitleHeader,
} from "./Profile.styles";
import ClearIcon from "@mui/icons-material/Clear";
import DatePicker from "react-datepicker";
import moment from "moment";
import useProfile from "../../api/useProfile";
import { Profile } from "../../model/profile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

type FormValues = {
  email?: string;
  name?: string;
  phone?: string;
  gender?: string;
  birthday?: string;
  address?: string;
};
const MyInformation = () => {
  const { addNoteMutation, data, isLoading } = useProfile();

  useEffect(() => {
    setValue("email", data?.email);
    setValue("name", data?.fullName);
    setValue("phone", data?.phoneNumber);
    setValue("gender", data?.gender);
    setValue("birthday", moment(data?.dateOfBirth).format("DD-MM-YYYY"));
    setValue("address", data?.address);
  }, [data]);

  const {
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    setValue,
  } = useForm<FormValues>({
    defaultValues: {
      email: data?.email,
      name: data?.fullName,
      phone: data?.phoneNumber,
      gender: data?.gender,
      birthday: moment(data?.dateOfBirth).format("DD-MM-YYYY"),
      address: data?.address,
    },
  });

  function isNumberOrEmail(value: any) {
    // Kiểm tra nếu giá trị là số hoặc là địa chỉ email hợp lệ
    if (
      (!isNaN(parseFloat(value)) && isFinite(value)) ||
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    ) {
      return true;
    }
    return "Địa chỉ email hoặc số điện thoại không hợp lệ";
  }
  // function isPassword(value: any) {
  //   // Kiểm tra nếu giá trị là số hoặc là địa chỉ email hợp lệ
  //   if (value.length < 8) return "Ít nhất 8 ký tự";
  //   if (value === getValues("password")) {
  //     return true;
  //   }
  //   return "Mật khẩu và mật khẩu xác nhận không khớp.";
  // }
  function validatePassword(password: string) {
    if (password.length < 8) {
      return "Ít nhất 8 ký tự";
    }

    const hasNumber = /\d/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);

    if (hasNumber && hasLetter) {
      return true;
    }
    return "Mật khẩu phải chứa cả số và chữ";
  }

  const onSubmit = (data: FormValues) => {
    const newObj: Profile = {
      Address: data?.address,
      Gender: data.gender,
      FullName: data.name,
      DateOfBirth: moment(data.birthday, "DD-MM-YYYY").format("YYYY-MM-DD"),
      Email: data.email,
      PhoneNumber: data.phone,
    };
  };

  return (
    <Box className="bodyBox" sx={{ width: "100%", marginLeft: "50px" }}>
      <form
        style={{ display: "flex", justifyContent: "center", flex: "1" }}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <FormRow
          style={{
            display: "flex",
            justifyContent: "center",
            flex: "1",
            userSelect: "none",
          }}
        >
          <Grid
            container
            style={{
              borderRadius: 16,
              backgroundColor: "#ffffff",
            }}
          >
            <TitleHeader>Thay đổi thông tin cá nhân</TitleHeader>
            <Grid container>
              <Grid sm={2} display={"flex"} alignItems={"center"}>
                <SpanTextRegister>Họ và tên:</SpanTextRegister>
              </Grid>
              <Grid sm={10}>
                <Controller
                  control={control}
                  name="name"
                  rules={{
                    required: "Vui lòng nhập tên của bạn",
                  }}
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <Input
                      checkName
                      type="name"
                      value={value}
                      onChange={(e) => onChange(e.target.value)}
                      // className="form-control"
                      placeholder="Họ và tên"
                    />
                  )}
                />
                <SpanText isCheckValidateUser>
                  {errors?.name && <span> &#160; {errors.name.message}</span>}
                </SpanText>
              </Grid>
            </Grid>
            <Grid container>
              <Grid sm={2} display={"flex"} alignItems={"center"}>
                <SpanTextRegister>Số điện thoại:</SpanTextRegister>
              </Grid>
              <Grid sm={10}>
                <Controller
                  control={control}
                  name="phone"
                  rules={{
                    required: "Vui lòng nhập số điện thoại",
                    pattern: {
                      value: /^\d+$/,
                      message: "Số điện thoại không hợp lệ ",
                    },
                    minLength: {
                      value: 10,
                      message: "Số điện thoại trong khoảng 10 - 12 ",
                    },
                    maxLength: {
                      value: 12,
                      message: "Số điện thoại trong khoảng 10 - 12 ",
                    },
                  }}
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <Input
                      checkPhone
                      type="phone"
                      value={value}
                      onChange={(e) => onChange(e.target.value)}
                      className="form-control"
                      placeholder="Số điện thoại"
                    />
                  )}
                />
                <SpanText isCheckValidateUser>
                  {errors?.phone && <span> &#160; {errors.phone.message}</span>}
                </SpanText>
              </Grid>
            </Grid>
            <Grid container>
              <Grid sm={2} display={"flex"} alignItems={"center"}>
                <SpanTextRegister>Email</SpanTextRegister>
              </Grid>
              <Grid sm={10}>
                <Controller
                  control={control}
                  name="email"
                  rules={{
                    required: "Vui lòng nhâp địa chỉ email",
                    // validate: isNumberOrEmail,
                    pattern: {
                      value:
                        /^\d+$/ && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
                      message: "Địa chỉ email không hợp lệ",
                    },
                  }}
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <Input
                      checkEmail
                      value={value}
                      onChange={(e) => onChange(e.target.value)}
                      className="form-control"
                      placeholder="Địa chỉ email"
                    />
                  )}
                />
                <SpanText isCheckValidateUser>
                  {errors?.email && (
                    <span> &#160; {errors.email?.message}</span>
                  )}
                </SpanText>
              </Grid>
            </Grid>
            <Grid container>
              <Grid sm={2} display={"flex"} alignItems={"center"}>
                <SpanTextRegister>Địa chỉ:</SpanTextRegister>
              </Grid>
              <Grid sm={10}>
                <Controller
                  control={control}
                  name="address"
                  rules={{
                    required: "Vui lòng nhập địa chỉ của bạn",
                  }}
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <Input
                      checkName
                      value={value}
                      onChange={(e) => onChange(e.target.value)}
                      // className="form-control"
                      placeholder="Địa chỉ của tôi"
                    />
                  )}
                />
                <SpanText isCheckValidateUser>
                  {errors?.name && <span> &#160; {errors.name.message}</span>}
                </SpanText>
              </Grid>
            </Grid>

            <Grid container>
              <Grid sm={2} display={"flex"} alignItems={"center"}>
                <SpanTextRegister>Giới tính</SpanTextRegister>
              </Grid>
              <Grid sm={10}>
                <Controller
                  control={control}
                  name="gender"
                  defaultValue=""
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <RadioGroup
                      row
                      aria-label="gender"
                      name="gender"
                      value={value}
                      onChange={(e) => onChange(e.target.value)}
                    >
                      <FormControlLabel
                        value="Male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="Female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="Other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  )}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid sm={2} display={"flex"} alignItems={"center"}>
                <SpanTextRegister>Ngày Sinh</SpanTextRegister>
              </Grid>
              <Grid sm={10} display={"flex"} alignItems={"center"}>
                <Controller
                  control={control}
                  name="birthday"
                  defaultValue=""
                  render={({ field: { onBlur, onChange, value } }) => (
                    <DatePicker
                      selected={new Date(moment(value, "DDMMYYYY").format("l"))}
                      onChange={(date) => onChange(date)}
                      showYearDropdown
                      showMonthDropdown
                      dateFormat="dd/MM/yyyy"
                      scrollableYearDropdown
                      yearDropdownItemNumber={40}
                    />
                    // <TextField
                    //   id="date"
                    //   label="Select Date"
                    //   type="date"
                    //   value={value}
                    //   onChange={(e) => {
                    //     console.log("eee", e);
                    //   }}
                    //   InputLabelProps={{
                    //     shrink: true,
                    //   }}
                    // />
                  )}
                />

                <SpanText isCheckValidateUser>
                  {errors?.birthday && (
                    <span> &#160; {errors.birthday?.message}</span>
                  )}
                </SpanText>
              </Grid>
            </Grid>

            <Grid
              sm={12}
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 10,
                position: "relative",
              }}
            >
              <Button type="submit">Save</Button>
            </Grid>
          </Grid>
        </FormRow>
      </form>
    </Box>
  );
};

export default MyInformation;