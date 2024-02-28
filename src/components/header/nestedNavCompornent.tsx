import React, { useState } from "react";
import {
  List,
  Collapse,
  ListItem,
  ListItemText,
  Button,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";

// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
import { Fragment } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const catelory = [
  {
    name: "xe cộ",
    type: 1,
    subcatelory: [
      "Xe máy",
      "Xe máy",
      "Ô tô",
      "Phụ kiện",
      "Mũ bảo hiểm",
      "Xe điện",
    ],
  },
  {
    name: "Thời trang và phụ kiện",
    type: 2,
    subcatelory: [
      "Áo",
      "Quần",
      "Giày",
      "Túi & ví",
      "Váy & đầm",
      "Đồ bơi",
      "Đồ ngủ",
      "Nón ",
      "Trang sức",
      "Phụ kiện",
    ],
  },
  {
    name: "Đồ gia dụng",
    type: 3,
    subcatelory: [
      "Bộ dụng cụ cầm tay",
      "Đồ phòng bếp & phòng ăn",
      "Dụng cụ vệ sinh",
      "Dụng cụ sân vườn",
      "Đồ nội thất",
      "Đồ phòng tắm",
      "Đồ trang trí",
    ],
  },
  {
    name: "Đồ chơi và đồ dùng trẻ em",
    type: 4,
    subcatelory: [
      "Đồ chơi điện tử",
      "Đồ trẻ sơ sinh",
      "Boardgmae & Ghép hình",
      "Búp bê & thú nhồi bông",
      "Đồ sưu tầm",
    ],
  },
  {
    name: "Sách và văn phòng phẩm",
    type: 5,
    subcatelory: [
      "Tiểu thuyết và thơ",
      "Sách và truyện thiếu nhi",
      "Sách ngoại ngữ",
      "Hộp và kệ",
      "Bảng và đồ dùng tẩy xóa",
      "Giấy và Bút",
      "Máy Tính cầm tay",
      "Dụng Cụ Đo Lường và Vẽ",
    ],
  },
  {
    name: "Thể thao dã ngoại",
    type: 6,
    subcatelory: [
      "Đồ câu cá",
      "Đồ cắm trại & đi bộ",
      "Đồ đánh Goft",
      "Đồ thể thao dưới nước",
      "Phụ kiện thể thao",
    ],
  },
  {
    name: "Sức khỏe và thể chất",
    type: 7,
    subcatelory: [
      "Thiết Bị Tập Thể Dục",
      "Thiết bị y tế",
      "Thiết Bị Massage và Chăm Sóc Cơ Thể",
      "Phụ Kiện Tập Luyện",
      "Thuốc chức năng",
    ],
  },
  {
    name: "Đồ miễn phí",
    type: 8,
  },
];

interface NestedNavProps {
  title: string;
  items: { title?: string; subItems?: NestedNavProps[] }[];
  iconNav?: boolean;
}

const NestedNavCompornent: React.FC<NestedNavProps> = ({
  title,
  iconNav,
  items,
}) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [showDropdownSub, setShowDropdownSub] = useState<boolean>(false);

  const handleOnMouseEnter = () => {
    setShowDropdown(!showDropdown);
  };
  const handleOnMouseMove = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.innerText) {
      console.log(target.innerText);
    }
  };

  return (
    <Fragment>
      <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseMove}>
        <ListItemText primary={title} />
        {iconNav ? <NavigateNextIcon /> : ""}
        <Collapse
          in={showDropdown}
          timeout="auto"
          unmountOnExit
          sx={{
            position: "absolute",
            background: "#fff",
            top: "25px",
            padding: "5px",
            zIndex: 999,
            border: "1px solid #eee",
            borderRadius: "10px",
          }}
        >
          <List
            component="div"
            disablePadding
            onClick={(e) => {
              handleOnClick(e);
            }}
          >
            {React.Children.toArray(
              items.map((item) => (
                <Fragment>
                  {item.title && (
                    <ListItem sx={{ pl: 4 }}>
                      <ListItemText
                        primary={item.title}
                        onClick={(e) => {
                          handleOnClick(e);
                        }}
                        sx={{
                          "& :hover": {
                            background: "#d1dcea",
                          },
                        }}
                      />
                    </ListItem>
                  )}
                  {item.subItems &&
                    React.Children.toArray(
                      item.subItems.map((itemitem) => (
                        <Box>
                          <NestedNavCompornent
                            title={itemitem?.title}
                            items={itemitem.items}
                            iconNav={itemitem?.iconNav}
                          />
                        </Box>
                      ))
                    )}
                </Fragment>
              ))
            )}
          </List>
        </Collapse>
      </div>
    </Fragment>
  );
};

export default NestedNavCompornent;
