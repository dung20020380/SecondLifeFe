import { FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import { Box } from "@mui/joy";
import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";
import {
  Input,
  SpanText,
  SpanTextRegister,
  FormRow,
  ModalBody,
  TitleHeader,
} from "./Profile.styles";
import DatePicker from "react-datepicker";
import moment from "moment";
import useProfile from "../../api/useProfile";
import { Profile } from "../../model/profile";
import { useEffect } from "react";
import { FlexCenter } from "../../theme/icons/theme";
import { dataUser } from "../../model/user";

type FormValues = {
  email?: string;
  name?: string;
  phone?: string;
  gender?: string;
  birthday?: string;
  address?: string;
};
const MyInformation = ({ dataUser }: { dataUser?: dataUser }) => {
  const { addNoteMutation, data, isLoading } = useProfile();
  console.log("123123123123acb");
  useEffect(() => {
    setValue("email", data?.email);
    setValue("name", data?.fullName);
    setValue("phone", data?.phoneNumber);
    setValue("gender", data?.gender);
    setValue("birthday", moment(data?.dateOfBirth).format("DD-MM-YYYY"));
    setValue("address", dataUser?.addressDefault);
  }, [data]);

  const {
    handleSubmit,
    formState: { errors },
    control,
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

  const onSubmit = (data: FormValues) => {
    const newObj: Profile = {
      Address: data?.address,
      Gender: data.gender,
      FullName: data.name,
      DateOfBirth: moment(data.birthday, "DD-MM-YYYY").format("YYYY-MM-DD"),
      Email: data.email,
      PhoneNumber: data.phone,
    };
    addNoteMutation.mutate(newObj);
  };

  return (
    <Box className="bodyBox" sx={{ width: "100%", marginLeft: "50px" }}>
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
          spacing={1}
          style={{
            borderRadius: 16,
            backgroundColor: "#ffffff",
          }}
        >
          <FlexCenter justifyContent="space-between" alignItems="baseline">
            <TitleHeader
              style={{
                marginTop: 8,
                marginLeft: 8,
              }}
            >
              Thay đổi thông tin cá nhân
            </TitleHeader>
          </FlexCenter>

          <Grid item sm={12}>
            <Grid container>
              <Grid sm={2.5} item display={"flex"} alignItems={"center"}>
                <SpanTextRegister>Họ và tên:</SpanTextRegister>
              </Grid>
              <Grid sm={7} item>
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
          </Grid>
          <Grid item sm={12}>
            <Grid container>
              <Grid sm={2.5} item display={"flex"} alignItems={"center"}>
                <SpanTextRegister>Số điện thoại:</SpanTextRegister>
              </Grid>
              <Grid sm={7} item>
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
          </Grid>
          <Grid item sm={12}>
            <Grid container>
              <Grid sm={2.5} item display={"flex"} alignItems={"center"}>
                <SpanTextRegister>Email</SpanTextRegister>
              </Grid>
              <Grid sm={7} item>
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
                      readOnly
                    />
                  )}
                />
                <SpanText isCheckValidateUser>
                  {errors?.email && (
                    <span> &#160; {errors.email?.message}</span>
                  )}
                </SpanText>
              </Grid>
              {/* <Grid
                sm={1.5}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  justifyContent: "center",
                  margin: " auto",
                }}
              >
                <Button
                  type="submit"
                  color="secondary"
                  variant="outlined"
                  sx={{
                    fontSize: 12,
                  }}
                >
                  Thay đổi
                </Button>
              </Grid> */}
            </Grid>
          </Grid>
          <Grid item sm={12}>
            <Grid container>
              <Grid sm={2.5} item display={"flex"} alignItems={"center"}>
                <SpanTextRegister>Địa chỉ:</SpanTextRegister>
              </Grid>
              <Grid sm={7} item>
                <Controller
                  control={control}
                  name="address"
                  // rules={{
                  //   required: "Vui lòng nhập địa chỉ của bạn",
                  // }}
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <Input
                      checkName
                      value={value}
                      onChange={(e) => onChange(e.target.value)}
                      // className="form-control"
                      placeholder="Địa chỉ của tôi"
                      readOnly
                    />
                  )}
                />
                <SpanText isCheckValidateUser>
                  {errors?.address && (
                    <span> &#160; {errors.address.message}</span>
                  )}
                </SpanText>
              </Grid>
            </Grid>
          </Grid>

          <Grid item sm={12}>
            <Grid container>
              <Grid sm={2.5} item display={"flex"} alignItems={"center"}>
                <SpanTextRegister>Giới tính</SpanTextRegister>
              </Grid>
              <Grid sm={7} item>
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
          </Grid>
          <Grid item sm={12}>
            <Grid container>
              <Grid sm={2.5} item display={"flex"} alignItems={"center"}>
                <SpanTextRegister>Ngày sinh</SpanTextRegister>
              </Grid>
              <Grid sm={7} item alignItems={"center"}>
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
              sm={7}
              item
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 10,
                position: "relative",
                justifyContent: "center",
                margin: "15px auto",
              }}
            >
              <Button
                // onClick={() => console.log("123123")}
                onClick={handleSubmit(onSubmit)}
                variant="contained"
                sx={{
                  fontSize: 14,
                }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </FormRow>
      {/* </form> */}
    </Box>
  );
};

export default MyInformation;
