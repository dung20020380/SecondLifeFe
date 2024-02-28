import { HeaderAddress, TitleHeader } from "./Profile.styles";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Controller, useForm } from "react-hook-form";
import { DividerCol, FlexCenter, styledTheme } from "../../theme/icons/theme";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/user/userSlice";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  city: string;
  district: string;
  commune: string;
  addressDetail: string;
};

function Address({ addArressApi }: { addArressApi: (data: {}) => void }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.user);
  console.log("idUser", user);

  const {
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    watch,
  } = useForm<FormValues>({
    defaultValues: {},
  });

  const filter = watch();

  const handleDefaultAddress = () => {
    dispatch(
      addUser({
        ...user,
        address:
          "Số 27, Ngách 83/51 Ngõ 83 Đường Tân Triều Xã Tân Triều, Huyện Thanh Trì, Hà Nội",
      })
    );
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit = (data: FormValues) => {
    const uploadData = {
      ...data,
      district: data.district.slice(data.district.indexOf(":") + 1),
      city: data.city.slice(data.city.indexOf(":") + 1),
      commune: data.commune.slice(data.commune.indexOf(":") + 1),
    };
    const returnData = `${uploadData.addressDetail}, ${uploadData.commune}, ${uploadData.district}, ${uploadData.city}`;
    console.log("data12312312312312", returnData);
    addArressApi({
      address: returnData,
    });
  };

  const getProvinces = async () => {
    const res = await axios.get("https://vapi.vnappmob.com/api/province/");
    return res.data.results as Array<any>;
  };

  const { data: provincesData } = useQuery({
    queryKey: ["getProvinces"],
    queryFn: () => getProvinces(),
  });

  const getDistrict = async (code: number) => {
    const res = await axios.get(
      `https://vapi.vnappmob.com/api/province/district/${code}`
    );

    return res.data.results as Array<any>;
  };

  const getCommune = async (code: number) => {
    const res = await axios.get(
      `https://vapi.vnappmob.com/api/province/ward/${code}`
    );

    return res.data.results as Array<any>;
  };

  const { data: districsData } = useQuery({
    queryKey: ["getDistricts", filter.city],
    queryFn: () =>
      getDistrict(Number(filter.city.slice(0, filter.city.indexOf(":")))),
    enabled: !!filter.city,
  });

  const { data: communeData } = useQuery({
    queryKey: ["getDistricts", filter.district],
    queryFn: () =>
      getCommune(
        Number(filter.district.slice(0, filter.district.indexOf(":")))
      ),
    enabled: !!filter.district,
  });
  return (
    <Box className="bodyBox" sx={{ width: "100%", marginLeft: "50px" }}>
      <HeaderAddress>
        <FlexCenter justifyContent="space-between" alignItems="baseline">
          <TitleHeader>Địa chỉ của tôi</TitleHeader>
          <Button variant="contained" onClick={handleClickOpen}>
            <AddIcon />
            <p
              style={{
                fontSize: 14.5,
              }}
            >
              Thêm địa chỉ mới
            </p>
          </Button>
        </FlexCenter>
        <Dialog open={open} onClose={handleClose} fullWidth>
          <DialogTitle
            sx={{
              fontSize: 18,
              fontWeight: 600,
              color: styledTheme.primary,
            }}
          >
            Thêm địa chỉ mới
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <Controller
                  control={control}
                  name="name"
                  defaultValue=""
                  render={({ field: { onBlur, onChange, value } }) => (
                    <TextField
                      autoFocus
                      required
                      margin="dense"
                      id="name"
                      name="name"
                      value={value}
                      onChange={(e) => onChange(e.target.value)}
                      label="Họ và tên"
                      fullWidth
                      variant="outlined"
                      className="w-1/2"
                    />
                  )}
                />
              </Grid>
              <Grid item sm={6}>
                <Controller
                  control={control}
                  name="phone"
                  defaultValue=""
                  render={({ field: { onBlur, onChange, value } }) => (
                    <TextField
                      required
                      margin="dense"
                      id="phone"
                      name="phone"
                      label="Số điện thoại"
                      type="phone"
                      value={value}
                      onChange={(e) => onChange(e.target.value)}
                      fullWidth
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
            </Grid>

            <Controller
              control={control}
              name="city"
              defaultValue=""
              render={({ field: { onBlur, onChange, value } }) => (
                <FormControl
                  fullWidth
                  sx={{
                    margin: " 6px 0 5px 0",
                  }}
                >
                  <InputLabel id="demo-simple-select-label">
                    Tỉnh/thành phố
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Tỉnh/thành phố"
                    onChange={(e) => onChange(e.target.value)}
                  >
                    {provincesData?.map((item: any) => (
                      <MenuItem
                        value={`${item?.province_id}:${item?.province_name}`}
                      >
                        {item?.province_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />

            <Controller
              control={control}
              name="district"
              defaultValue=""
              render={({ field: { onBlur, onChange, value } }) => (
                <FormControl
                  fullWidth
                  sx={{
                    margin: "5px 0",
                  }}
                >
                  <InputLabel id="demo-simple-select-label">
                    Quận/huyện
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Quận/huyện"
                    onChange={(e) => onChange(e.target.value)}
                  >
                    {districsData?.map((item: any) => (
                      <MenuItem
                        value={`${item?.district_id}:${item?.district_name}`}
                      >
                        {item?.district_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
            <Controller
              control={control}
              name="commune"
              defaultValue=""
              render={({ field: { onBlur, onChange, value } }) => (
                <FormControl
                  fullWidth
                  sx={{
                    margin: "5px 0 2px 0",
                  }}
                >
                  <InputLabel id="demo-simple-select-label">
                    Phường/xã
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Phường/xã"
                    onChange={(e) => onChange(e.target.value)}
                  >
                    {communeData?.map((item: any) => (
                      <MenuItem value={`${item?.ward_id}:${item?.ward_name}`}>
                        {item?.ward_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />

            {/* <TextField
              required
              margin="dense"
              id="district"
              name="district"
              label="Quận/huyện"
              fullWidth
              variant="outlined"
            /> */}
            {/* <TextField
              required
              margin="dense"
              id="commune"
              name="commune"
              label="Phường/xã"
              fullWidth
              variant="outlined"
            /> */}

            <Controller
              control={control}
              name="addressDetail"
              defaultValue=""
              render={({ field: { onBlur, onChange, value } }) => (
                <FormControl fullWidth>
                  <TextField
                    required
                    margin="dense"
                    id="addressDetail"
                    name="addressDetail"
                    label="Số nhà - đường"
                    fullWidth
                    variant="outlined"
                    onChange={(e) => onChange(e.target.value)}
                  />
                </FormControl>
              )}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              variant="contained"
              sx={{
                fontSize: 12,
              }}
            >
              Trở lại
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                fontSize: 12,
              }}
              onClick={handleSubmit(onSubmit)}
            >
              Xác nhận
            </Button>
          </DialogActions>
        </Dialog>
        <FlexCenter
          justifyContent="space-between"
          style={{
            padding: " 20px 0",
            borderBottom: "1px solid #807f7f",
          }}
        >
          <FlexCenter
            flexColumn
            justifyContent="start"
            alignItems="start"
            style={{
              maxWidth: "70%",
            }}
          >
            <p
              style={{
                display: "flex",
                fontSize: 16,
                margin: "5px 0",
              }}
            >
              Lê Hữu Dũng
              <DividerCol color="#161515" height="20px"></DividerCol> 0374188281
            </p>
            <p
              style={{
                maxWidth: "60%",
                fontWeight: 300,
              }}
            >
              Số 27, Ngách 83/51 Ngõ 83 Đường Tân Triều Xã Tân Triều, Huyện
              Thanh Trì, Hà Nội
            </p>
          </FlexCenter>
          <FlexCenter flexColumn justifyContent="end" alignItems="end">
            <Button
              variant="text"
              style={{
                marginBottom: "1rem",
                fontSize: 14,
              }}
            >
              Cập nhật
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              style={{
                fontSize: 14,
              }}
              onClick={handleDefaultAddress}
            >
              Thiết lập mặc định
            </Button>
          </FlexCenter>
        </FlexCenter>
      </HeaderAddress>
      {/* <MainAddress>

      </MainAddress> */}
    </Box>
  );
}

export default Address;
