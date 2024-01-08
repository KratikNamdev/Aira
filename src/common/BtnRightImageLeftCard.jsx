import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Colors from "./Colors";
import Image from 'next/image';

const BtnRightImageLeftCard = (props) => {
  const {
    cardTitle = "Adaptive Agents",
    cardDesc = "No content",
    imgSrc = "images/csr/csrheader.png",
    btnText = "Explore",
  } = props;
  return (
    <Box sx={{ mx: "auto", my: 3 }} gap={1}>
      <Grid container direction="row">
        <Grid item xs={12} sm={5} justifySelf="center" alignSelf="center">
          <Card
            raised
            sx={{
              borderRadius: "12px",
              mr: { xs: "0%", md: "-20%" },
              position: "relative",
              zIndex: 1,
            }}
          >
            <CardContent sx={{ pl: 3 }}>
              <Typography
                variant="h6"
                sx={{ color: "#6755DF", fontWeight: 600, mb: 1 }}
              >
                {cardTitle}
              </Typography>
              <Typography variant="subtitle2" sx={{ lineHeight: 1.7, pb: 2 }}>
                {cardDesc}
              </Typography>

              {/* <Button
                variant="contained"
                color="secondary"
                sx={{ color: "#fff", backgroundColor: '#FFAF00' }}
              >
                {btnText}
              </Button> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Image
            src={imgSrc}
            alt={cardTitle}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "12px",
              zindex: -1,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BtnRightImageLeftCard;
