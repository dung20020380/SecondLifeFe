import { PAGES } from "../../routes/constants";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { HeaderContainer, LinkProfile } from "./Header.styles";
import Login from "../login";
import { DividerCol, FlexCenter } from "../../theme/icons/theme";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "65ch",
    },
  },
}));

function Header() {
  const authUser = useSelector((state: any) => state.user);

  const bffLogoutUrl = authUser?.bffLogoutUrl;

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderContainer>
      <h2
        onClick={() => {
          navigate(PAGES.home, { replace: true });
        }}
      >
        SecondLife
      </h2>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <FlexCenter>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          style={{
            margin: "0px 10px",
          }}
          onClick={() => navigate(PAGES.cart, { replace: true })}
        >
          <Badge badgeContent={10} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>

        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          style={{
            margin: "0px 10px",
          }}
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        {authUser.user.roles ? (
          <>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                color="inherit"
              >
                <AccountCircleIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <LinkProfile href={PAGES.profile}>
                    Thông tin cá nhân
                  </LinkProfile>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <LinkProfile href={PAGES.sellProduct}>Đăng bán</LinkProfile>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <LinkProfile
                    href={bffLogoutUrl ? bffLogoutUrl : "/bff/logout"}
                  >
                    Đăng xuất
                  </LinkProfile>
                </MenuItem>
              </Menu>
            </div>
          </>
        ) : (
          <FlexCenter>
            <Login></Login>
          </FlexCenter>
        )}
      </FlexCenter>
    </HeaderContainer>
  );
}

export default React.memo(Header);
