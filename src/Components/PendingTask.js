import React, { useState } from "react";
import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const cardsData = [
  {
    id: 1,
    title: "687",
    stat: "pending sent to bank",
    title1: "8",
    stat1: "pending Repare",
    title2: "888",
    stat2: "Pending Auth",
    stat3: "Payment",
  },
  {
    id: 2,
    title: "999",
    stat: "pending sent to bank",
    title1: "8",
    title2: "888",
    stat2: "Pending Auth",
  },
];
// Add more cards as needed
function CardWithArrow({ data, onNext, onPrev }) {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
      }}
    >
      <IconButton onClick={onPrev} aria-label="prev">
        <ArrowBackIcon />
      </IconButton>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ marginRight: "30px" }}>
            <Typography variant="p" component="div" className="pending-title">
              {data.title}
            </Typography>
            <Typography
              variant="p"
              component="div"
              className="pending-subtitle"
            >
              {data.stat}
            </Typography>
          </Box>
          <Box sx={{ marginRight: "15px" }}>
            <Typography variant="p" component="div" className="pending-title">
              {data.title1}
            </Typography>
            <Typography
              variant="p"
              component="div"
              className="pending-subtitle"
            >
              {data.stat1}
            </Typography>
          </Box>
          <Box sx={{ marginLeft: "30px" }}>
            <Typography variant="p" component="div" className="pending-title">
              {data.title2}
            </Typography>
            <Typography
              variant="p"
              component="div"
              className="pending-subtitle"
            >
              {data.stat2}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <Box>
            <Typography
              variant="p"
              component="div"
              className="pending-payment-list"
            >
              {data.title1}
              <Typography>
                <Typography
                  variant="span"
                  component="div"
                  className="pending-payment-list"
                  sx={{ marginLeft: "3px" }}
                >
                  {data.stat3}
                </Typography>
              </Typography>
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="p"
              component="div"
              className="pending-payment-list"
            >
              {data.title1}
              <Typography>
                <Typography
                  variant="span"
                  component="div"
                  className="pending-payment-list"
                  sx={{ marginLeft: "3px" }}
                >
                  {data.stat3}
                </Typography>
              </Typography>
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="p"
              component="div"
              className="pending-payment-list"
            >
              {data.title1}
              <Typography>
                <Typography
                  variant="span"
                  component="div"
                  className="pending-payment-list"
                  sx={{ marginLeft: "3px" }}
                >
                  {data.stat3}
                </Typography>
              </Typography>
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <IconButton onClick={onNext} aria-label="next">
        <ArrowForwardIcon />
      </IconButton>
    </Card>
  );
}

function CardNavigator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length
    );
  };

  const currentCard = cardsData[currentIndex];
  return (
    <Box sx={{ width: "100%", maxWidth: 400, mx: "auto" }}>
      <CardWithArrow
        data={cardsData[currentIndex]}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </Box>
  );
}

export default CardNavigator;
