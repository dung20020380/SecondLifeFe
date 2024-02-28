import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { FlexCenter } from "../../theme/icons/theme";
import Checkbox from "@mui/material/Checkbox";
import ListProduct from "./ListProduct";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function listProduct() {
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
      <FlexCenter>
        <div>
          <div>
            <p
              style={{
                color: "#007aff",
              }}
            >
              {data.name}
            </p>
            {data.list.map((item, index) => (
              <p>{item}</p>
            ))}
          </div>
          <div>
            <p
              style={{
                color: "#007aff",
              }}
            >
              Phí vận chuyển
            </p>
            <FlexCenter>
              <p>Miễn phí</p>
              <Checkbox {...label} />
            </FlexCenter>
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
              <FormControlLabel value="new" control={<Radio />} label="Mới" />
              <FormControlLabel value="used" control={<Radio />} label="Tốt" />
              <FormControlLabel
                value="medium"
                control={<Radio />}
                label="Trung bình"
              />
            </RadioGroup>
          </div>
        </div>
        <ListProduct />
      </FlexCenter>
    </div>
  );
}

export default listProduct;
