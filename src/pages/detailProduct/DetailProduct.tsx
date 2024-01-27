import { Button, Grid, Rating } from "@mui/material";
import { DivItemDetail } from "./detailProduct.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { MainApp, MainSwiper } from "../home/home.styles";
import { FlexCenter } from "../../theme/icons/theme";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useState } from "react";
import SellDetail from "./SellDetail";
import MainDetail from "./MainDetail";
import RatingMain from "./RatingMain";

function DetailProduct() {
  const [numberItem, setNumberItem] = useState(1);
  const ListImage = [
    "https://cdn.tgdd.vn/Files/2017/01/19/939425/cach-cai-hinh-nen-may-tinh-khong-bi-mo_1280x720-800-resize.jpg",
    "https://cdn.tgdd.vn/Files/2017/01/19/939425/cach-cai-hinh-nen-may-tinh-khong-bi-mo_1280x720-800-resize.jpg",
    "https://cdn.tgdd.vn/Files/2017/01/19/939425/cach-cai-hinh-nen-may-tinh-khong-bi-mo_1280x720-800-resize.jpg",
    "https://cdn.tgdd.vn/Files/2017/01/19/939425/cach-cai-hinh-nen-may-tinh-khong-bi-mo_1280x720-800-resize.jpg",
  ];
  const data = {
    name: "Máy tính",
    price: "100000đ",
    total: "10",
    status: "Mới",
    delivery: "Miễn phí",
    catelory: "Điện tử",
    sell: "Thế giới di động",
    star: 5,
  };

  return (
    <>
      <DivItemDetail>
        <Grid
          container
          spacing={4}
          sx={{
            marginTop: "0px",
          }}
        >
          <Grid item sm={6} sx={{ marginTop: "-32px" }}>
            <MainSwiper>
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                {ListImage.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <FlexCenter>
                        <img
                          src={item}
                          style={{
                            objectFit: "contain",
                          }}
                        />
                      </FlexCenter>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </MainSwiper>
          </Grid>
          <Grid item sm={6}>
            <FlexCenter
              flexColumn
              style={{
                justifyContent: "space-around",
                alignItems: "start",
                height: "98%",
              }}
            >
              <h1
                style={{
                  color: "#3A7BD5",
                }}
              >
                {data.name}
              </h1>
              <p>
                {data.sell}
                <Rating
                  sx={{ marginLeft: "10px" }}
                  name="read-only"
                  value={data.star}
                  readOnly
                />
              </p>
              <p
                style={{
                  margin: "15px 0",
                  fontSize: "26px",
                }}
              >
                {data.price}
              </p>
              <Grid container spacing={2}>
                <Grid
                  item
                  sm={6}
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  Tình trạng
                </Grid>
                <Grid item sm={6}>
                  {data.status}
                </Grid>
                <Grid
                  item
                  sm={6}
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  Vận chuyển
                </Grid>
                <Grid item sm={6}>
                  {data.delivery}
                </Grid>
                <Grid
                  item
                  sm={6}
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  Danh mục
                </Grid>
                <Grid item sm={6}>
                  {data.catelory}
                </Grid>
                <Grid
                  item
                  sm={6}
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  Số lượng
                </Grid>
                <Grid item sm={6}>
                  <FlexCenter
                    style={{
                      justifyContent: "start",
                    }}
                  >
                    <RemoveCircleIcon
                      color="primary"
                      fontSize="large"
                      onClick={() => {
                        setNumberItem(numberItem - 1);
                      }}
                    />
                    <span
                      style={{
                        padding: "0 5px",
                      }}
                    >
                      {numberItem}
                    </span>
                    <AddCircleIcon
                      color="primary"
                      fontSize="large"
                      onClick={() => {
                        setNumberItem(numberItem + 1);
                      }}
                    />
                    <p
                      style={{
                        marginLeft: "20px",
                        opacity: 0.8,
                      }}
                    >
                      {data.total} sản phẩm
                    </p>
                  </FlexCenter>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                sx={{
                  marginTop: "10px",
                  paddingRight: "32px",
                }}
              >
                <Grid item sm={6}>
                  <Button
                    sx={{
                      fontSize: "18px",
                    }}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Thêm vào giỏ hàng
                  </Button>
                </Grid>
                <Grid item sm={6}>
                  <Button
                    sx={{
                      fontSize: "18px",
                    }}
                    variant="contained"
                    color="secondary"
                    fullWidth
                  >
                    Mua ngay
                  </Button>
                </Grid>
              </Grid>
            </FlexCenter>
          </Grid>
        </Grid>
      </DivItemDetail>
      <DivItemDetail>
        <SellDetail />
      </DivItemDetail>
      <DivItemDetail>
        <MainDetail />
      </DivItemDetail>
      <DivItemDetail>
        <RatingMain />
      </DivItemDetail>
    </>
  );
}

export default DetailProduct;
