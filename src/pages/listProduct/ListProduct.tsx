import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ListDetailProduct } from "../home/Home";
import { FlexCenter } from "../../theme/icons/theme";
import { ImageSlide, LinkDetail } from "../home/home.styles";
import { PAGES } from "../../routes/constants";
import useProductByCatelory from "../../api/getProductByCatelory";
import { Fragment, useState } from "react";
import AppPagination from "../../components/pagination";
import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

function ListProduct() {
  const [pageCurrent, setPageCurrent] = useState(1);

  const { handleApiChangePage, data } = useProductByCatelory();

  const handleChangePage = (value: number) => {
    setPageCurrent(value);
    handleApiChangePage(value);
  };
  let testData;

  if (data) {
    testData = Object.entries(data as Object).map(([key, value]) => ({
      key,
      value,
    }));
  }
  return (
    <Stack flexDirection="column" flex={1} justifyContent="start">
      <Grid container spacing={2}>
        {React.Children.toArray(
          testData?.map((item: any) => (
            <Fragment>
              {React.Children.toArray(
                item?.value?.map((subitem: any) => (
                  <Grid item xs={2.4}>
                    <Stack
                      flexDirection="column"
                      alignItems="start"
                      sx={{ backgroundColor: "#fff" }}
                      borderRadius={2}
                      height="100%"
                    >
                      <LinkDetail href={PAGES.detailProduct}>
                        <ImageSlide
                          src={subitem?.mediaInfo?.imageUrl}
                          alt=""
                          style={{
                            width: "100%",
                          }}
                        />
                        <Typography fontSize={14}>
                          {subitem?.listingInfo?.title}
                        </Typography>
                        <Typography fontSize={16} mt={1}>
                          {subitem?.price}
                        </Typography>
                        {/* <p>{item.address}</p> */}
                      </LinkDetail>
                    </Stack>
                  </Grid>
                ))
              )}
            </Fragment>
          ))
        )}
      </Grid>
      <Box mb={2}>
        <AppPagination
          callbackChangePage={(value) => handleChangePage(value)}
          count={3}
          page={pageCurrent}
        />
      </Box>
    </Stack>
  );
}

export default ListProduct;
{
  /* <Swiper
        modules={[Navigation, Pagination, Keyboard, A11y]}
        spaceBetween={10}
        slidesPerView={6}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper: any) => console.log(swiper)}
        centeredSlides={false}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
      >
        {ListDetailProduct.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <FlexCenter
                flexcolumn={"true"}
                style={{
                  alignItems: "start",
                }}
              >
                <LinkDetail href={PAGES.detailProduct}>
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
                </LinkDetail>
              </FlexCenter>
            </SwiperSlide>
          );
        })}
      </Swiper> */
}
