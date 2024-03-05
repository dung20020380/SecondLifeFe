import {
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { FlexCenter } from "../../theme/icons/theme";
import Checkbox from "@mui/material/Checkbox";
import ListProduct from "./ListProduct";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function ListProductComponent() {
  const { control, handleSubmit } = useForm({});

  const data = {
    name: "Điện tử",
    list: ["Máy tính", "Điện thoaị", "Laptop", "Loa", "Tai nghe", "Phụ kiện"],
  };
  return (
    <div>
      <p
        style={{
          marginBottom: "2rem",
        }}
      >
        SecondLife <span>{">"}</span> {data.name}
      </p>
      <FlexCenter alignItems="start">
        <div
          style={{
            width: "20%",
          }}
        >
          <div>
            <p
              style={{
                color: "#007aff",
              }}
            >
              {data.name}
            </p>
            {data.list.map((item, index) => (
              <p
                style={{
                  marginLeft: "10px",
                }}
              >
                {" "}
                {`> ${item}`}
              </p>
            ))}
          </div>
          <div>
            <p
              style={{
                color: "#007aff",
              }}
            >
              Giá bán
            </p>
            <div>
              <Controller
                control={control}
                name="freeproduct"
                render={({ field: { value, onChange } }) => (
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Sản phẩm miễn phí"
                    value={value}
                    labelPlacement="start"
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: 16,
                      },
                    }}
                  />
                )}
              />
            </div>
            <div>
              <Typography fontSize={16} ml={2}>
                Sắp xếp:
              </Typography>
              <Controller
                control={control}
                name="price"
                render={({ field: { value, onChange } }) => (
                  <FormControl sx={{ m: 1, ml: 2, minWidth: 120 }}>
                    <Select
                      value={value}
                      onChange={(e) => onChange(e.target.value)}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      size="small"
                      defaultValue="low"
                      sx={{
                        "& .MuiSelect-outlined": {
                          fontSize: 12,
                        },
                      }}
                    >
                      <MenuItem value="low">Từ thấp tới cao</MenuItem>
                      <MenuItem value="high">Từ cao về thấp</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
            </div>
          </div>
          <div>
            <p
              style={{
                color: "#007aff",
              }}
            >
              Phí vận chuyển
            </p>
            <div>
              <Controller
                control={control}
                name="express"
                render={({ field: { value, onChange } }) => (
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Miễn phí"
                    value={value}
                    labelPlacement="start"
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: 16,
                      },
                    }}
                  />
                )}
              />
            </div>
          </div>

          <div>
            <p
              style={{
                color: "#007aff",
              }}
            >
              Tình trạng
            </p>
            <RadioGroup
              row
              aria-labelledby="radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="new"
                control={<Radio />}
                label="Mới"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: 12,
                  },
                }}
              />
              <FormControlLabel
                value="used"
                control={<Radio />}
                label="Tốt"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: 12,
                  },
                }}
              />
              <FormControlLabel
                value="medium"
                control={<Radio />}
                label="Trung bình"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: 12,
                  },
                }}
              />
            </RadioGroup>
          </div>
        </div>
        <ListProduct />
      </FlexCenter>
    </div>
  );
}

export default ListProductComponent;
