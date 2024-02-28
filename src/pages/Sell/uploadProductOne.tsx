import { Controller, useForm } from "react-hook-form";
import { MainStatus, MainStep, TextStatus, TextStep } from "./index.styled";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { FlexCenter } from "../../theme/icons/theme";
import { FormValues } from "../../model/uploadProduct";
import { SpanText } from "../profile/Profile.styles";
import NavBarUpload from "../../components/navBarUpload";
import { useEffect, useState } from "react";

interface UploadProductOneProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const UploadProductOne: React.FC<UploadProductOneProps> = ({ setStep }) => {
  const [valueCatelory, setValueCatelory] = useState<string>("");

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      catelory: "",
      nameProduct: "",
      status: "",
    },
  });
  const onSubmit = (data: FormValues) => {
    setStep(2);
    console.log(data);
    // addNoteMutation.mutate(newObj);
  };
  useEffect(() => {
    setValue("catelory", valueCatelory);
  }, [valueCatelory]);

  return (
    <>
      <MainStep>
        <TextStep>Danh mục</TextStep>
        <Controller
          name="catelory"
          control={control}
          rules={{
            required: "Vui lòng chọn danh mục sản phẩm",
          }}
          render={({ field: { onChange, value } }) => (
            <FormControl fullWidth>
              {/* <InputLabel id="demo-select-small-label">Danh mục</InputLabel> */}
              {/* <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={valueCatelory}
                label="Danh mục"
                onChange={(e) => onChange(e.target.value)}
                disabled
              ></Select> */}
              <TextField
                id="outlined-basic"
                label="Danh mục"
                value={value}
                onChange={(e) => onChange(valueCatelory)}
                variant="outlined"
                fullWidth
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  height: "38px",
                  width: "100%",
                }}
              >
                <NavBarUpload setValue={setValueCatelory} />
              </div>
            </FormControl>
          )}
        />
        <SpanText isCheckValidateUser>
          {errors?.catelory && <span> &#160; {errors.catelory.message}</span>}
        </SpanText>
      </MainStep>
      <MainStep>
        <TextStep>Tên sản phẩm</TextStep>
        <Controller
          name="nameProduct"
          control={control}
          rules={{
            required: "Vui lòng nhập tên sản phẩm",
            minLength: {
              value: 20,
              message: "Tên sản phẩm phải có độ dài trên 20 ký tự",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <TextField
              id="outlined-basic"
              label="Sản phẩm"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              variant="outlined"
              fullWidth
            />
          )}
        />
        <SpanText isCheckValidateUser>
          {errors?.nameProduct && (
            <span> &#160; {errors.nameProduct.message}</span>
          )}
        </SpanText>
      </MainStep>
      <MainStep>
        <TextStep>Tình trạng</TextStep>
        <Controller
          name="status"
          control={control}
          rules={{
            required: "Vui lòng nhập tên sản phẩm",
          }}
          render={({ field: { onBlur, onChange, value } }) => (
            <Stack direction={"row"} gap={1} marginTop={2}>
              <MainStatus
                className={value === "5" ? "checked-custom" : "none"}
                onClick={() => {
                  onChange("5");
                }}
              >
                <p
                  style={{
                    margin: "10px 0",
                  }}
                >
                  Mới
                </p>
                <TextStatus>
                  Hàng mới kèm mác, chưa mở hộp/bao bì, chưa qua sử dụng.
                </TextStatus>
              </MainStatus>
              <MainStatus
                className={value === "4" ? "checked-custom" : "none"}
                onClick={() => {
                  onChange("4");
                }}
              >
                <p
                  style={{
                    margin: "10px 0",
                  }}
                >
                  Như mới
                </p>
                <TextStatus>
                  Hàng mới kèm mác, đã mở bao bì/hộp, chưa qua sử dụng.
                </TextStatus>
              </MainStatus>
              <MainStatus
                className={value === "3" ? "checked-custom" : "none"}
                onClick={() => {
                  onChange("3");
                }}
              >
                <p
                  style={{
                    margin: "10px 0",
                  }}
                >
                  Tốt
                </p>
                <TextStatus>
                  Đã qua sử dụng, tính năng đầy đủ, hoạt động tốt (có thể có vài
                  vết xước nhỏ)
                </TextStatus>
              </MainStatus>
              <MainStatus
                className={value === "2" ? "checked-custom" : "none"}
                onClick={() => {
                  onChange("2");
                }}
              >
                <p
                  style={{
                    margin: "10px 0",
                  }}
                >
                  Trung bình
                </p>
                <TextStatus>
                  Hàng đã qua sử dụng, đầy đủ chức năng. Nhiều sai sót hoặc lỗi
                  nhỏ.
                </TextStatus>
              </MainStatus>
              <MainStatus
                className={value === "1" ? "checked-custom" : "none"}
                onClick={() => {
                  onChange("1");
                }}
              >
                <p
                  style={{
                    margin: "10px 0",
                  }}
                >
                  Kém
                </p>
                <TextStatus>
                  Đã qua sử dụng. Nhiều sai sót. Có thể bị hư hỏng (đề cập chi
                  tiết nếu bị hư hỏng).
                </TextStatus>
              </MainStatus>
            </Stack>
          )}
        />
        <SpanText isCheckValidateUser>
          {errors?.status && <span> &#160; {errors.status.message}</span>}
        </SpanText>
      </MainStep>
      <FlexCenter>
        <Button
          type="submit"
          color="secondary"
          variant="outlined"
          sx={{
            fontSize: 12,
            marginTop: "20px",
          }}
          onClick={handleSubmit(onSubmit)}
        >
          Tiếp theo
        </Button>
      </FlexCenter>
    </>
  );
};

export default UploadProductOne;
