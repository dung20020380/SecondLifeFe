import { ListDetailProduct } from "./Home";
import { FlexCenter } from "../../theme/icons/theme";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
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
import { useRef } from "react";
import { HeaderHome, ImageSlide, LinkDetail, MainSwiper } from "./home.styles";
import { PAGES } from "../../routes/constants";
export const FreeProduct = () => {
  const swiperRef = useRef(null);

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
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper: any) => console.log(swiper)}
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
          {ListDetailProduct.map((item, index) => {
            return (
              <SwiperSlide>
                <FlexCenter
                  flexColumn
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
        </Swiper>
      </MainSwiper>
    </div>
  );
};

export default FreeProduct;
