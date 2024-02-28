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

function ListProduct() {
  const {} = useProductByCatelory();
  return (
    <>
      <Swiper
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
    </>
  );
}

export default ListProduct;
