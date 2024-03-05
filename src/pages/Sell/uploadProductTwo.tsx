import { Controller, useForm } from "react-hook-form";
import {
  MainStep,
  TextStep,
  DividerFilter,
  MainLoadImg,
  MainIcon,
  TextInput,
  Textarea,
  SpanTextTitle,
  SpanWeight,
} from "./index.styled";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  OutlinedInput,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import { FormValuesStep2 } from "../../model/uploadProduct";
import { DividerCol, FlexCenter, styledTheme } from "../../theme/icons/theme";
import { Fragment } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import React from "react";
import Address from "../profile/Address";
import SellAddress from "./sellAddress";
import AddIcon from "@mui/icons-material/Add";
import SellAddAddress from "./sellAddAddress";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "styled-components";

interface UploadProductOneProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
const FileInput = styled.input`
  display: none; /* Hide the actual file input */
`;

const UploadProductTwo: React.FC<UploadProductOneProps> = ({ setStep }) => {
  const [textDetailProduct, setTextDetailProduct] = React.useState("");
  const [modalAddress, setModalAddress] = React.useState(false);
  const [modalAddAddress, setModalAddAddress] = React.useState(false);

  const { handleSubmit, control } = useForm<FormValuesStep2>({
    defaultValues: {
      // catelory: "",
      // nameProduct: "",
      // status: "",
    },
  });
  const toggleAddress = () => {
    setModalAddress(!modalAddress);
  };
  const handleDefaultAddress = () => {
    setModalAddress(!modalAddress);
  };
  const toggleAddAddress = () => {
    setModalAddAddress(!modalAddAddress);
  };
  const onSubmitAddAddress = () => {
    setModalAddAddress(!modalAddAddress);
  };
  const onSubmitUploadProduct = () => {
    setModalAddAddress(!modalAddAddress);
  };
  const handleBackStepOne = () => {
    setStep(1);
  };

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileClick = () => {
    // Trigger click on the hidden file input
    fileInputRef?.current?.click();
  };

  const handleFileChangeImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    // Handle the selected file
  };

  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item sm={6}>
          <MainStep>
            <FlexCenter justifyContent="start">
              <TextStep width="25%">Số lượng*</TextStep>
              <SpanTextTitle>:</SpanTextTitle>
              <Controller
                name="catelory"
                control={control}
                render={() => (
                  <TextField
                    id="outlined-basic"
                    label="Sản phẩm"
                    variant="outlined"
                    size="small"
                    type="number"
                  />
                )}
              />
            </FlexCenter>
          </MainStep>
          <MainStep>
            <FlexCenter justifyContent="start">
              <TextStep width="25%">Giá bán*:</TextStep>
              <SpanTextTitle>:</SpanTextTitle>
              <Controller
                name="catelory"
                control={control}
                render={() => (
                  <TextField
                    id="outlined-basic"
                    label="Giá bán"
                    variant="outlined"
                    size="small"
                    type="number"
                  />
                )}
              />
            </FlexCenter>
          </MainStep>
          <MainStep>
            <FlexCenter justifyContent="start">
              <TextStep width="25%">Cân nặng*</TextStep>
              <SpanTextTitle>:</SpanTextTitle>

              <Controller
                name="catelory"
                control={control}
                render={() => (
                  <TextField
                    id="outlined-basic"
                    label="Cân nặng"
                    variant="outlined"
                    size="small"
                    type="number"
                  />
                )}
              />
            </FlexCenter>
          </MainStep>
          <MainStep>
            <FlexCenter justifyContent="start">
              <TextStep width="25%">Kích thước*</TextStep>
              <SpanTextTitle>:</SpanTextTitle>

              <Controller
                name="catelory"
                control={control}
                render={() => (
                  <Stack spacing={2} direction="row">
                    <FlexCenter>
                      <TextField
                        id="outlined-basic"
                        label="Dài"
                        variant="outlined"
                        size="small"
                        sx={{
                          width: "60px",
                          "& .MuiInputBase-input, fieldset": {
                            width: "40px",
                          },
                        }}
                        type="number"
                      />
                      <SpanWeight>kg</SpanWeight>
                    </FlexCenter>
                    <FlexCenter>
                      <TextField
                        id="outlined-basic"
                        label="Rộng"
                        variant="outlined"
                        size="small"
                        type="number"
                        sx={{
                          width: "60px",
                          "& .MuiInputBase-input, fieldset": {
                            width: "40px",
                          },
                        }}
                      />
                      <SpanWeight>kg</SpanWeight>
                    </FlexCenter>
                    <FlexCenter>
                      <TextField
                        id="outlined-basic"
                        label="Cao"
                        variant="outlined"
                        size="small"
                        type="number"
                        sx={{
                          width: "60px",
                          "& .MuiInputBase-input, fieldset": {
                            width: "40px",
                          },
                        }}
                      />
                      <SpanWeight>kg</SpanWeight>
                    </FlexCenter>
                  </Stack>
                )}
              />
            </FlexCenter>
          </MainStep>
          <MainStep>
            <FlexCenter justifyContent="start">
              <TextStep width="25%">Phí vận chuyển*</TextStep>
              <SpanTextTitle>:</SpanTextTitle>

              <Controller
                name="catelory"
                control={control}
                render={() => (
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="sellship"
                        control={<Radio />}
                        label="Người bán trả"
                      />
                      <FormControlLabel
                        value="buyship"
                        control={<Radio />}
                        label="Người mua trả"
                      />
                    </RadioGroup>
                  </FormControl>
                )}
              />
            </FlexCenter>
          </MainStep>
        </Grid>
        <Grid item sm={6}>
          <MainStep>
            <TextStep>Thông tin chi tiết sản phẩm</TextStep>
            <Controller
              name="catelory"
              control={control}
              render={() => (
                <TextField
                  id="outlined-basic"
                  label="Sản phẩm"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </MainStep>
        </Grid>
      </Grid>
      <DividerFilter></DividerFilter>
      <MainStep>
        <TextStep marginY>Ảnh và video*:</TextStep>
        <Controller
          name="catelory"
          control={control}
          render={() => (
            <MainLoadImg onClick={handleFileClick}>
              <MainIcon>
                <AddAPhotoIcon />
                <TextInput>Tải lên hình ảnh và video</TextInput>
              </MainIcon>
              <FileInput
                type="file"
                onChange={handleFileChangeImg}
                ref={fileInputRef}
              />
            </MainLoadImg>
          )}
        />
      </MainStep>
      <MainStep>
        <TextStep marginY>Mô tả sản phẩm*:</TextStep>
        <Controller
          name="catelory"
          control={control}
          render={() => (
            <Textarea
              placeholder="Mời nhập các thông tin chi tiết về sản phẩm"
              value={textDetailProduct}
              onChange={(event) => setTextDetailProduct(event.target.value)}
            ></Textarea>
          )}
        />
      </MainStep>
      <MainStep>
        <TextStep marginY>Vận chuyển*:</TextStep>
        <Controller
          name="catelory"
          control={control}
          render={() => (
            <FlexCenter
              justifyContent="space-between"
              style={{
                padding: " 20px 0",
                borderBottom: "1px solid #807f7f",
              }}
            >
              <SellAddress />
              <FlexCenter
                flexcolumn={"true"}
                justifyContent="end"
                alignItems="end"
              >
                <Button
                  variant="text"
                  style={{
                    marginBottom: "1rem",
                    fontSize: 14,
                  }}
                  onClick={() => toggleAddress()}
                >
                  Chỉnh sửa
                </Button>
              </FlexCenter>
            </FlexCenter>
          )}
        />
      </MainStep>
      <Stack spacing={1} direction="row" justifyContent="center" marginTop={2}>
        <Button
          type="submit"
          color="secondary"
          variant="outlined"
          sx={{
            fontSize: 12,
            marginTop: "20px",
          }}
          onClick={handleBackStepOne}
        >
          Trở lại
        </Button>
        <Button
          type="submit"
          color="primary"
          variant="outlined"
          sx={{
            fontSize: 12,
            marginTop: "20px",
          }}
          onClick={handleSubmit(onSubmitUploadProduct)}
        >
          Đăng bán
        </Button>
      </Stack>

      {/* show address */}
      <Dialog open={modalAddress} onClose={toggleAddress} fullWidth>
        <DialogTitle
          sx={{
            fontSize: 18,
            fontWeight: 600,
            color: styledTheme.primary,
          }}
        >
          <Button
            onClick={toggleAddress}
            sx={{
              fontSize: 12,
              position: "absolute",
              right: 0,
            }}
          >
            <CloseIcon />
          </Button>
          <p
            style={{
              textAlign: "center",
            }}
          >
            Địa chỉ lấy hàng
          </p>
        </DialogTitle>
        <DialogContent>
          <FlexCenter>
            <SellAddress />
            <FlexCenter
              flexcolumn={"true"}
              justifyContent="end"
              alignItems="end"
            >
              <Button
                variant="outlined"
                style={{
                  marginBottom: "1rem",
                  fontSize: 14,
                }}
                onClick={toggleAddAddress}
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
                Xác nhận
              </Button>
            </FlexCenter>
          </FlexCenter>
          <DividerFilter></DividerFilter>
        </DialogContent>
        <DialogActions sx={{}}>
          <Button variant="contained" onClick={toggleAddAddress}>
            <AddIcon />
            <p
              style={{
                fontSize: 14.5,
              }}
            >
              Thêm địa chỉ mới
            </p>
          </Button>
        </DialogActions>
      </Dialog>
      {/* modal add address */}
      <Dialog open={modalAddAddress} onClose={toggleAddAddress} fullWidth>
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
          <SellAddAddress />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={toggleAddAddress}
            variant="contained"
            color="secondary"
            sx={{
              fontSize: 12,
            }}
          >
            Trở lại
          </Button>
          <Button
            onClick={handleSubmit(onSubmitAddAddress)}
            variant="contained"
            sx={{
              fontSize: 12,
            }}
          >
            Xác Nhận
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default UploadProductTwo;
