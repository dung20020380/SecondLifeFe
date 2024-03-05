import { FlexCenter } from "../../theme/icons/theme";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import defau from "../../assets/image/defaultImage.jpg";
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
import { HeaderHome, ImageSlide, LinkDetail, MainSwiper } from "./home.styles";
import { PAGES } from "../../routes/constants";
import React, { Fragment } from "react";
export const FreeProduct = ({ listProduct }: { listProduct?: any }) => {
  return (
    <div
      style={{
        background: "#fff",
        margin: "10px 0px",
        padding: "0 5px",
      }}
    >
      <HeaderHome>Sản phẩm miễn phí</HeaderHome>

      <MainSwiper>
        <Swiper
          modules={[Navigation, Pagination, Keyboard]}
          spaceBetween={10}
          slidesPerView={6}
          navigation
          pagination={{ clickable: true }}
          //   onSlideChange={() => console.log("slide change")}
          //   onSwiper={(swiper: any) => console.log(swiper)}
          centeredSlides={false}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 6,
              slidesPerGroup: 6,
            },
          }}
          zoom={true}
        >
          {React.Children.toArray(
            listProduct?.map((item: any) => (
              <Fragment>
                {React.Children.toArray(
                  item?.value?.map((subitem: any) => (
                    <SwiperSlide>
                      <FlexCenter
                        flexcolumn={"true"}
                        style={{
                          alignItems: "start",
                        }}
                      >
                        <LinkDetail href={PAGES.detailProduct}>
                          <ImageSlide
                            src={
                              subitem?.mediaInfo?.imageUrl ||
                              "src/assets/image/defaultImage.jpg"
                            }
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
                    </SwiperSlide>
                  ))
                )}
              </Fragment>
            ))
          )}
        </Swiper>
      </MainSwiper>
    </div>
  );
};

export default FreeProduct;
