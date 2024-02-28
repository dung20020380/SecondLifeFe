import { Box, List } from "@mui/material";
import { Fragment } from "react";
import React from "react";
import NestedNav from "./header/nestedNav";

import { catelory } from "./header/navBar";
import NestedNavUpload from "./header/nestedNavUpload";

function NavBarUpload({
  setValue,
}: {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  const cateloryConvert = catelory.map((item) => ({
    id: item.type,
    title: item.name,
    subItems: {
      id: item.type,
      iconNav: true,
      items: item.subcatelory,
    },
  }));
  return (
    <Fragment>
      <List
        sx={{
          display: "flex",
          height: "100%",
          "& .css-10hburv-MuiTypography-root": {
            fontFamily: '"Poppins", sans-serif !important',
            fontSize: "14px",
            position: "relative",
          },
          "& .css-10hburv-MuiTypography-root:hover": {
            color: "#3A7Bd5",
          },
        }}
      >
        <NestedNavUpload
          title=""
          items={cateloryConvert as any}
          setValue={setValue}
        />
      </List>
    </Fragment>
  );
}

export default NavBarUpload;
