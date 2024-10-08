import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CachedIcon from "@mui/icons-material/Cached";

import BasicBars from "../Components/Barchart";
import { Typography } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="custume-tabs"
        >
          <Tab label="client workflow" {...a11yProps(0)} />
          <Tab label="Bank Workflow" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <BasicBars />
            <Typography variant="p" component="div" className="barchart-text">
              proceed by bank
            </Typography>
          </Box>
          <Box>
            <BasicBars />
            <Typography variant="p" component="div" className="barchart-text">
              reject by bank
            </Typography>
          </Box>
        </Box>
        <Box className="pending-footer">
          <CachedIcon
            className="outline-icon"
            sx={{ fontSize: "10px", marginRight: "5px" }}
          />
          Last Updated 17/07/2024 04:09:41 pm
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        NO DATA
      </CustomTabPanel>
    </Box>
  );
}
