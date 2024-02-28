import {
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField,
} from "@mui/material";
import React, { Fragment, useEffect } from "react";
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

function sellAddAddress({ data }: { data?: FormValues }) {
  const {
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    setValue,
    watch,
  } = useForm<FormValues>({
    defaultValues: {},
  });
  return (
    <Fragment>
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
                defaultValue={data?.name ? data?.name : ""}
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
                defaultValue={data?.phone ? data?.phone : ""}
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
              defaultValue={data?.city ? data?.city : ""}
              label="Tỉnh/thành phố"
              onChange={(e) => onChange(e.target.value)}
            >
              {/* {provincesData?.map((item: any) => (
                <MenuItem value={item?.code}>{item?.name}</MenuItem>
              ))} */}
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
            <InputLabel id="demo-simple-select-label">Quận/huyện</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              defaultValue={data?.district ? data?.district : ""}
              id="demo-simple-select"
              value={value}
              label="Quận/huyện"
              onChange={(e) => onChange(e.target.value)}
            >
              {/* {districsData?.districts?.map((item: any) => (
                <MenuItem value={item?.code}>{item?.name}</MenuItem>
              ))} */}
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
            <InputLabel id="demo-simple-select-label">Phường/xã</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              defaultValue={data?.commune ? data?.commune : ""}
              label="Phường/xã"
              onChange={(e) => onChange(e.target.value)}
            >
              {/* {communeData?.wards?.map((item: any) => (
                <MenuItem value={item?.code}>{item?.name}</MenuItem>
              ))} */}
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
              defaultValue={data?.addressDetail ? data?.addressDetail : ""}
              fullWidth
              variant="outlined"
              onChange={(e) => onChange(e.target.value)}
            />
          </FormControl>
        )}
      />
    </Fragment>
  );
}

export default sellAddAddress;
