import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import Divider from "@mui/material/Divider";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CardNavigator from "../Components/PendingTask";

import Payments from "../Components/payment";
import "./style.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function HomeSection() {
  return (
    <Box sx={{ margin: "10px 25px" }}>
      <Button variant="contained" sx={{ marginBottom: "15px" }}>
        Home
      </Button>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Card sx={{ minHeight: "80px" }}>
                <Typography
                  variant="h4"
                  component="div"
                  className="home-section-header"
                >
                  Payment-Pending Approval
                </Typography>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="p"
                    component="div"
                    sx={{ color: "#1976d2", fontSize: "16px" }}
                  >
                    Q000Qa7 | cut of time 2hrs
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="p"
                    component="div"
                    sx={{ color: "gray", fontSize: "14px" }}
                  >
                    KRW 701
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ minHeight: "145px" }}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  className="home-section-header"
                >
                  Priority Message
                </Typography>
                <CardContent
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography gutterBottom variant="p" component="div">
                    Bill payments Report - Korea Bills
                  </Typography>
                  <Link href="#">All Message</Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <Typography
                  variant="h4"
                  component="div"
                  className="home-section-header"
                >
                  1555{""}
                  <Typography variant="span" className="pending-task">
                    Pending Task
                  </Typography>
                </Typography>
              </Card>
              <CardNavigator />
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ minHeight: "80px" }}>
                <Box
                  component="div"
                  className="home-section-header"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>Payment in Last 7 days (my-view)</Typography>
                  <Box
                    component="div"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <FilterAltIcon />
                    <OpenInFullIcon />
                  </Box>
                </Box>

                <CardContent>
                  <Payments />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ padding: "0px" }}>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              className="home-section-header"
            >
              Quick Navigation
            </Typography>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography
                    gutterBottom
                    variant="p"
                    component="div"
                    sx={{ color: "#1976d2" }}
                  >
                    Create Payement
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginTop: "-5px" }}
                  >
                    Create payments for the bank
                  </Typography>
                </Box>
                <Box>
                  <InfoIcon />
                </Box>
              </Box>
              <Box>
                <Divider sx={{ border: "1px solid gray", width: "100%" }} />
              </Box>
            </CardContent>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography
                    gutterBottom
                    variant="p"
                    component="div"
                    sx={{ color: "#1976d2" }}
                  >
                    create Pays
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginTop: "-5px" }}
                  >
                    Lizards are a widespread group
                  </Typography>
                </Box>
                <Box>
                  <InfoIcon />
                </Box>
              </Box>
              <Box>
                <Divider sx={{ border: "1px solid gray", width: "100%" }} />
              </Box>
            </CardContent>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography gutterBottom variant="p" component="div">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginTop: "-5px" }}
                  >
                    Lizards are a widespread group
                  </Typography>
                </Box>
                <Box>
                  <InfoIcon />
                </Box>
              </Box>
              <Box>
                <Divider sx={{ border: "1px solid gray", width: "100%" }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomeSection;
