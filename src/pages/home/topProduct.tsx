import { Button, Grid } from "@mui/material";
import { ListDetailProduct } from "./Home";
import { FlexCenter } from "../../theme/icons/theme";
import { HeaderHome, ImageSlide } from "./home.styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function TopProduct() {
  return (
    <div
      style={{
        background: "#fff",
        margin: "10px 0px",
        padding: "0 5px",
        position: "relative",
      }}
    >
      <Button
        href=""
        sx={{
          position: "absolute",
          right: 0,
          top: "5px",
        }}
        variant="text"
        endIcon={<ArrowForwardIcon />}
      >
        Xem tất cả
      </Button>
      <HeaderHome>Sản phẩm nổi bật</HeaderHome>
      <Grid
        container
        spacing={1}
        sx={{
          marginTop: "5px",
        }}
      >
        {ListDetailProduct.map((item, index) => {
          return (
            <Grid item xs={2} key={index}>
              <FlexCenter
                flexColumn
                style={{
                  alignItems: "start",
                }}
              >
                <ImageSlide
                  src={item.image}
                  alt=""
                  style={{
                    width: "100%",
                  }}
                />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.address}</p>
              </FlexCenter>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default TopProduct;
