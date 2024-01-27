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

type FormValues = {
  name: string;
  email: string;
  phone: string;
  city: string;
  district: string;
  commune: string;
  addressDetail: string;
};

function Address() {
  const [open, setOpen] = React.useState(false);

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getProvinces = async () => {
    const res = await axios.get("https://provinces.open-api.vn/api/p/");

    return res.data;
  };

  const { data: provincesData } = useQuery({
    queryKey: ["getProvinces"],
    queryFn: () => getProvinces(),
  });

  const getDistrict = async (code: number) => {
    const res = await axios.get(
      `https://provinces.open-api.vn/api/p/${code}/?depth=2`
    );

    return res.data;
  };

  const getCommune = async (code: number) => {
    const res = await axios.get(
      `https://provinces.open-api.vn/api/d/${code}/?depth=2`
    );

    return res.data;
  };

  const { data: districsData } = useQuery({
    queryKey: ["getDistricts", filter.city],
    queryFn: () => getDistrict(Number(filter.city)),
    enabled: !!filter.city,
  });

  const { data: communeData } = useQuery({
    queryKey: ["getDistricts", filter.district],
    queryFn: () => getCommune(Number(filter.district)),
    enabled: !!filter.district,
  });
  return (
    <Box className="bodyBox" sx={{ width: "100%", marginLeft: "50px" }}>
      <HeaderAddress>
        <TitleHeader>Địa chỉ của tôi</TitleHeader>
        <Button variant="contained" onClick={handleClickOpen}>
          <AddIcon />
          Thêm địa chỉ mới
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Thêm địa chỉ mới</DialogTitle>
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
              name="phone"
              defaultValue=""
              render={({ field: { onBlur, onChange, value } }) => (
                <TextField
                  required
                  margin="dense"
                  id="name"
                  name="email"
                  label="Email Address"
                  type="email"
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              )}
            />
            <Controller
              control={control}
              name="city"
              defaultValue=""
              render={({ field: { onBlur, onChange, value } }) => (
                <FormControl fullWidth>
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
                      <MenuItem value={item?.code}>{item?.name}</MenuItem>
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
                <FormControl fullWidth>
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
                    {districsData?.districts?.map((item: any) => (
                      <MenuItem value={item?.code}>{item?.name}</MenuItem>
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
                <FormControl fullWidth>
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
                    {communeData?.wards?.map((item: any) => (
                      <MenuItem value={item?.code}>{item?.name}</MenuItem>
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
            <TextField
              required
              margin="dense"
              id="addressDetail"
              name="addressDetail"
              label="Số nhà - đường"
              fullWidth
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Trở lại
            </Button>
            <Button type="submit" variant="contained">
              Xác nhận
            </Button>
          </DialogActions>
        </Dialog>
      </HeaderAddress>
      {/* <MainAddress>

      </MainAddress> */}
    </Box>
  );
}

export default Address;
