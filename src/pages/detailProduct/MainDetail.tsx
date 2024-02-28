import { Divider, Grid } from "@mui/material";
import { FlexCenter, styledTheme } from "../../theme/icons/theme";

function MainDetail() {
  const Detail = [
    {
      name: "Danh mục",
      value: "Máy tính",
    },
    {
      name: "Hạn bảo hành",
      value: "12 Tháng",
    },
    {
      name: "Gửi từ",
      value: "Hà Nội",
    },
    {
      name: "Ram",
      value: "16GB",
    },
    {
      name: "CPU",
      value: "Intel-i7-1170",
    },
    {
      name: "Bộ nhớ",
      value: "1T",
    },
  ];
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <Divider textAlign="left">
            <p
              style={{
                fontSize: 24,
                color: styledTheme.primary,
              }}
            >
              Chi tiết sản phẩm
            </p>
          </Divider>
          <Grid container spacing={2} paddingY={2}>
            {Detail.map((item, index) => {
              return (
                <>
                  <Grid item sm={4}>
                    <p
                      style={{
                        opacity: 0.6,
                      }}
                    >
                      {item.name}
                    </p>
                  </Grid>
                  <Grid item sm={8}>
                    <p>{item.value}</p>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Grid>
        <Grid item sm={6}>
          <Divider textAlign="left">
            <p
              style={{
                fontSize: 24,
                color: styledTheme.primary,
              }}
            >
              Mô tả sản phẩm
            </p>
          </Divider>
          <p
            style={{
              padding: " 1.6rem 0",
            }}
          >
            Sử dụng bình thường, không trầy xước, Mua đầy đủ phụ kiện cam tai
            nghe
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainDetail;
