import { Box, List } from "@mui/material";
import { Fragment } from "react";
import NestedNav from "./nestedNav";
import React from "react";
import { DividerRow, customTheme, styledTheme } from "../../theme/icons/theme";

export const catelory = [
  {
    name: "Xe cộ",
    type: 1,
    subcatelory: [
      { id: 1, title: "Xe máy" },
      { id: 2, title: "Ô tô" },
      { id: 3, title: "Phụ kiện" },
      { id: 4, title: "Mũ bảo hiểm" },
      { id: 5, title: "Xe điện" },
    ],
  },
  {
    name: "Thời trang và phụ kiện",
    type: 2,
    subcatelory: [
      { id: 1, title: "Áo" },
      { id: 2, title: "Quần" },
      { id: 3, title: "Giày" },
      { id: 4, title: "Túi & ví" },
      { id: 5, title: "Váy & đầm" },
      { id: 6, title: "Đồ bơi" },
      { id: 7, title: "Đồ ngủ" },
      { id: 8, title: "Nón" },
      { id: 9, title: "Trang sức" },
      { id: 10, title: "Phụ kiện" },
    ],
  },
  {
    name: "Đồ gia dụng",
    type: 3,
    subcatelory: [
      { id: 1, title: "Bộ dụng cụ cầm tay" },
      { id: 2, title: "Đồ phòng bếp & phòng ăn" },
      { id: 3, title: "Dụng cụ vệ sinh" },
      { id: 4, title: "Dụng cụ sân vườn" },
      { id: 5, title: "Đồ nội thất" },
      { id: 6, title: "Đồ phòng tắm" },
      { id: 7, title: "Đồ trang trí" },
    ],
  },
  {
    name: "Đồ chơi và đồ dùng trẻ em",
    type: 4,
    subcatelory: [
      { id: 1, title: "Đồ chơi điện tử" },
      { id: 2, title: "Đồ trẻ sơ sinh" },
      { id: 3, title: "Boardgmae & Ghép hình" },
      { id: 4, title: "Búp bê & thú nhồi bông" },
      { id: 5, title: "Đồ sưu tầm" },
    ],
  },
  {
    name: "Sách và văn phòng phẩm",
    type: 5,
    subcatelory: [
      { id: 1, title: "Tiểu thuyết và thơ" },
      { id: 2, title: "Sách và truyện thiếu nhi" },
      { id: 3, title: "Sách ngoại ngữ" },
      { id: 4, title: "Hộp và kệ" },
      { id: 5, title: "Bảng và đồ dùng tẩy xóa" },
      { id: 6, title: "Giấy và Bút" },
      { id: 7, title: "Máy Tính cầm tay" },
      { id: 8, title: "Dụng Cụ Đo Lường và Vẽ" },
    ],
  },
  {
    name: "Thể thao dã ngoại",
    type: 6,
    subcatelory: [
      { id: 1, title: "Đồ câu cá" },
      { id: 2, title: "Đồ cắm trại & đi bộ" },
      { id: 3, title: "Đồ đánh Goft" },
      { id: 4, title: "Đồ thể thao dưới nước" },
      { id: 5, title: "Phụ kiện thể thao" },
    ],
  },
  {
    name: "Sức khỏe và thể chất",
    type: 7,
    subcatelory: [
      { id: 1, title: "Thiết Bị Tập Thể Dục" },
      { id: 2, title: "Thiết bị y tế" },
      { id: 3, title: "Thiết Bị Massage và Chăm Sóc Cơ Thể" },
      { id: 4, title: "Phụ Kiện Tập Luyện" },
      { id: 5, title: "Thuốc chức năng" },
    ],
  },

  {
    name: "Đồ miễn phí",
    type: 8,
  },
];

function NavBar() {
  return (
    <Fragment>
      <List
        sx={{
          width: "80%",
          padding: 0,
          marginTop: 0,
          display: "flex",

          "& .css-10hburv-MuiTypography-root": {
            fontFamily: '"Poppins", sans-serif !important',
            fontSize: "14px",
            position: "relative",
          },
          color: "#504f4f",
          "& .css-10hburv-MuiTypography-root:hover": {
            color: "#3A7Bd5",
          },
        }}
      >
        {React.Children.toArray(
          catelory.map((item) => (
            <NestedNav title={item.name} items={item.subcatelory as any} />
          ))
        )}
      </List>
    </Fragment>
  );
}

export default NavBar;
