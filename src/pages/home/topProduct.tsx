import { Button, Grid } from "@mui/material";
import { ListDetailProduct } from "./Home";
import { FlexCenter } from "../../theme/icons/theme";
import { HeaderHome, ImageSlide, LinkDetail } from "./home.styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { PAGES } from "../../routes/constants";
import React, { Fragment } from "react";

function TopProduct({ listProduct }: { listProduct?: any }) {
  listProduct?.map((item: any, index: any) => {
    item?.value?.map((subitem: any, index: any) => {
      console.log("listProduct1", subitem?.price);
    });
  });

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
        {listProduct?.map((item: any, index: any) => (
          <Fragment>
            {item?.value?.map((subitem: any) => (
              <Grid item xs={2} key={index}>
                <FlexCenter
                  flexColumn
                  style={{
                    alignItems: "start",
                  }}
                >
                  <LinkDetail href={PAGES.detailProduct}>
                    <ImageSlide
                      src={subitem?.mediaInfo?.imageUrl}
                      alt=""
                      style={{
                        width: "100%",
                      }}
                    />
                    <p>{subitem?.listingInfo?.title}</p>
                    <p>{subitem?.price}</p>
                    {/* <p>{item.address}</p> */}
                  </LinkDetail>
                </FlexCenter>
              </Grid>
            ))}
          </Fragment>
        ))}
      </Grid>
    </div>
  );
}

export default TopProduct;
