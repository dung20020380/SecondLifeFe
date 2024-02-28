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
  Stack,
} from "@mui/material";

import { Fragment } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface NestedNavProps {
  title: string;
  items: {
    id: number;
    title: string;
    subItems?: {
      iconNav?: boolean;
      items: {
        id: number;
        title: string;
      }[];
    };
  }[];
  iconNav?: boolean;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
type sub = {
  id: number;
  title: string;
};

const NestedNavUpload: React.FC<NestedNavProps> = ({
  title,
  iconNav,
  items,
  setValue,
}) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [showDropdownSub, setShowDropdownSub] = useState<number | null>(null);
  const [valueCatelory, setValueCatelory] = useState<sub>();

  const handleOnMouseEnter = () => {
    setShowDropdown(!showDropdown);
  };
  const handleOnMouseMove = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOnMouseEnterSub = (value: number) => {
    setShowDropdownSub(value);
  };
  const handleOnMouseMoveSub = () => {
    setShowDropdownSub(null);
  };

  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.innerText) {
      setValue(target.innerText);
    }
    setShowDropdown(false);
  };
  const handleOnClicksub = (value: sub) => {
    const currentValue = items.filter((item) => item.id === value?.id);
    const returnValue = `${currentValue[0].title} > ${value.title}`;
    setValue(returnValue);
    setShowDropdown(false);
  };

  return (
    <Fragment>
      <ListItem
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={() => setShowDropdown(false)}
        sx={{
          paddingY: "0px",
        }}
      >
        <ListItemText primary={title} />
        {iconNav ? <NavigateNextIcon /> : ""}
        <Collapse
          in={showDropdown}
          timeout="auto"
          unmountOnExit
          sx={{
            position: "absolute",
            top: "100%",
            width: "250px",
            background: "#fff",
            zIndex: 999,
            borderRadius: "5px",
          }}
        >
          <List component="div" disablePadding>
            {React.Children.toArray(
              items?.map((item) => (
                <div
                  onMouseEnter={() => handleOnMouseEnterSub(item.id)}
                  onMouseLeave={handleOnMouseMoveSub}
                >
                  <Stack flexDirection="row" alignItems="center">
                    <ListItemText
                      primary={item.title}
                      onClick={(e) => {
                        handleOnClick(e);
                      }}
                      sx={{
                        padding: "5px 15px",
                      }}
                    />
                    {item.subItems?.iconNav && showDropdownSub === item.id && (
                      <NavigateNextIcon />
                    )}
                  </Stack>
                  {item.subItems && (
                    <Collapse
                      in={showDropdownSub === item.id}
                      timeout="auto"
                      unmountOnExit
                      sx={{
                        position: "absolute",
                        background: "#fff",
                        top: "-5px",
                        left: "100%",
                        width: "100%",
                        minHeight: "100% !important",
                        zIndex: 999,
                        border: "1px solid #eee",
                        borderRadius: "10px",
                      }}
                    >
                      <div style={{}}>
                        {React.Children.toArray(
                          item.subItems.items?.map((itemitem) => (
                            <List component="div" disablePadding>
                              <ListItemText
                                primary={itemitem.title}
                                onClick={() => {
                                  handleOnClicksub(itemitem);
                                }}
                                sx={{
                                  padding: "5px",
                                  "& :hover": {
                                    background: "#d1dcea",
                                  },
                                }}
                              />
                            </List>
                          ))
                        )}
                      </div>
                    </Collapse>
                  )}
                </div>
              ))
            )}
          </List>
        </Collapse>
      </ListItem>
    </Fragment>
  );
};

export default NestedNavUpload;
