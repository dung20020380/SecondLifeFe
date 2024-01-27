import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Avatar from "react-avatar-edit";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar as AvatarMaterial,
} from "@mui/material";
import {
  DialogButtons,
  Headerprofile,
  MainAvatar,
  MainTab,
  NameUser,
} from "./Profile.styles";
import MyInformation from "./MyInformation";
import Password from "./Password";
import Address from "./Address";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{
        display: "flex",
        flex: "1",
      }}
    >
      {value === index && <Box sx={{ flex: "1" }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  //   image
  const [image, setImage] = useState("");
  const [imageCrop, setImageCrop] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [preview, setPreview] = useState("");

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSaveImageOnDialog = () => {
    setImage(preview);
    setOpenDialog(false);
  };

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file && file.type.substring(0, 5) === "image") {
      setImageCrop(URL.createObjectURL(file));
    } else {
      setImageCrop("");
    }
  };

  const onCrop = (image: any) => {
    setPreview(image);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          flexDirection: "column",
        }}
      >
        <MainAvatar>
          <Headerprofile>
            <AvatarMaterial
              alt="Profile Picture"
              src={image}
              sx={{ width: 100, height: 100, position: "relative" }}
            />
            <button
              color="primary"
              onClick={handleOpenDialog}
              style={{
                position: "absolute",
                top: 0,
                right: 125,
                background: "#1976d2",
                borderRadius: "50%",
                padding: "3px",
              }}
            >
              <BorderColorIcon />
            </button>
            <NameUser>
              <p>Name</p>
              <p>id: ASp123123</p>
            </NameUser>
          </Headerprofile>
          {/* Dialog for image change */}
          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>Change Profile Image</DialogTitle>
            <DialogContent>
              {!imageCrop ? (
                <input
                  type="file"
                  accept="/image/*"
                  onChange={(e) => handleImageChange(e)}
                  // style={{
                  //   width: "390px",
                  //   height: "295px",
                  // }}
                />
              ) : (
                <Avatar
                  width={390}
                  height={295}
                  onClose={() => handleCloseDialog()}
                  onCrop={(image) => onCrop(image)}
                  label="change image"
                  src={imageCrop}
                />
              )}
            </DialogContent>
            <DialogButtons>
              <DialogActions>
                <Button onClick={handleCloseDialog} color="primary">
                  Cancel
                </Button>
              </DialogActions>
              <DialogActions>
                <Button onClick={handleSaveImageOnDialog} color="primary">
                  Save
                </Button>
              </DialogActions>
            </DialogButtons>
          </Dialog>
        </MainAvatar>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Thông tin cá nhân" {...a11yProps(0)} />
          <Tab label="Địa chỉ" {...a11yProps(1)} />
          <Tab label="Thay đổi mật khẩu" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <MainTab>
        <CustomTabPanel value={value} index={0}>
          <MyInformation />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Address />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Password />
        </CustomTabPanel>
      </MainTab>
    </Box>
  );
}
