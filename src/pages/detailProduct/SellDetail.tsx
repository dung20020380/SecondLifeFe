import { Grid, Rating } from "@mui/material";
import { FlexCenter, styledTheme } from "../../theme/icons/theme";

function SellDetail() {
  const data = {
    name: "Shop Luxury",
    rating: 5,
    responseRating: "10k",
    totalProduct: "30",
    join: "3",
    follow: "10k",
  };
  return (
    <>
      <FlexCenter justifyContent="space-between">
        <FlexCenter>
          <img
            src="https://play-lh.googleusercontent.com/5vcrZX1-Rx6NpuOASKSUWqMpQqbFTiLOZ-IV8CehAP3XycsmaKJvp36BJOxaKhq8TWc"
            alt=""
            height={80}
            style={{
              marginRight: "20px",
              borderRadius: 999,
            }}
          />
          <div>
            <p>{data.name}</p>
            <p>
              <Rating name="read-only" value={data.rating} readOnly />
            </p>
          </div>
        </FlexCenter>
        <Grid container spacing={2} width={"50%"}>
          <Grid sm={6} item>
            <FlexCenter justifyContent="space-between">
              <span
                style={{
                  opacity: 0.4,
                }}
              >
                Đánh giá
              </span>
              <span
                style={{
                  color: styledTheme.primary,
                }}
              >
                10k
              </span>
            </FlexCenter>
          </Grid>
          <Grid sm={6} item>
            <FlexCenter justifyContent="space-between">
              <span
                style={{
                  opacity: 0.4,
                }}
              >
                Tham gia
              </span>
              <span
                style={{
                  color: styledTheme.primary,
                }}
              >
                1 tháng trước
              </span>
            </FlexCenter>
          </Grid>
          <Grid sm={6} item>
            <FlexCenter justifyContent="space-between">
              <span
                style={{
                  opacity: 0.4,
                }}
              >
                Sản phẩm
              </span>
              <span
                style={{
                  color: styledTheme.primary,
                }}
              >
                30
              </span>
            </FlexCenter>
          </Grid>
          <Grid sm={6} item>
            <FlexCenter justifyContent="space-between">
              <span
                style={{
                  opacity: 0.4,
                }}
              >
                Người theo dõi
              </span>
              <span
                style={{
                  color: styledTheme.primary,
                }}
              >
                100
              </span>
            </FlexCenter>
          </Grid>
        </Grid>
      </FlexCenter>
    </>
  );
}

export default SellDetail;
