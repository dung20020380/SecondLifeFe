import { Grid, Rating } from "@mui/material";
import { FlexCenter } from "../../theme/icons/theme";

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
      <FlexCenter>
        <FlexCenter>
          <img
            src="https://play-lh.googleusercontent.com/5vcrZX1-Rx6NpuOASKSUWqMpQqbFTiLOZ-IV8CehAP3XycsmaKJvp36BJOxaKhq8TWc"
            alt=""
            height={100}
          />
          <div>
            <p>{data.name}</p>
            <p>
              <Rating
                sx={{ marginLeft: "10px" }}
                name="read-only"
                value={data.rating}
                readOnly
              />
            </p>
          </div>
        </FlexCenter>
        <Grid container spacing={2}>
          <Grid item></Grid>
          <Grid item></Grid>
          <Grid item></Grid>
        </Grid>
      </FlexCenter>
    </>
  );
}

export default SellDetail;
