import { Box, List } from "@mui/material";
import { Fragment } from "react";
import NestedNavCompornent from "./nestedNavCompornent";

function NavBar() {
  return (
    <Fragment>
      <List>
        <NestedNavCompornent
          title="Main Category 1"
          iconNav
          items={[
            { title: "1" },
            { title: "2" },
            {
              subItems: [
                {
                  title: "Main Category 31",
                  iconNav: true,
                  items: [
                    { title: "Subcategory 311" },
                    { title: "Subcategory 312" },
                  ],
                },
              ],
            },
            { title: "2" },

            {
              subItems: [
                {
                  title: "Main Category 31",
                  iconNav: true,
                  items: [
                    { title: "Subcategory 311" },
                    { title: "Subcategory 312" },
                  ],
                },
              ],
            },
          ]}
        />
      </List>
    </Fragment>
  );
}

export default NavBar;
