import styled from "styled-components";

export const ImageSlide = styled.img`
overflow: hidden;
  transition: transform 0.3s ease;
  transform-origin: center center;
  &:hover {
    transform: scale(1.05);
  }
  
`
export const HeaderHome = styled.h3`
    padding: 10px 0;
    color: #3A7BD5;
`
export const LinkDetail = styled.a`
  text-decoration: none;
  color: #333;
`
export const MainApp = styled.div`
  width: 80%;
`


export const MainSwiper = styled.div`
  .swiper-button-next::after {
    font-size: 27px !important;
    font-weight: bold;
  }
  .swiper-button-prev::after {
    font-size: 27px !important;
    font-weight: bold;
  }
  padding: 20px 0px;
  .swiper-pagination {
    bottom: 0;
  }
`